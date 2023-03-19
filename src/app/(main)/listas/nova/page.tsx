import { NewList } from './components'

export const metadata = {
    title: 'To-Do App | Nova Lista'
}

export default function NewListPage(){
    return(
        <div className='w-full'>
            <NewList />
        </div>
    )
}