import { useTab } from '@/lib/TabContext';
import React, { ReactNode } from 'react'


interface ItemProps {
    children: ReactNode;
    id: string;
    active:()=> void;
}

export default function Item({ children, id }: ItemProps) {


    const { active } = useTab();

    return (
        <button
            type='button'
            className='flex-auto text-center'>
            <div className='h-[3.375rem]  relative inline-flex items-center'>
                {children}
                {
                    active === id && (
                        <div className='h-[4px]  absolute bottom-0 left-0 w-full rounded-2xl bg-[#1d9bf0]'>

                            )   
}                </div>
            </div>
        </button>

    )
}
