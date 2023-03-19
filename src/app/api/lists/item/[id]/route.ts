import { server } from 'consts/types'
import * as status from 'consts/status'

import { 
    checkListItem,
    removeItem } from './services'

export async function PUT(request: Request){
    try{
        const body = await request.json()
        const { id, isChecked } = body       
        
        const list = await checkListItem({ id, isChecked })

        return new Response(JSON.stringify(list) as any)
    }catch(error){
        console.log(error)
        return new Response(server.ERROR, { status: status.server.ERROR })
    }
}

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