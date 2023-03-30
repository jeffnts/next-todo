import { server } from 'consts/types'
import * as status from 'consts/status'

import { checkListItem } from './services'

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