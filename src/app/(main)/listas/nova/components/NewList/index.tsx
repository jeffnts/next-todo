'use client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { useTranslation } from 'react-i18next'

import { useToast } from 'hooks'

import { Input } from 'components'

import { createList } from 'services/lists'

import formValidation from './validations'

export default function NewList(){
    const formOptions = { resolver: yupResolver(formValidation) }
    const { register, handleSubmit, formState: { errors }} = useForm(formOptions)

    const { t } = useTranslation()

    const toast = useToast()

    const { status, mutate} = useMutation(createList, {
        onSuccess(data){
            toast.success(t('LISTS.CREATE_LIST_TOAST'))
            
            push(`/listas/${data.id}`)
        }
    })

    const { push } = useRouter()

    function onSubmit(values: any){
        mutate(values)
    }
    
    return(
        <div className="flex flex-col gap-4">
             <Input
                label={t('LISTS.LIST') ?? ''}
                placeholder={t('LISTS.LIST_PLACEHOLDER') ?? ''}
                { ...register('name') }
                errors={errors}
            />

                <div
                    className="sm:flex sm:justify-end"
                >
                    <button 
                        className={`btn btn-outline max-sm:w-full sm:w-40 ${status}`}
                        onClick={handleSubmit(onSubmit)}
                    >
                        {t('LISTS.SAVE')}
                    </button>
                </div>
        </div>
    )
}