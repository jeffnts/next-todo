import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { signIn } from 'next-auth/react'
import { yupResolver } from '@hookform/resolvers/yup'

import { 
    Modal,
    Input } from 'components'

import formValidation from './validations'

import { registerUser } from 'services/users'

type Props = {
    isOpen: boolean
    onClose: () => void
}

export default function RegisterModal(props: Props) {
    const { isOpen, onClose } = props
    
    const formOptions = { resolver: yupResolver(formValidation) }
    const { register, handleSubmit, formState: { errors }, reset } = useForm(formOptions) 
    
    const { status, mutate } = useMutation(registerUser, {
        onSuccess(values){
            signIn('credentials', {
                message: JSON.stringify(values),
                callbackUrl: '/'
            })
        }
    })
    
   
    const onSubmit = (values: any) => {
        mutate(values)
    }

    return (
        <Modal 
            title='Cadastrar novo usuário'
            isOpen={isOpen}
            onClose={onClose}
        >
            <div
                className='flex flex-col gap-6 mt-4'
            >
                <Input 
                    label='Nome'
                    placeholder='Digite seu nome'
                    errors={errors}
                    { ...register('name') }
                />

                <Input 
                    label='E-mail'
                    placeholder='Digite seu e-mail'
                    errors={errors}
                    { ...register('email') }
                />

                <Input 
                    label='Confirmar E-mail'
                    placeholder='Confirme seu e-mail'
                    errors={errors}
                    { ...register('emailConfirmation') }
                />

                <Input 
                    label='Senha'
                    placeholder='Digite sua senha'
                    type='password'
                    errors={errors}
                    { ...register('password') }
                />

                <Input 
                    label='Confirmar Senha'
                    placeholder='Confirme sua senha'
                    type='password'
                    errors={errors}
                    { ...register('passwordConfirmation') }
                />              

                <button 
                  className={`btn btn-outline ${status}`}
                  onClick={handleSubmit(onSubmit)}
                >
                  Confirmar Cadastro
                </button>
            </div>
        </Modal>
    )
}