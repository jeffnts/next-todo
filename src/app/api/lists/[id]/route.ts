import { getToken } from 'next-auth/jwt'

import { server } from 'consts/types'
import * as status from 'consts/status'

import { showList } from './services'

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