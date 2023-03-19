import dynamic from 'next/dynamic'

const Body = dynamic(() => import('components/Body'))

const Navbar = dynamic(() => import('components/Navbar'))

const Sidenav = dynamic(() => import('components/Sidenav'))

const Skeleton = dynamic(() => import('./Skeleton'))

const RemoveModal = dynamic(()=> import('./RemoveModal'))

export { default as Input } from './Input'

export * from './Button'

export * from './Modal'

export * from './SwapTheme'

export * from './Overlay'

export * from './Navbar'


export { 
    Body,
    Navbar,
    Sidenav,
    Skeleton,
    RemoveModal 
}