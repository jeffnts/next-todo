'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useTranslation } from 'react-i18next';

import { SwapTheme } from 'components'
import LanguageSelect from 'components/LanguageSelect'

import logoutIcon from 'assets/icons/logout.svg'
import avatarIcon from 'assets/icons/avatar.svg'
import logoImage from 'assets/images/logo.png'

export default  function Navbar(){
    const { t } = useTranslation()
    
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link 
                    className="btn btn-ghost normal-case text-xl"
                    href='/'
                >
                    <Image 
                        src={logoImage}
                        alt='Logo'
                        width={150}
                        height={50}
                    />
                </Link>
            </div>
            <div className="flex-none">
                <LanguageSelect />

                <label tabIndex={0} className="btn btn-ghost btn-circle mr-10">
                   <SwapTheme />
                </label>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <Image 
                        src={avatarIcon}
                        alt={''}
                        width={20} 
                        height={20}   
                    />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <Link 
                        className="justify-between"
                        href='/perfil'
                    >
                        {t('MENU.PROFILE')}
                    </Link>
                    </li>
                    <li>
                        <p 
                            className="justify-between"
                            onClick={() => signOut()}
                        >
                            {t('MENU.LOGOUT')}
                            <Image 
                                src={logoutIcon}
                                alt="ícone botão de sair" 
                                width={20}
                                height={20}
                            />
                        </p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}