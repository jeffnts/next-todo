import { List } from './components'

export default function ListPage({ params }){
    const { id } = params
    
    return(
        <List 
            id={id}        
        />
    )
}