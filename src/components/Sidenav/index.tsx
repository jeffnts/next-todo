'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { mapIcons } from 'utils/icons'

import { useTheme } from 'store'

export default function Sidenav(){
     const { state } = useTheme()

     const { t } = useTranslation()

     const menu = [
        {
            id: 1,
            link: '/listas',
            name: t('MENU.SHOW_LISTS'),
            icon: 'list'
        },
        {
            id: 2,
            link: '/listas/nova',
            name: t('MENU.NEW_LISTS'),
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
                                    height={20}
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