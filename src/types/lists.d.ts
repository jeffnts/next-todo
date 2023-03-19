import { User } from 'types/users'

export interface List {
    id: string;
    name: string;
    users?: User[];
    items: Item[]
}

export type Item = {
    id: string
    name: string
    isChecked: boolean
}