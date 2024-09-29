"use client"
import classNames from 'classnames'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'


const Post = () => {
    const pathname = usePathname();
    const isActive = pathname === "#"

    return (
        <div className='mt-0.5 mb-1'>
            <Link href="#" className='flex items-center duration-1000 '>
                <div className='w-full rounded-full h-14  items-center flex duration-1000 hover:opacity-75 bg-[#1d9bf0] justify-center  hidden custom:flex' >
                    <span className={classNames
                        ('font-twitter-bold text-span'
                        , { "font-bold": isActive })}>
                        Post
                    </span>
                </div>

                <div className='post rounded-full w-14 h-14 items-center justify-center flex  duration-1000 custom:hidden '>
                    <svg fill='#ffff' height={26.5} width={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1472mwg r-lrsllp" style={{ color: 'rgb(255, 255, 255)' }}><g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g></svg>
                </div>
            </Link>
        </div>
    )
}

export default Post











