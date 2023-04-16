'use client'

import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'

import { Input } from 'components'

import { forms } from 'consts/errors'

import { required } from 'utils/yup'

import { 
    getUser,
    updateUser } from  'services/users'

import { useToast } from 'hooks'

import { userKey } from 'consts/queries'

import formValidation from './validations'

export default function ProfilePage(){
    const session = useSession() 
     
    const { t } = useTranslation()

    const toast = useToast()
    
    const formOptions = { resolver: yupResolver(
        formValidation
        .concat(
            Yup.object({
                emailConfirmation: required.oneOf([Yup.ref('email'), t(forms.EMAIL_NOT_MATCH)])
            })
        )
    )}

    const { register, handleSubmit, formState: { errors }} = useForm(formOptions)
    
    const { data: user, isLoading, refetch } = useQuery(userKey, getUser)
        
    const { mutate, status } = useMutation(updateUser, {
        onSuccess(){
            refetch()
            toast.success(t('PROFILE.UPDATE_USER_TOAST'))
        }
    })
    
    function onSubmit(values: any){
        mutate(values)
    }

    return (
        <div className='flex flex-col gap-4 w-full'>
            <Input 
                label={t('PROFILE.NAME')}
                placeholder={t('PROFILE.NAME_PLACEHOLDER') ?? ''}
                defaultValue={user?.name || ''}
                { ...register('name') }
                isLoading={isLoading}
                errors={errors}
            />

            <Input 
                label={t('PROFILE.EMAIL')}
                placeholder={t('PROFILE.EMAIL_PLACEHOLDER') ?? ''}
                defaultValue={user?.email || ''}
                { ...register('email') }
                isLoading={isLoading}
                errors={errors}
            />

            <Input 
                label={t('PROFILE.EMAIL_CONFIRMATION')}
                placeholder={t('PROFILE.EMAIL_CONFIRMATION_PLACEHOLDER') ?? ''}
                defaultValue={user?.email || ''}
                { ...register('emailConfirmation') }
                isLoading={isLoading}
                errors={errors}
            />  

            <button
                className={`btn btn-outline ${status}`}
                onClick={handleSubmit(onSubmit)}
            >
                {t('PROFILE.SAVE')}
            </button>

            <button
                className='btn btn-link'
            >
                {t('PROFILE.REDEFINE_PASSWORD')}
            </button>
        </div>
    )
}