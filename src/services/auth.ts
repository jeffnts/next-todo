import { signIn } from 'next-auth/react'

type LoginPayload = {
    name: string
    password: string 
}

export async function login(values: LoginPayload){
    try{
        const result = await signIn('credentials', {
            message: JSON.stringify(values),
            redirect: false
          })
        
        if(!result?.ok) throw new Error('LOGIN.ERROR')
    }catch(error){
        throw error
    }
}