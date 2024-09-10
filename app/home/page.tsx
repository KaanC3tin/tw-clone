
// "use client"
// import React, { useEffect, useState } from 'react';
// import SignOutButton from '../../components/SignOutButton';
// import TwitterIconLoading from '@/components/TwitterIconLoading';
// import { Icon } from "@iconify-icon/react"





// const Home: React.FC = () => {
//     const [loading, setLoading] = useState<boolean>(true)



//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 1500)

//         return () => clearTimeout(timer)
//     }, [])



//     return (

//         <div className='text-white'>
//             {loading ? (
//                 <div>
//                     <TwitterIconLoading />
//                 </div>
//             ) : (
//                 <>


//                     <div className="text-white grid grid-cols-8 h-screen">

//                         <div className=" col-span-2 bg-gray-700">
//                             {/* 2 sütunluk alan */}
//                         <Icon
//                             icon="prime:twitter"
//                             width={40}
//                             height={40}
//                                 />
//                                 <div className='  bottom-20 left-5'>
//                                     <SignOutButton />
//                                 </div>
//                             <div className="flex justify-center items-center h-full">
//                                 <p>2 sütunluk alan</p>
//                             </div>
//                         </div>
//                         <div className="col-span-3 bg-gray-900">
//                             {/* 3 sütunluk alan */}
//                             <div className="flex justify-center items-center h-full">
//                                 <p>3 sütunluk alan</p>
//                             </div>
//                             </div>
//                             <div className="col-span-3 bg-gray-900">
//                                 {/* 3 sütunluk alan */}
//                                 <div className="flex justify-center items-center h-full">
//                                     <p>3 sütunluk alan</p>
//                                 </div>
//                             </div>
//                     </div>

//                 </>
//             )}

//         </div>
//     )
// }

// export default Home


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
                            <div className=' hover:bg-twitterIConHover rounded-full w-14  h-14 items-center justify-center flex mr-24   duration-1000  '>
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
                    <div className="col-span-4 bg-gray-900 flex justify-center items-center">
                        <p>4 sütunluk alan</p>
                    </div>

                    {/* 3 sütunluk alan */}
                    <div className="col-span-4 bg-gray-800 flex justify-center items-center">
                        <p>4 sütunluk alan</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
