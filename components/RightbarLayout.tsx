import Link from 'next/link'
import React, { ReactNode } from 'react'




export interface RightbarLayoutProps<T> {
    title?: string;
    children?: ReactNode;
    more?: string;
    id?: number;
    user?: {
        name?: string;
        username?: string;
        avatar: string;
    }
}

export default function RightbarLayout<T>({ title, more, children }: RightbarLayoutProps<T>) {
    return (
        <div className='border border-twitterBorder  rounded-xl mt-[17px]'>
            <div >
                <div className='my-[12px] font-extrabold text-[20px] text-white mx-3.5'>
                    {title}
                </div>
                {children}
            </div>
            {more && (
                <Link
                    href={more}
                    className='h-[52px] flex items-center  text-twitterBlue hover:bg-zinc-950 text-[15px] hover:rounded-xl overflow-hidden'
                >
                    <Link href="/trend" className='mx-3.5'>
                        Show more
                    </Link>
                </Link>
            )}
        </div>
    )
}

