import { List } from 'types/lists'

export async function listLists(){
    try{
        const lists = await fetch('/api/lists').then(async data => data.json())

        return lists as Array<List>
    }catch(error){
        console.log(error)
    }
}

export async function showList(listId: string){
    try{
        const lists = await fetch(`/api/lists/${listId}`).then(async data => data.json())

        return lists as List
    }catch(error){
        console.log(error)
    }
}

export async function createList({ name }: { name: string }){
    try{
        const list = await fetch(
            `/api/lists/`, 
            {
                method: 'POST',
                body: JSON.stringify({ name, userIds: [] })
            }
        ).then(async data => data.json())

        return list
    }catch(error){

    }
}

type CreateListItemProps = {
    name: string
    listId: string
}

export async function createListItem(props: CreateListItemProps){
    const { name, listId } = props

    try{
        const list = await fetch(
            `/api/lists/${listId}`, 
            {
                method: 'PUT',
                body: JSON.stringify({ name })
            }
        ).then(async data => data.json())

        return list
    }catch(error){

    }
}

export async function removeList(id: string){
    try{
        await fetch(
            `/api/lists/${id}`, 
            {
                method: 'DELETE',
            }
        )
    }catch(error){

    }
}

export async function removeListItem(id: string){
    try{
        await fetch(
            `/api/lists/item/${id}`, 
            {
                method: 'DELETE',
            }
        )
    }catch(error){

    }
}

type CheckListItemProps = {
    id: string
    isChecked: boolean
}


export async function checkListItem(props: CheckListItemProps){
    const { id, isChecked  } = props

    try{
        const list = await fetch(
            `/api/lists/item`, 
            {
                method: 'PUT',
                body: JSON.stringify({ isChecked, id })
            }
        ).then(async data => data.json())

        return list
    }catch(error){

    }
}