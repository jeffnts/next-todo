'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useQuery, useMutation } from 'react-query'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'

import { queryClient } from 'libs'

import { 
    Skeleton, 
    Input,
    RemoveModal } from 'components'

import { listsQuery } from 'consts/queries'
import { showList } from 'services/lists'

import { useTheme } from 'store'

import { mapIcons } from 'utils/icons'

import trashIcon from 'assets/icons/light/trash.svg'

import { useToast } from 'hooks'

import formValidation from './validations'

import { 
    createListItem,
    removeListItem,
    checkListItem } from 'services/lists'

export default function List({ id }: { id: string }){
    const { state } = useTheme()

    const { t } = useTranslation()

    const [isToAddItem, setIstoAddItem] = useState(false)
    const[isOpenRemoveModal, setIsOpenRemoveModal] = useState(false)
    const[itemToRemove, setItemToRemove] = useState<any>()

    const { isLoading, data } = useQuery([listsQuery, id], () => showList(id))

    const formOptions = { resolver: yupResolver(formValidation) }
    const { register, handleSubmit, formState: { errors }} = useForm(formOptions)

    const toast = useToast()

    const { status: mutationStatus, mutate } = useMutation(createListItem, {
        async onMutate(data){
            const params = [listsQuery, id]

            await queryClient.cancelQueries(params)

            const previousData: any = queryClient.getQueryData(params)
           
            const newData = {
                ...previousData,
                items: [
                    ...previousData.items,
                    { id: '1', name: data.name }
                ]
            }

            queryClient.setQueryData(params, newData)

            return previousData
        },
        onSettled(){
            queryClient.refetchQueries([listsQuery, id])
        },
        onSuccess(){
            toast.success(t('LISTS.CREATE_LIST_ITEM_TOAST'))

            setIstoAddItem(item => !item)
        }
    })

    const { isLoading: isLoadingRemove,  mutate: removeMutate } = useMutation(removeListItem, {
        async onMutate(itemId){
            const params = [listsQuery, id]

            await queryClient.cancelQueries(params)

            const previousData: any = queryClient.getQueryData(params)
            
            const newData = {
                ...previousData,
                items: previousData.items.filter((item: any) => item.id !== itemId)
            }

            queryClient.setQueryData(params, newData)

            return previousData
        },
        onSuccess(){
            toast.success(t('LISTS.REMOVE_LIST_ITEM_TOAST'))

            setIsOpenRemoveModal(false)
        }
    })

    const { mutate: mutateCheckItem } = useMutation(checkListItem, {
       async onMutate(data){
            const params = [listsQuery, id]

            await queryClient.cancelQueries(params)

            const previousData: any = queryClient.getQueryData(params)

            const newData = {
                ...previousData,
                items: previousData.items.map((item: any) => {
                    if(item.id === data.id){
                        return {
                            ...item,
                            isChecked: data.isChecked
                        }
                    }

                    return item
                })
            }

            queryClient.setQueryData(params, newData)

            return previousData
        }
    })

    function onSubmit(values: any){
        mutate({
            ...values,
            listId: id
        })
    }

    function handleAddItem(){
        if(isToAddItem){
            handleSubmit(onSubmit)()
        }else {
            setIstoAddItem(item => !item)
        }
    }

    function openRemoveModal(id: string){
        setItemToRemove(id)
        setIsOpenRemoveModal(true)
    }

    function handleRemoveItem(){
        removeMutate(itemToRemove as any)
    }
    
    if(isLoading) return <Skeleton />

    return(
        <div
            className='flex flex-col gap-6 w-full'
        >
            <div className="alert  shadow-lg">
                <div>
                    <Image 
                        src={mapIcons[state.theme].list}
                        alt='Icone da lista'
                        width={20}
                    />
                    <span>
                        { data?.name }
                    </span>
                </div>
            </div>

            {
                data?.items.map(item => (
                    <div 
                        className="alert  hadow-lg max-sm:flex flex-row"
                        key={item.id}
                    >
                        <div>
                            <input 
                                type="checkbox" 
                                checked={item.isChecked}
                                onChange={() => mutateCheckItem({ isChecked: !item.isChecked, id: item.id })}
                                className="checkbox checkbox-primary" 
                            />

                            <span>
                                { item.name }
                            </span>
                        </div>

                        <div 
                            className="tooltip" 
                            data-tip={t('LISTS.REMOVE_TOOLTIP')}
                        >
                            <Image 
                                src={trashIcon}
                                alt='Ícone de excluir'
                                width={30}
                                className='cursor-pointer'
                                onClick={() => openRemoveModal(item.id)}
                            />
                        </div>     
                    </div>
                ))
            }

            { 
                isToAddItem && (
                    <Input 
                        label={t('LISTS.ITEM')}
                        placeholder={t('LISTS.ITEM_PLACEHOLDER') ?? ''}
                        { ...register('name') }
                        errors={errors}
                    />
                )
            }

            <div
                className="sm:flex sm:justify-end sm:gap-10"
            >
                <button 
                    className={`btn btn-outline max-sm:w-full sm:w-40 max-sm:mb-5 ${mutationStatus}`}
                    onClick={handleAddItem}
                >
                    { isToAddItem? t('LISTS.SAVE_ITEM'): t('LISTS.NEW_ITEM') }
                </button>

                {
                    isToAddItem && (
                        <button 
                            className="btn btn-error btn-accent max-sm:w-full sm:w-40"
                            onClick={() => setIstoAddItem(false)}
                        >
                            { t('LISTS.CANCEL') }
                        </button>
                    )
                }
           </div>
           <RemoveModal 
                isOpen={isOpenRemoveModal}
                onClose={() => setIsOpenRemoveModal(false)}
                onConfirm={handleRemoveItem}
                isLoading={isLoadingRemove}
           />
        </div>
    )
}