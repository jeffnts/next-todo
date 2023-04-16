import { useToast as chakraUseToast } from '@chakra-ui/react'

export function useToast(){
    const toast = chakraUseToast()

    function loadToast(message: string, type: 'success' |  'error'){
        toast({
            title: message,
            status: type,
            duration: 3000,
            isClosable: true,
        })
    }

    function success(message: any){
        loadToast(message, 'success')
    }

    function error(message: any){
        loadToast(message, 'error')
    }

    return {
        success,
        error
    }
}