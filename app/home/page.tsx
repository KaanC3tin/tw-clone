
"use client"
import React, { useEffect, useState } from 'react';
import SignOutButton from '../../components/SignOutButton';
import TwitterIconLoading from '@/components/TwitterIconLoading';
import { Icon } from "@iconify-icon/react";
import Link from 'next/link';
import LeftSideBar from "@/app/leftsidebar/page"

const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
        /*test*/
    }, []);

    return (
        <div className='text-white'>
            {loading ? (
                <div>
                    <TwitterIconLoading />
                </div>
            ) : (
                <div className="text-white grid grid-cols-11 h-screen">
                    {/* 2 sütunluk alan */}
                    <div className="col-span-3 bg-black flex flex-col">
                        <div className="flex flex-col items-center mt-2 ">
                            <div className=' hover:bg-twitterIConHover rounded-full w-14  h-14 items-center justify-center flex iconMargin  duration-1000  '>
                                <Link href="/home">
                                    <Icon
                                        icon="prime:twitter"
                                        width={32}
                                        height={32}
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className='flex items-center justify-center   '>
                            <LeftSideBar />
                        </div>
                        <div className="flex justify-center items-center h-1/2">
                            <SignOutButton />
                        </div>
                    </div>

                    {/* 3 sütunluk alan */}
                    <div className="col-span-4 flex justify-center items-center max-h-screen border-gray-500 border-x-2">
                        <p>4 sütunluk alan</p>
                    </div>

                    {/* 3 sütunluk alan */}
                    <div className="col-span-4 flex justify-center items-center">
                        <p>4 sütunluk alan</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
