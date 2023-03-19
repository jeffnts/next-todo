import { getToken } from 'next-auth/jwt'

import { server } from 'consts/types'
import * as status from 'consts/status'

import { 
    createList,
    listLists  } from './services'

export async function POST(request: Request){
    try{
        const body = await request.json()

        const session = await getToken({ req: request as any, secret: process.env.SECRET })   

        const { name } = body 

        const list = await createList({ name, users: [session?.sub] })

        return new Response(JSON.stringify(list), { status: status.server.CREATED })
    }catch(error){
        return new Response(server.ERROR, { status: status.server.ERROR })
    }
}

export async function GET(request: Request){
    try{
        const session = await getToken({ req: request as any, secret: process.env.SECRET })
        
        const lists = await listLists(session?.sub || '')
       
        return new Response(JSON.stringify(lists) as any)
    }catch(error){
        return new Response(server.ERROR, { status: status.server.ERROR })
    }
}