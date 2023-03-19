import { getToken } from 'next-auth/jwt'

import { server } from 'consts/types'
import * as status from 'consts/status'

import { 
    showList,
    createListItem,
    removeList } from './services'

export async function GET(request: Request, { params }){
    try{
        const { id } = params   
        
        const session = await getToken({ req: request as any, secret: process.env.SECRET })  
        
        const list = await showList(id, session?.sub)

        return new Response(JSON.stringify(list) as any)
    }catch(error){
        console.log(error)
        return new Response(server.ERROR, { status: status.server.ERROR })
    }
}

export async function PUT(request: Request, { params }){
    try{
        const { id } = params   
        const body = await request.json()
        const { name } = body       
        
        const list = await createListItem({ id, name })

        return new Response(JSON.stringify(list) as any)
    }catch(error){
        console.log(error)
        return new Response(server.ERROR, { status: status.server.ERROR })
    }
}

export async function DELETE(request: Request, { params }){
    try{
        const { id } = params   
        
        await removeList(id)

        return new Response(server.REMOVED, { status: status.server.SUCCESS })
    }catch(error){
        console.log(error)
        return new Response(server.ERROR, { status: status.server.ERROR })
    }
}