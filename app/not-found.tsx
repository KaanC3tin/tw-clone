"use client"
import React, { useEffect, useState } from 'react';
import TwitterIconLoading from '@/components/TwitterIconLoading';
import { Icon } from "@iconify-icon/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainMenu } from '@/utilts/page';
import Post from "@/app/post/page"
import More from '@/components/More';
import Account from '@/components/Account';
import MiddleBar from '@/components/MiddleBar';
import RightBar from '@/components/RightBar';
import SignOutButton from '@/components/SignOutButton';

const Page: React.FC = () => {
    const pathname = usePathname()
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='text-white min-h-screen h-full'>
            {loading ? (
                <div>
                    <TwitterIconLoading />
                </div>
            ) : (
                <div className="text-white items-center flex min-h-screen overflow-y-auto">
                    <div className=" bg-black flex flex-col mt-[-23px]">
                        <div className='flex flex-col justify-center ml-[208px] w-[275px] h-[933px] mt-2 hover:rounded-full transition-all ease-in-out duration-1000' >
                            <div className="leftSideFont fixed top-0 ">
                                <Link href="/home">
                                    <div className='hover:bg-twitterIConHover rounded-full w-14 h-14 flex items-center justify-center duration-1000 '>
                                        <Icon
                                            icon="prime:twitter"
                                            width={30}
                                            height={30}
                                        />
                                    </div>
                                </Link>
                                {mainMenu.map((menu, index) => {
                                    const isActive = pathname === menu.path
                                    if (!menu.path) {
                                        return null;
                                    }
                                    return (
                                        <Link href={menu.path} key={index}
                                            className='flex items-center  space-x-1.5 duration-1000 group hover:bg-twitterIConHover  hover:rounded-full transition-all ease-in-out w-[181px]'
                                        >
                                            <div className="flex items-center justify-center w-14 h-14 relative mt-0.5 mb-1">
                                                <div className='w-[26.50px] h-[26.50px] relative'>
                                                    {menu?.notification && (
                                                        <span className='w-3.5 h-3.5 rounded-full bg-twitterPostBlue absolute top-[-0px] right-[-17px] text-[10.5px] flex items-center justify-center'>
                                                            {menu?.notification}
                                                        </span>
                                                    )}
                                                    {menu.icon && (isActive ? menu.icon.active : menu.icon.passive)}
                                                </div>
                                            </div>
                                            <span className={`text-xl hidden xl:block ${isActive ? "font-bold" : ""}`}>{menu.title}</span>

                                        </Link>
                                    );
                                })}
                                <div className='mt-0.5 mb-1 flex items-center'>
                                    <More />
                                </div>
                                <div className='w-[240px] mt-4'>
                                    <Post />

                                    <div >
                                        <Account avatar='avatar' name='kaan' username='n0d0dg3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[900px] border-twitterBorder border-x h-screen flex items-center justify-center">
                        <div className="flex flex-col justify-center items-center">
                            <span className="mb-[660px] flex items-center justify-center text-[#71767b] text-[15px] font-normal">
                                Hmm...this page doesn’t exist. Try searching for something else.
                            </span>
                        </div>
                    </div>
                    <div className='h-full'>
                        <RightBar />
                    </div>
                </div>
            )}
        </div>
    );
}


export default Page;


