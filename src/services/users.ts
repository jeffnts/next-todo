import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { firebase } from 'libs'


export async function getUser(){
    try{
        return fetch('/api/users').then(async data => data.json())
    }catch(error){
        console.log(error)
    }
}

type RegisterUserRequest = {
    name: string
    email: string
    password: string
    token: string
}


export async function registerUser(request: RegisterUserRequest) {
    try{
        const { name, email, password } = request
       
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

type UpdateUserRequest = {
    name: string
    email: string    
}

export async function updateUser(request: UpdateUserRequest){
    try{
        const { name, email } = request

        await fetch('/api/users', {
            method: 'PUT',
            body: JSON.stringify({
                name,
                email
            })
        })       

        return {
            name,
            email
        }
    }catch(error){
        console.log(error)
    }
}
