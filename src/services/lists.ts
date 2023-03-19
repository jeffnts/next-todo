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