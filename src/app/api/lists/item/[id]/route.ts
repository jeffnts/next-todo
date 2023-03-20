import { server } from 'consts/types'
import * as status from 'consts/status'

import { removeItem } from './services'

export async function DELETE(request: Request, { params }){
    try{
        const { id } = params   
        
        await removeItem(id)

        return new Response(server.REMOVED, { status: status.server.SUCCESS })
    }catch(error){
        console.log(error)
        return new Response(server.ERROR, { status: status.server.ERROR })
    }
}