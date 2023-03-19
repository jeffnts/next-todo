'use client'

import { useQuery } from 'react-query'

import { Skeleton } from 'components'

import { listsQuery } from 'consts/queries'
import { showList } from 'services/lists'

export default function List({ id }: { id: string }){
    const { isLoading, data } = useQuery([listsQuery, id], () => showList(id))
    
    if(isLoading) return <Skeleton />

    return(
        <h1>{data?.name} {id}</h1>
    )
}