import dynamic from 'next/dynamic'

const Body = dynamic(() => import('components/Body'))

const Navbar = dynamic(() => import('components/Navbar'))

const Sidenav = dynamic(() => import('components/Sidenav'))

const Skeleton = dynamic(() => import('./Skeleton'))

const RemoveModal = dynamic(()=> import('./RemoveModal'))

const LanguageSelect = dynamic(() => import('./LanguageSelect'))

export { default as Input } from './Input'

export { Button } from './Button'

export { Modal } from './Modal'

export { SwapTheme } from './SwapTheme'

export { Overlay } from './Overlay'


export { 
    Body,
    Navbar,
    Sidenav,
    Skeleton,
    RemoveModal,
    LanguageSelect
}