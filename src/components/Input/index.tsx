import { forwardRef, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label: string,
    errors?: any
}

function Input (props: Props, ref: any) {
    const error = props.errors?.[props.name as any]
    
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
                    placeholder={props.placeholder || 'Digitar'}
                    { ...props }
                    ref={ref}
                />
                <p className="text-red-500 text-xs italic">
                { error?.message } 
            </p>
      </div>
    )
}

export default forwardRef(Input)