'use client'

import { useQuery } from 'react-query'

import { Skeleton } from 'components'

import { listsQuery } from 'consts/queries'
import { listLists } from 'services/lists'

export default function ListLists(){
    const { isLoading, data } = useQuery(listsQuery, listLists)
    
    if(isLoading){
        return (
            <Skeleton />
        )
    }

    return (
        <div>
            { data?.map(item => (
                <h1>{ item.name }</h1>
            ))}
        </div>
    )
}