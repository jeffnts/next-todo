import { useToast as chakraUseToast } from '@chakra-ui/react'

export function useToast(){
    const toast = chakraUseToast()

    function success(message: any){
        toast({
            title: message,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }

    return {
        success
    }
}