import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { signIn } from 'next-auth/react'

import { firebase } from 'libs'

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

export async function resetPassword(email: string){
    try{
        const auth = getAuth(firebase)

        await sendPasswordResetEmail(auth, email)
    }catch(error){
        throw error
    }
}