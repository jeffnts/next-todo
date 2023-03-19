import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { firebase } from 'libs'

type RegisterUserRequest = {
    name: string
    email: string
    password: string
    token: string
}

export async function registerUser(request: RegisterUserRequest) {
    try{
        const { name, email, password, token } = request
       
        const auth = getAuth(firebase)

        const result = await createUserWithEmailAndPassword(auth, email, password)

        const firebaseId = result?.user?.uid

        await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
                firebaseId
            })
        })

        return {
            email,
            password
        }
    }catch(error){
        console.log(error)
    }
}

