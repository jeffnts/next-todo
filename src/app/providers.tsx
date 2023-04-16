'use client'

import { SessionProvider } from 'next-auth/react'

import { QueryClientProvider } from 'react-query'

import { ChakraProvider } from '@chakra-ui/react'

import { queryClient } from 'libs'

import 'i18n'

function Providers({ children }: { children: React.ReactNode }){
    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <ChakraProvider>
                    { children }
                </ChakraProvider>
            </QueryClientProvider>
        </SessionProvider>
    )
}

export default Providers