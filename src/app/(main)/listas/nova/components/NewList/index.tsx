'use client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'

import { Input } from 'components'

import { createList } from 'services/lists'

import formValidation from './validations'

export default function NewList(){
    const formOptions = { resolver: yupResolver(formValidation) }
    const { register, handleSubmit, formState: { errors }} = useForm(formOptions)

    const { status, mutate} = useMutation(createList, {
        onSuccess(data){
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
                label='Lista'
                placeholder='Digite o nome da lista'
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
                        Salvar
                    </button>
                </div>
        </div>
    )
}