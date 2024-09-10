import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const page = () => {
    const pathname = usePathname()
    const isActive = pathname === "#"

    return (
        <div>
            <Link href="#" className='flex items-center  duration-1000 rounded-full leftSidebarIcons'>
                <div className=' rounded-full w-14 h-14 items-center justify-center flex'>
                    {!isActive && (<svg fill='#ffff' height={26.5} width={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                    )}
                    {isActive && (<svg fill='#ffff' height={26.5} width={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path></g></svg>
                    )}
                </div>
                <span className={classNames('text-xl  text-span', { "font-bold": isActive })}>
                    Bookmarks
                </span>
            </Link>
        </div>
    )
}

export default page






