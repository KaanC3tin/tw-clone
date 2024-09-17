"use client"
import React, { useEffect, useState } from 'react';
import SignOutButton from '../../components/SignOutButton';
import TwitterIconLoading from '@/components/TwitterIconLoading';
import { Icon } from "@iconify-icon/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainMenu } from '@/utilts/page';
import Post from "@/app/post/page"
import More from '@/components/More';

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
                <div className="text-white items-center flex  max-h-screen ">
                    {/* 3 sütunluk alan */}
                    <div className=" bg-black flex flex-col">
                        <div className="flex flex-col items-center mt-2  ">
                            <Link href="/home">
                                {/* <div className='hover:bg-twitterIConHover rounded-full w-14 h-14 flex items-center duration-1000  2xs:mr-[52px] xs:mr-[52px] sm:mr-[52px] md:mr-[52px] lg:mr-[120px]  xl:mr-[52px] '> */}
                                    <div className='hover:bg-twitterIConHover rounded-full w-14 h-14 flex items-center justify-center duration-1000 ml-[-18px] xl:ml-[-18px] lg:ml-[-18px] md:ml-[-18px] sm:ml-[-18px] xs:ml-[-18px] 2xs:ml-[-18px]'>
                                    <Icon
                                        icon="prime:twitter"
                                        width={31}
                                        height={31}
                                    />
                                </div>
                            </Link>

                        </div>
                        <div className='flex flex-col justify-center ml-[200px] w-[275px] mt-2 hover:rounded-full transition-all ease-in-out duration-1000' >
                            <div className="leftSideFont">
                                {mainMenu.map((menu, index) => {
                                    const isActive = pathname === menu.path
                                    if (!menu.path) {
                                        return null;
                                    }
                                    return (
                                        <Link href={menu.path} key={index}
                                            className='  flex items-center  space-x-1.5 duration-1000 group hover:bg-twitterIConHover  hover:rounded-full transition-all ease-in-out w-[275px]'
                                        >
                                            <div className="flex items-center justify-center w-14 h-14 relative mt-0.5 mb-1">
                                                <div className='w-[26.50px] h-[26.50px] relative'>
                                                    {menu?.notification && (
                                                        <span className='w-3.5 h-3.5 rounded-full bg-twitterPostBlue absolute top-[-0px] right-[-17px] text-[11px] flex items-center justify-center'>
                                                            {menu?.notification}
                                                        </span>
                                                    )}
                                                    {menu.icon && (isActive ? menu.icon.active : menu.icon.passive)}
                                                </div>
                                            </div>
                                            <span className={`text-xl hidden xl:block ${isActive ? "font-bold " : ""}`}>{menu.title}</span>

                                        </Link>

                                    );
                                })}
                                <div className='justify-center'>
                                </div>
                                <div className=' mt-0.5 mb-1 flex items-center '>
                                    <div className='flex items-center group hover:bg-twitterIConHover hover:rounded-full duration-1000 transition-all ease-in-out w-full -px-2 space-x-1.5'>
                                        <div className='w-14 h-14 relative flex items-center justify-center '>
                                            <svg
                                                fill='#ffff'
                                                height={26.5}
                                                width={26.5}
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
                                            >
                                                <g>
                                                    <path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className='text-xl -pl-4'>
                                            More
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[240px]'>
                                    <Post />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-auto">
                            <SignOutButton />
                        </div>
                    </div>

                    {/* 4 sütunluk alan */}
                    <div className="w-[600px]  border-twitterBorder border-x h-screen flex items-center">
                        <p>4 sütunluk alan</p>
                    </div>

                    {/* 4 sütunluk alan */}
                    <div className=" flex justify-center items-center ">
                        <p>4 sütunluk alan</p>
                    </div>
                </div>
            )}
        </div>
    );
}


export default Page;
