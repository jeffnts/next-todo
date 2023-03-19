import dynamic from 'next/dynamic'

const NewList = dynamic(() => import('./NewList'))

export {
    NewList
}