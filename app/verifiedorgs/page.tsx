import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const page = () => {
  const pathname = usePathname()
  const isActive = pathname === "#"

  return (
    <div className='mt-0.5 mb-1 '>
      <Link href="#" className='flex items-center  duration-1000 rounded-full leftSidebarIcons'>
        <div className=' rounded-full w-14 h-14 items-center justify-center flex'>
          {!isActive && (<svg fill='#ffff' height={26.5} width={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"></path></g></svg>
          )}
          {isActive && (<svg fill='#ffff' height={26.5} width={26.5} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"><g><path d="M18.766 2H7.323l-4.8 12h5.324l-1.261 8.83L22.414 7h-6.648l3-5z"></path></g></svg>
          )}
        </div>
        <span className={classNames('text-xl  text-span', { "font-bold": isActive })}>
          Verify Orgs
        </span>
      </Link>
    </div>
  )
}

export default page






