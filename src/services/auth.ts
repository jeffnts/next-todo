import { signIn } from 'next-auth/react'

type LoginPayload = {
    name: string
    password: string 
}

export async function login(values: LoginPayload){
    try{
        await signIn('credentials', {
            message: JSON.stringify(values),
            callbackUrl: '/'
          })
    }catch(error){
        console.log(error)
    }
}