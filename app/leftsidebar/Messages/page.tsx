"use client"
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'


const page = () => {
  const pathname = usePathname();
  const isActive = pathname === "#"


  return (
    <div className='mt-0.5 mb-1 '>
      <Link href="#" className='flex items-center leftSidebarIcons rounded-full duration-1000'>
        <div className='rounded-full w-14 h-14 items-center justify-center flex'>
          {!isActive && (<svg fill='#ffff' height={26.5} width={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g>
          </svg>
          )}
          {isActive && (
            <svg fill='#ffff' height={26.5} width={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"></path></g>
            </svg>
          )}
        </div>
        <span className={classNames('text-xl  text-span', { "font-bold": isActive })}>
          Messages
        </span>
      </Link>
    </div>
  )
}

export default page