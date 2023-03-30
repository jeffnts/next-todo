import { getToken } from 'next-auth/jwt'

import { server } from 'consts/types'
import * as status from 'consts/status'

import { 
    createUser,
    updateUser } from './services'

export async function POST(request: Request){
    try{
        const body = await request.json()

        const { name, email, password, firebaseId } = await body as any
        
        await createUser({ name, email, firebaseId })

        return new Response(JSON.stringify({ email, password }) as any)
    }catch(error){
        return new Response(server.ERROR, { status: status.server.ERROR })
    }
}

export async function PUT(request: Request){
    try{
        const body = await request.json()

        const session = await getToken({ req: request as any, secret: process.env.SECRET })  

        const { name, email } = await body as any
        
        const user = await updateUser({ name, email, id: session?.sub || '' })

        return new Response(JSON.stringify(user) as any)
    }catch(error){
        return new Response(server.ERROR, { status: status.server.ERROR })
    }
}