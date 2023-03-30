'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react'
import { Input, SwapTheme } from 'components'


import { useTheme } from 'store'

import formValidation from './validations'

const RegisterModal = dynamic(() => import('../RegisterModal'))

export default function LoginPage(){
    const formOptions = { resolver: yupResolver(formValidation) }
    const { register, handleSubmit, formState: { errors }} = useForm(formOptions)  

    const [ isOpenModal , setIsOpenModal ] = useState(false)

    const { state } = useTheme()
    
    function onSubmit(values: any){
      signIn('credentials', {
        message: JSON.stringify(values),
        callbackUrl: '/'
      })
    }

    return (
      <div data-theme={state.theme ==='dark'? 'dracula': 'light'}  className="hero min-h-screen bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <Input 
                label='Email'
                placeholder='Digite seu email'
                errors={errors}
                { ...register('email') }
              />
              
              <Input 
                label='Senha'
                type='password'
                placeholder='Digite sua senha'
                errors={errors}
                { ...register('password') }
              />

              <div className="form-control mt-6">
                <button 
                  className={`btn btn-outline`}
                  onClick={handleSubmit(onSubmit)}
                >
                  Entrar 
                </button>
              </div>

              <div className="text-sm font-light flex mt-6">
                  <p>Não tem uma conta ainda? </p>

                  <p
                    className='link link-primary '
                    onClick={() => setIsOpenModal(true)}
                  > 
                    Criar conta
                  </p>                               
              </div>
            </div>
          </div>

          <RegisterModal 
            isOpen={isOpenModal}
            onClose={() => setIsOpenModal(false)}
          />

          <div
            className='absolute top-4 right-4'
          >
            <SwapTheme />
          </div>
      </div>
    )
}