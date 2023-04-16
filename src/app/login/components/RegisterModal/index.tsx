import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { signIn } from 'next-auth/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'

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

    const { t } = useTranslation()
    
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
            title={t('PROFILE.NEW_USER_LABEL')}
            isOpen={isOpen}
            onClose={onClose}
        >
            <div
                className='flex flex-col gap-6 mt-4'
            >
                <Input 
                    label={t('PROFILE.NAME')}
                    placeholder={t('PROFILE.NAME_PLACEHOLDER') ?? ''}
                    errors={errors}
                    { ...register('name') }
                />

                <Input 
                    label={t('PROFILE.EMAIL')}
                    placeholder={t('PROFILE.EMAIL_PLACEHOLDER') ?? ''}
                    errors={errors}
                    { ...register('email') }
                />

                <Input 
                    label={t('PROFILE.EMAIL_CONFIRMATION')}
                    placeholder={t('PROFILE.EMAIL_CONFIRMATION_PLACEHOLDER') ?? ''}
                    errors={errors}
                    { ...register('emailConfirmation') }
                />

                <Input 
                    label={t('PROFILE.PASSWORD')}
                    placeholder={t('PROFILE.PASSWORD_PLACEHOLDER') ?? ''}
                    type='password'
                    errors={errors}
                    { ...register('password') }
                />

                <Input 
                    label={t('PROFILE.PASSWORD_CONFIRMATION')}
                    placeholder={t('PROFILE.PASSWORD_CONFIRMATION_PLACEHOLDER') ?? ''}
                    type='password'
                    errors={errors}
                    { ...register('passwordConfirmation') }
                />              

                <button 
                  className={`btn btn-outline ${status}`}
                  onClick={handleSubmit(onSubmit)}
                >
                  {t('PROFILE.NEW_USER_BUTTON')}
                </button>
            </div>
        </Modal>
    )
}