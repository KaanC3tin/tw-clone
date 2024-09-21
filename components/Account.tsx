import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useAccount } from '@/lib/hook';
import Image from 'next/image';

const Account = () => {
    const account = useAccount()

    // interface AccountStage {
    //     avatar: string;
    // }

    return (
        // <div className='w-[266px] mt-auto'>
        <div className='w-[266px]'>
            <Popover className="bg-black">
                <PopoverButton className="bg-black hover:bg-[#eff3f41a]  h-[65px] rounded-full  mt-[30px] pl-3 my-3 text-white">
                    <Image src={account?.avatar} alt='avatar' width={40} height={40} className='rounded-full ' />
                    <div className='w-[221px]  grid grid-cols  items-center  mr-28 text-[15px] font-normal  '>
                        <div className=' flex '>
                            {account?.name}
                        </div>
                        <div className='text-[#71767b] text-[15px] '>
                            {account?.username}
                        </div>
                    </div>

                </PopoverButton>
                <PopoverPanel>
                    Açılacak Yer!
                </PopoverPanel>
            </Popover>
        </div>
    )
}

export default Account