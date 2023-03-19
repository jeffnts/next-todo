import { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    isLoading?: boolean
}

export function Primary(props: Props) {
    return (
        <button
            { ...props }
            className={`
                w-full
                bg-blue-500 hover:bg-blue-700 text-white 
                font-bold py-2 px-4 rounded focus:outline-none 
                focus:shadow-outline
                ${(props.disabled || props.isLoading) && 'opacity-50 cursor-not-allowed'}
            `}
        >   
            { props.children }
        </button>
    )
}