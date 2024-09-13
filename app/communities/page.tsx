"use client"
import { mainMenu } from '@/utilts/page'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'




const page = () => {
    const pathname = usePathname();

    return (
        <div className='mt-0.5 mb-1 '>
            {mainMenu.map((menu, index) => {
                const isActive = pathname === menu.path

                return (

                    <Link href={menu.path} key={index} className='flex items-center leftSidebarIcons rounded-full duration-1000'>
                        <div className='rounded-full w-14 h-14 items-center justify-center flex   duration-1000  '>
                            {menu.icon && (isActive ? menu.icon.active : menu.icon.passive)}
                        </div>
                        <span className={classNames('text-xl  text-span', { "font-bold": isActive })}>
                            {menu.title}
                        </span>
                    </Link>
                )
            })}
        </div>
    )
}

export default page