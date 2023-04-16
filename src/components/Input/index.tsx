'use client'

import { forwardRef, InputHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label: string
    isLoading?: boolean
    errors?: any
}

function Input (props: Props, ref: any) {
    const error = props.errors?.[props.name as any]
    const { isLoading, ...rest } = props

    const { t } = useTranslation()
    
    return (
        <div >
            <label className="label-text" htmlFor={props.name}>
            { props.label }
            </label>
            <input 
                className={
                    `
                    input input-bordered input-info w-full 
                    ${error? 'border-red-500': 'border-gray-300 '}                   
                    `
                }
                    { ...rest }  
                    placeholder={isLoading? t('INPUT.LOADING') || '' : rest.placeholder}
                    disabled={isLoading || props.disabled}                  
                    ref={ref}
                />
                <p className="text-red-500 text-xs italic">
                { t(error?.message) } 
            </p>
      </div>
    )
}

export default forwardRef(Input)