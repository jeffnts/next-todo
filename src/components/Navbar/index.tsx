'use client'

import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { SwapTheme } from 'components'

export default  function Navbar(){
    return(
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link 
                    className="btn btn-ghost normal-case text-xl"
                    href='/'
                >
                    To-Do App
                </Link>
            </div>
            <div className="flex-none">
                <label tabIndex={0} className="btn btn-ghost btn-circle mr-10">
                   <SwapTheme />
                </label>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <Image 
                        src="https://raw.githubusercontent.com/dynamic-fox-mcc-04/FancyTodo-client/ef05a47406f231ef5ae82a187e3fa9cbda57de0d/img/avatar.svg" 
                        alt= 'Ícone do avatar'    
                    />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                    <Link 
                        className="justify-between"
                        href='/perfil'
                    >
                        Perfil
                    </Link>
                    </li>
                    <li>
                        <p 
                            className="justify-between"
                            onClick={() => signOut()}
                        >
                            Sair
                            <Image 
                                src="https://www.freeiconspng.com/thumbs/sign-out-icon/sign-out-logout-icon-0.png" 
                                alt="ícone botão de sair" 
                                width={20}
                            />
                        </p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}