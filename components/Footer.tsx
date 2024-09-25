import Link from 'next/link'
import React from 'react'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

const Footer = () => {
    return (
        <div className='my-[18px]'>
            <div className='text-[13px] font-normal text-[#71767b] w-[348px] h-[50px] flex-wrap '>
                <div className='mr-[-11px] mx-4'>
                    <Link href="/home" className='hover:underline mr-1' >
                        Terms of Service
                    </Link>
                    <Link href="/home" className='hover:underline mr-1'>
                        Privacy Policy
                    </Link>
                    <Link href="/home" className='hover:underline mr-1 w-full'>
                        Cookie Policy
                    </Link>
                    <div className='flex'>
                        
                    <Link href="/home" className='hover:underline mr-1'>
                        imprint
                    </Link>
                    <Link href="/home" className='hover:underline mr-1'>
                        Accessibility
                    </Link>
                    <Link href="/home" className='hover:underline mr-1'>
                        Ads info
                    </Link>
                        <Popover className="relative">
                            <PopoverButton className='hover:underline '>
                                More ...
                            </PopoverButton>
                            <PopoverPanel className="bg-black absolute overflow-hidden  flex flex-col outline-none  text-[15px] font-twitterChirp font-bold shadow-box text-white rounded-xl">
                                <Link className=' hover:bg-twitterIConHover w-[176px] h-[44] py-3 px-2 leading-5' href="/home">About</Link>
                                <Link className=' hover:bg-twitterIConHover w-[176px] h-[44] py-3 px-2 leading-5' href="/home">Download the X app</Link>
                                <Link className=' hover:bg-twitterIConHover w-[176px] h-[44] py-3 px-2 leading-5' href="/home">X for Business</Link>
                                <Link className=' hover:bg-twitterIConHover w-[176px] h-[44] py-3 px-2 leading-5' href="/home">Developers</Link>
                            </PopoverPanel>
                        </Popover>
                    </div>
                    <p >
                        © 2024 n0d0dg3.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer