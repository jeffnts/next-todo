'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from 'react-query'
import { useTranslation } from 'react-i18next'

import { Input } from 'components'

import { forms } from 'consts/errors'

import { required } from 'utils/yup'

import { resetPassword } from 'services/auth'
import { 
    getUser,
    updateUser } from  'services/users'

import { useToast } from 'hooks'

import { userKey } from 'consts/queries'

import { ChangePasswordModal } from 'components/ChangePasswordModal'
import { ChangePasswordConfirmationModal } from 'components/ChangePasswordConfirmationModal'


import formValidation from './validations'

export default function ProfilePage(){
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false)
    const [isChangePasswordConfirmationModalOpen, setIsChangePasswordConfirmationModalOpen] = useState(false)
     
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

    const { register, handleSubmit, getValues, formState: { errors }} = useForm(formOptions)
    
    const { data: user, isLoading, refetch } = useQuery(userKey, getUser)
        
    const { mutate, status } = useMutation(updateUser, {
        onSuccess(){
            refetch()
            toast.success(t('PROFILE.UPDATE_USER_TOAST'))
        }
    })

    const {mutate: mutateChangingPassword, isLoading: isLoadingChangingPassword } = useMutation(resetPassword, {
        onSuccess(){
            setIsChangePasswordModalOpen(false)
            setIsChangePasswordConfirmationModalOpen(true)
        }
    })
    
    function onSubmit(values: any){
        mutate(values)
    }

    async function confirmPasswordChanging(){
        const email = getValues('email')
        mutateChangingPassword(email)
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
                onClick={() => setIsChangePasswordModalOpen(true)}
            >
                {t('PROFILE.REDEFINE_PASSWORD')}
            </button>

            <ChangePasswordModal 
                isOpen={isChangePasswordModalOpen}
                onClose={() => setIsChangePasswordModalOpen(false)}
                onConfirm={confirmPasswordChanging}
                isLoading={isLoadingChangingPassword}
            />

            <ChangePasswordConfirmationModal 
                isOpen={isChangePasswordConfirmationModalOpen}
                onClose={() => setIsChangePasswordConfirmationModalOpen(false)}
                onConfirm={() => setIsChangePasswordConfirmationModalOpen(false)}
            />
        </div>
    )
}