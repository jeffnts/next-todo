import dynamic from 'next/dynamic'

const List = dynamic(() => import('./List'))

export {
    List
}