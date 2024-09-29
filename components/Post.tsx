import React from 'react'
import { posts } from '../utilts/page';
import Image from 'next/image';
import Link from 'next/link';




interface PostType<T> {
    post: {
        account: {
            userName: string;
            fullName: string;
            avatar: string;
            verified: boolean
            bigger: boolean;
            elonMusk: boolean;
        }
        photo?: string;
    }

}

const Post: React.FC<PostType> = ({ post }) => {
    return (
        <div className='px-4 py-[14px] gap-3 border-b border-twitterBorder flex flex-row'>
            <Image src={post.account.avatar} alt='avatar' width={40} height={40} className='h-10 w-10 rounded-full object-cover' />
            <div className='flex-1 text-[#e7e9ea] '>
                <div className='flex'>
                    <Link href="#"
                        className=' text-[15px] font-bold  hover:underline  flex items-center '
                    >
                        {post.account.fullName}
                        {post.account?.verified && (
                            <svg fill='#1d9bf0'
                                viewBox="0 0 22 22" aria-label="Verified account" role="img"
                                className="h-[1.172rem] ml-[7px] r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1" data-testid="icon-verified"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>
                        )}
                        {post.account?.bigger && (
                            <img src='https://pbs.twimg.com/profile_images/1820771010360016896/JScWcZDn_bigger.jpg' alt='bigger' className='ml-0.5 w-[0.8825rem] h-[0.8825rem]' />
                        )}
                        {post.account?.elonMusk && (
                            <img src='https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_bigger.jpg' className='h-[0.946875rem] w-[0.946875rem] ml-0.5' alt='twitterICon' />

                        )}
                    </Link>
                    <div className='text-[15px] font-normal leading-5 ml-[7px] text-[#71767b] flex '>
                        @{post.account.userName}
                        <span className='mx-1'>
                        ·
                        </span>
                        {post.date}
                    </div>

                </div>
                <div className='mb-[14px]'>
                    {post.content && post.content.map((line, index) => (
                        <div key={index}>{line}</div>

                    ))}
                </div>
                <div>
                    {post.photo && (
                        <img
                            src={post.photo}
                            width={518} height={386}
                            alt='photo' className=' object-cover rounded-2xl '
                        />
                    )}
                </div>



                {/* <div className='flex items-center'>
                </div> */}
            </div>
            <div>
            </div>
            {/* <span className='mt-[4px] mb-[14px] g'>Hop in, we`re going to Mars!</span> */}
        </div>
    )
}

export default Post