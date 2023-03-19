import { server } from 'consts/types'
import * as status from 'consts/status'

import { createUser } from './services'

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