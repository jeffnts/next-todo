'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query'
import { useTranslation } from 'react-i18next'

import { Input, SwapTheme, LanguageSelect } from 'components'

import { useTheme } from 'store'

import { login } from 'services/auth'

import formValidation from './validations'

const RegisterModal = dynamic(() => import('../RegisterModal'))

export default function LoginPage(){
    const formOptions = { resolver: yupResolver(formValidation) }
    const { register, handleSubmit, formState: { errors }} = useForm(formOptions)  

    const [ isOpenModal , setIsOpenModal ] = useState(false)

    const { state } = useTheme()

    const { t } = useTranslation()

    const { mutate, status } = useMutation(login)
    
    function onSubmit(values: any){
      mutate(values)
    }

    return (
      <div data-theme={state.theme ==='dark'? 'dracula': 'light'}  className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <Input 
                label={t('LOGIN.EMAIL')}
                placeholder={t('.EMAIL_PLACEHOLDER') ?? ''}
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
      </div>
    )
}