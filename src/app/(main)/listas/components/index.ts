import dynamic from 'next/dynamic'

const ListLists = dynamic(() => import('./ListLists'))

export {
    ListLists
}