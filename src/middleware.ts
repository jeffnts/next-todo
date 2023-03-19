import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

import { server } from 'consts/types'
import * as status from 'consts/status'

export async function middleware(req: NextRequest){
    const session = await getToken({ req, secret: process.env.SECRET })    
    
    if(req.url.includes('/api')){
        if(!session){
            return new Response(server.UNAUTHORIZED, { status: status.server.UNAUTHORIZED })
        }
    }

    if(session){
        return NextResponse.next()
    }

   return NextResponse.redirect(new URL('/login', req.url))
}

export const config = { matcher: ['/', '/sobre', '/perfil/:path*', '/listas/:path*', '/api/lists/:path*'] }