"use client"
import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'




const page = () => {
  const pathname = usePathname()

  const isActive = pathname === "/home"

  return (
    <div className='mt-0.5 mb-1 '>
      <Link href="/home" className='flex items-center justify-center leftSidebarIcons rounded-full duration-1000'>
        <div className="rounded-full w-14 h-14 items-center justify-center flex duration-1000">
          {!isActive && (<svg fill='#ffff' width={26.5} height={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913h6.638c.511 0 .929-.41.929-.913v-7.075h3.008v7.075c0 .502.418.913.929.913h6.639c.51 0 .928-.41.928-.913V7.904c0-.301-.158-.584-.408-.758zM20 20l-4.5.01.011-7.097c0-.502-.418-.913-.928-.913H9.44c-.511 0-.929.41-.929.913L8.5 20H4V8.773l8.011-5.342L20 8.764z"></path></g>
          </svg>
          )}
          {isActive && (<svg fill='#ffff' width={26.5} height={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path></g></svg>)}
        </div>
        <span className={classNames('text-xl  text-span', { "font-bold": isActive })}>
          Anasayfa
        </span>
      </Link>
    </div>
  )
}

export default page







