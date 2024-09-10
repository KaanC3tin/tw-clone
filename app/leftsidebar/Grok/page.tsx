import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'




const page = () => {
    const pathname = usePathname();
    const isActive = pathname === "#"

    return (
        <div>
            <Link href="#" className='flex  items-center leftSidebarIcons rounded-full duration-1000'>
                <div className='rounded-full w-14 h-14 items-center justify-center flex   duration-1000  '>
                    {!isActive && (<svg fill='#ffff' height={26.5} width={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><g clip-path="url(#0-clip0_2592_269)" clip-rule="evenodd"><path d="M18 4.1H6c-1.05 0-1.9.85-1.9 1.9v12c0 1.05.85 1.9 1.9 1.9h12c1.05 0 1.9-.85 1.9-1.9V6c0-1.05-.85-1.9-1.9-1.9zM6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4z"></path><path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path></g><defs><clipPath id="0-clip0_2592_269"><rect height="20" rx="1" width="20" x="2" y="2"></rect></clipPath></defs></g></svg>
                    )}
                    {isActive && (
                        <svg fill='#ffff' height={26.5} width={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path clip-rule="evenodd" d="M6 2h12c2.21 0 4 1.79 4 4v12c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4zm.643 15.8l8.109-11.58h2.515L9.158 17.8H6.643z" fill-rule="evenodd"></path></g></svg>
                    )}
                </div>
                <span className={classNames('text-xl  text-span', { "font-bold": isActive })}>
                    Grok
                </span>
            </Link>
        </div>
    )
}

export default page