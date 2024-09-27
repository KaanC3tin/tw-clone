import { useTab } from '@/lib/TabContext';
import classNames from 'classnames';
import React, { ReactNode } from 'react'


interface ItemProps {
    children: ReactNode;
    id: string;

}

export default function Item({ children, id }: ItemProps) {


    const { active, setActive } = useTab();

    return (
        <button
            type='button'
            onClick={() => {
                setActive(id)
            }}
            className={classNames('flex-auto text-center hover:bg-twitterIConHover',
                {
                    "text-[#e7e9ea] font-bold font-twitterChirp text-[15px] leading-5": active === id,
                    "text-[#71767b] font-medium text-[15px] leading-5 font-twitterChirp": active !== id
                }
            )}>
            <div className='h-[3.375rem]  relative inline-flex items-center'>
                {children}
                {active === id && (
                    <div className='h-[4px]  absolute bottom-0 left-0 w-full rounded-2xl bg-[#1d9bf0]'>

                    </div>
                )}

            </div>
        </button>

    )
}
