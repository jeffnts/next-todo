import { ListLists } from './listas/components'

export default function Home (){
    return (
        <div
            className="container flex flex-row gap-6 flex-wrap"
        >
            <ListLists />
        </div>
        
    )
}