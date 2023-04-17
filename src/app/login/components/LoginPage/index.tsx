'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { useTranslation } from 'react-i18next'

import { Input, SwapTheme, LanguageSelect } from 'components'

import { ChangePasswordModal } from 'components/ChangePasswordModal'
import { ChangePasswordConfirmationModal } from 'components/ChangePasswordConfirmationModal'

import { useTheme } from 'store'

import { 
  login,
  resetPassword } from 'services/auth'

import { useToast } from 'hooks'

import formValidation from './validations'

import loginLogoImage from 'assets/images/loginLogo.png'

const RegisterModal = dynamic(() => import('../RegisterModal'))

export default function LoginPage(){
    const formOptions = { resolver: yupResolver(formValidation) }
    const { register, handleSubmit, getValues, setError, formState: { errors }} = useForm(formOptions)  

    const [ isOpenModal , setIsOpenModal ] = useState(false)
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false)
    const [isChangePasswordConfirmationModalOpen, setIsChangePasswordConfirmationModalOpen] = useState(false)

    const { state } = useTheme()

    const { t } = useTranslation()

    const toast = useToast()

    const { push } = useRouter()

    const { mutate, status } = useMutation(login, {
      onSuccess(){
        push('/')
      },
      onError(error: any){        
        toast.error(t(error?.message as string))
      }
    })
    
    function onSubmit(values: any){
      mutate(values)
    }

    const {mutate: mutateChangingPassword, isLoading: isLoadingChangingPassword } = useMutation(resetPassword, {
      onSuccess(){
          setIsChangePasswordModalOpen(false)
            setIsChangePasswordConfirmationModalOpen(true)
        }
    })

    function handleOpenChangingPassword(){
      const email = getValues('email')

      if(!email?.length){
        return setError('email', { message: 'FORMS.REQUIRED'})
      }

      setError('email', { message: undefined })
      setIsChangePasswordModalOpen(true)
    }

    async function confirmPasswordChanging(){
      const email = getValues('email')
      mutateChangingPassword(email)
    }

    return (
      <div data-theme={state.theme ==='dark'? 'dracula': 'light'}  className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className='grid justify-items-center '>
                <Image 
                  src={loginLogoImage}
                  alt='Login logo'
                  width={200}
                  height={50}
                />
              </div>

              <Input 
                label={t('LOGIN.EMAIL')}
                placeholder={t('LOGIN.EMAIL_PLACEHOLDER') ?? ''}
                errors={errors}
                { ...register('email') }
              />
              
              <Input 
                label={t('LOGIN.PASSWORD')}
                placeholder={t('LOGIN.PASSWORD_PLACEHOLDER') ?? ''}
                type='password'
                errors={errors}
                { ...register('password') }
              />

              <div className="form-control mt-6">
                <button 
                  className={`btn btn-outline ${status}`}
                  onClick={handleSubmit(onSubmit)}
                >
                  {t('LOGIN.BUTTON')}
                </button>
              </div>

              <div className="text-sm font-light mt-6 flex justify-center">
                  <button
                    className='link link-primary'
                    onClick={handleOpenChangingPassword}
                  > 
                    {t('LOGIN.FORGOT_PASSWORD_BUTTON')}
                  </button>   
              </div>

              <div className="text-sm font-light flex mt-6">
                  <p>{t('LOGIN.CREATE_ACCOUNT_LABEL')} </p>

                  <p
                    className='link link-primary '
                    onClick={() => setIsOpenModal(true)}
                  > 
                    {t('LOGIN.CREATE_ACCOUNT_BUTON')}
                  </p>                               
              </div>
            </div>
          </div>

          <RegisterModal 
            isOpen={isOpenModal}
            onClose={() => setIsOpenModal(false)}
          />

          <div
            className='absolute top-4 flex right-4'
          >
            <LanguageSelect />
            <SwapTheme />
          </div>

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