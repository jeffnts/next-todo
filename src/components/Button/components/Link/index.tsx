import { ButtonHTMLAttributes } from 'react'

export function Link(props: ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <button
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            { ...props }
        >
            { props.children }
        </button>
    )
}