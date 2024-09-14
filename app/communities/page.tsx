"use client"
import React, { useEffect, useState } from 'react';
import SignOutButton from '../../components/SignOutButton';
import TwitterIconLoading from '@/components/TwitterIconLoading';
import { Icon } from "@iconify-icon/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainMenu } from '@/utilts/page';
import Post from "@/app/post/page"

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
        <div className='text-white'>
            {loading ? (
                <div>
                    <TwitterIconLoading />
                </div>
            ) : (
                <div className="text-white grid grid-cols-11 h-screen">
                    {/* 3 sütunluk alan */}
                    <div className="col-span-3 bg-black flex flex-col">
                        <div className="flex flex-col items-center mt-2">
                            <Link href="/home">
                                <div className='hover:bg-twitterIConHover rounded-full w-14 h-14 flex items-center justify-center duration-1000 lg:ml[0px] md:mr[0px] lg:mr-[120px]'>
                                    <Icon
                                        icon="prime:twitter"
                                        width={32}
                                        height={32}
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <div className="leftSideFont">
                                {mainMenu.map((menu, index) => {
                                    const isActive = pathname === menu.path
                                    if (!menu.path) {
                                        return null;
                                    }
                                    return (
                                        <Link href={menu.path} key={index} className='flex items-center space-x-1 rounded-full duration-1000'>
                                            <div className="flex items-center justify-center w-14 h-14 duration-1000 relative">
                                                <div className='w-[26.50px] h-[26.50px] relative'>
                                                    {/* Span'a doğru konumlandırmayı verelim */}
                                                    {menu?.notification && (
                                                        <span className='w-3.5 h-3.5 rounded-full bg-twitterPostBlue absolute top-[-0px] right-[-17px] text-[11px] flex items-center justify-center'>
                                                            {menu?.notification}
                                                        </span>
                                                    )}
                                                    {menu.icon && (isActive ? menu.icon.active : menu.icon.passive)}
                                                </div>
                                            </div>
                                            <span className='text-xl hidden lg:block'>{menu.title}</span>
                                        </Link>
                                    );
                                })}
                                <Post />
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-auto">
                            <SignOutButton />
                        </div>
                    </div>

                    {/* 4 sütunluk alan */}
                    <div className="col-span-4 flex justify-center items-center border-twitterBorder border-x">
                        <p>4 sütunluk alan</p>
                    </div>

                    {/* 4 sütunluk alan */}
                    <div className="col-span-4 flex justify-center items-center">
                        <p>4 sütunluk alan</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Page;
