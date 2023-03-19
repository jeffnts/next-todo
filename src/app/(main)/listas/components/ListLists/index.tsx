'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useQuery, useMutation } from 'react-query'

import { queryClient } from 'libs'

import { 
    Skeleton,
    RemoveModal } from 'components'

import { listsQuery } from 'consts/queries'
import { 
    listLists,
    removeList } from 'services/lists'

export default function ListLists(){
    const { isLoading, data } = useQuery(listsQuery, listLists)

    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)
    const [listToRemove, setListToRemove] = useState<string | undefined>()

    function handleRemoveList(id: string){
        setListToRemove(id)
        setIsRemoveModalOpen(true)
    }

    const {isLoading: isLoadingRemoveMutatate, mutate} = useMutation(removeList, {
        async onMutate(id){
            await queryClient.cancelQueries(listsQuery)

            const previousData: any = queryClient.getQueryData(listsQuery)

            const newData = previousData.filter(item => item.id !== id)

            queryClient.setQueryData(listsQuery, newData)

            return previousData
        },
        onSuccess(){
            setIsRemoveModalOpen(false)
        }
    })
    
    if(isLoading){
        return (
            <Skeleton />
        )
    }

    return (
        <div
            className="container flex flex-row gap-6 flex-wrap mx-auto "
        >
            {
                data?.map(item => (
                    <div 
                        className="card w-96 bg-base-100 shadow-xl"
                        key={item.id}
                    >
                        <div className="card-body">
                            <h2 className="card-title">
                                { item.name }
                            </h2>
                            <div className="card-actions justify-end gap-6">
                            <Link 
                                className="btn btn-outline"
                                href={`/listas/${item.id}`}
                            >
                                Ver Lista
                            </Link>

                            <button 
                                className="btn btn-error"
                                onClick={() => handleRemoveList(item.id)}
                            >
                                Remover Lista
                            </button>
                            </div>
                        </div>
                    </div>
                ))
            } 

            <RemoveModal 
                isOpen={isRemoveModalOpen}
                onClose={() => setIsRemoveModalOpen(false)}
                title='Remover Lista'
                description='Tem certeza que deseja remover esta lista?'
                isLoading={isLoadingRemoveMutatate}
                onConfirm={() => mutate(listToRemove)}
            />          
        </div>
    )
}