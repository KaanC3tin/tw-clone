
// "use client"
// import React, { useEffect, useState } from 'react';
// import SignOutButton from '../../components/SignOutButton';
// import TwitterIconLoading from '@/components/TwitterIconLoading';
// import { Icon } from "@iconify-icon/react";
// import Link from 'next/link';
// import Homes from '@/app/homes/page';
// import Explore from '@/app/explore/page';
// import Alert from "@/app/notification/page"
// import Messages from "@/app/messages/page";
// import Grok from '@/app/grok/page';
// import Bookmarks from '@/app/bookmarks/page';
// import Communities from '@/app/communities/page';
// import Premium from '@/app/premium/page';
// import VerifiedOrgs from '@/app/verifiedorgs/page';
// import Profile from '@/app/profile/page';
// import Post from '@/app/post/page';


// const Home: React.FC = () => {
//     const [loading, setLoading] = useState<boolean>(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 1000);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className='text-white'>
//             {loading ? (
//                 <div>
//                     <TwitterIconLoading />
//                 </div>
//             ) : (
//                 <div className="text-white grid grid-cols-11 h-screen">
//                     {/* 2 sütunluk alan */}
//                     <div className="col-span-3 bg-black flex flex-col">
//                         <div className="flex flex-col items-center mt-2 ">
//                             <div className=' hover:bg-twitterIConHover rounded-full w-14  h-14 items-center justify-center flex iconMargin  duration-1000  '>
//                                 <Link href="/home">
//                                     <Icon
//                                         icon="prime:twitter"
//                                         width={32}
//                                         height={32}
//                                     />
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className='flex items-center justify-center'>
//                             <div className="leftSideFont ">
//                                 <Homes />
//                                 <Explore />
//                                 <Alert />
//                                 <Messages />
//                                 <Grok />
//                                 <Bookmarks />
//                                 <Communities />
//                                 <Premium />
//                                 <VerifiedOrgs />
//                                 <Profile />
//                                 <Post />
//                                 {/* <Accounts /> */}
//                             </div>
//                         </div>
//                         <div className="flex justify-center items-center h-1/2">
//                             <SignOutButton />
//                         </div>
//                     </div>

//                     {/* 3 sütunluk alan */}
//                     <div className="col-span-4 flex justify-center items-center max-h-screen border-twitterBorder border-x">
//                         <p>4 sütunluk alan</p>
//                     </div>

//                     {/* 3 sütunluk alan */}
//                     <div className="col-span-4 flex justify-center items-center ">
//                         <p>4 sütunluk alan</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Home;


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
                            <div className='hover:bg-twitterIConHover rounded-full w-14 h-14 items-center justify-center flex iconMargin duration-1000'>
                                <Link href="/home">
                                    <Icon
                                        icon="prime:twitter"
                                        width={32}
                                        height={32}
                                    />
                                </Link>
                                </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className="leftSideFont">
                                {mainMenu.map((menu, index) => {
                                    const isActive = pathname === menu.path
                                    if (!menu.path) {
                                        return null;
                                    }
                                    return (
                                        <Link href={menu.path} key={index} className='flex items-center leftSidebarIcons rounded-full duration-1000'>
                                            <div className="rounded-full w-14 h-14 items-center justify-center flex duration-1000">
                                                {menu.icon && (isActive ? menu.icon.active : menu.icon.passive)}
                                            </div>
                                            <span className='text-xl text-span'>{menu.title}</span>
                                        </Link>
                                    );
                                })}
                                <Post />
                                </div>
                            </div>

                        <div className="flex justify-center items-center h-1/2">
                            <SignOutButton />
                        </div>
                    </div>

                    {/* 4 sütunluk alan */}
                    <div className="col-span-4 flex justify-center items-center max-h-screen border-twitterBorder border-x">
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
