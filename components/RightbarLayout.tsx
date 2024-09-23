import Link from 'next/link'
import React from 'react'

export default function RightbarLayout({ title, more, children }) {
    return (
        <div className='border border-twitterBorder  rounded-xl mt-[17px] '>
            <div className=''>
                <div className='my-[12px] font-extrabold text-[20px] text-white mx-3.5'>
                    {title}
                </div>
                <div>
                    {children}
                </div>
            </div>
            {more && (
                <Link
                    href={more}
                    className='h-[52px] flex items-center  text-twitterBlue hover:bg-zinc-950 text-[15px] '
                >
                    <div className='mx-3.5'>
                    Show more
                    </div>
                </Link>
            )}
        </div>
    )
}

