'use client'

import { useTheme } from 'store'

export default function Body({ children }: { children: React.ReactNode }){
    const { state } = useTheme()

    return (
        <div 
            data-theme={state.theme ==='dark'? 'dracula': 'light'}
            style={{ background: state.theme === 'dark'? '#3D3F48': '#F2F2F2' }}
            className='body-main'
        >
            { children }
        </div>
    )
}