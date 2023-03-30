'use client'

import { useSession } from 'next-auth/react'

import { Input } from 'components'

export default function ProfilePage(){
    const session = useSession()   

    return (
        <div className='flex flex-col gap-4 w-full'>
            <Input 
                label='Nome'
                placeholder='Digite o nome do usuário' 
                defaultValue={session.data?.user?.name || ''}
            />

            <Input 
                label='E-mail'
                placeholder='Digite o endereço de email'
                defaultValue={session.data?.user?.email || ''}
            />

            <Input 
                label='Confirmar E-mail'
                placeholder='Confirme seu e-mail'
                defaultValue={session.data?.user?.email || ''}
            />  

            <button
                className='btn btn-outline'
            >
                Salvar dados
            </button>

            <button
                className='btn btn-link'
            >
                Redefinir senha
            </button>
        </div>
    )
}