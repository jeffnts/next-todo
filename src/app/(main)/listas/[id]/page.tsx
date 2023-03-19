import { List } from './components'

export const metadata = {
    title: 'To-Do App | Lista'
}

export default function ListPage({ params }){
    const { id } = params
    
    return(
        <List 
            id={id}        
        />
    )
}