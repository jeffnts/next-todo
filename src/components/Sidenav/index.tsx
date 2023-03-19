'use client'

import Image from 'next/image'
import Link from 'next/link'

import { mapIcons } from 'utils/icons'

import { useTheme } from 'store'

export default function Sidenav(){
     const { state } = useTheme()

     const menu = [
        {
            id: 1,
            link: '/listas',
            name: 'Ver listar',
            icon: 'list'
        },
        {
            id: 2,
            link: '/listas/nova',
            name: 'Nova Lista',
            icon: 'plus'
        }
    ]

    return(
        <div
            className='
            max-sm:fixed
            max-sm:z-50
            max-sm:bottom-4
            max-sm:justify-center 
            max-sm:flex 
            max-sm:w-full'
        >
            <ul
                className="
                menu 
                max-sm:menu-horizontal 
                max-sm:rounded-box  
                max-sm:p-2
                w-56  rounded-box
                bg-base-100 
            "
            >
                {
                    menu.map(item => (
                        <li
                            key={item.id}
                        >
                            <Link
                                href={item.link}
                            >
                                <Image 
                                    src={mapIcons[state.theme][item.icon]}
                                    alt={`Ícone ${item.name}`}
                                    width={20}
                                />

                                <div className='max-sm:hidden'>
                                    { item.name }
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}