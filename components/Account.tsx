import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useAccount } from '@/lib/hook';
import Image from 'next/image';
import AccountMore from './AccountMore';

const Account = () => {
    const account = useAccount()


    return (
        // <div className='w-[266px] mt-auto'>
        <div className='w-[266px] z-50'>
            <Popover className="relative">
                <PopoverButton className="bg-black hover:bg-[#eff3f41a] h-[65px] rounded-full mt-[30px] pl-3 my-3 text-white 
                    outline-none focus:outline-none focus:ring-0 flex items-center justify-between"
                    style={{ transform: "none", transition: "none" }}>
                    <Image src={account?.avatar} alt='avatar' width={40} height={40} className='rounded-full ' />
                    <div className='w-[221px] grid grid-cols items-center text-[15px] font-normal'>
                        <div className='flex mx-3'>
                            {account?.name}
                        </div>
                        <div className='flex'>
                            <div className='text-[#71767b] text-[15px] mx-3 '>
                                {account?.username}
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <svg fill='#ffff' width={18.75} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i">
                            <g>
                                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                            </g>
                        </svg>
                    </div>
                </PopoverButton>
                <PopoverPanel className="w-[300px] absolute bottom-full -translate-x  bg-black shadow-box rounded-2xl flex flex-col text-xl overflow-hidden">
                    <AccountMore />
                </PopoverPanel>
            </Popover>
        </div>
    )
}

export default Account