import React from 'react'

const SubscribeRightBar = () => {
    return (
        <div className='w-[350px] h-[160px] mt-[11px] border border-twitterBorder rounded-xl'>
            <div className='px-4 '>
                <span className=' font-extrabold text-[20px] text-white line-[24px] flex mt-[13px]'>
                    Subscribe to Premium
                </span>
                <p className='mt-[11px] font-normal text-[15px] '>
                    Subscribe to unlock new features and if eligible, receive a share of ads revenue.
                </p>
                <div className='-ml-4'>
                    <button className='w-[106px] h-[36px] m-[12px] bg-[#1d9bf0] text-white font-bold text-[15px] rounded-full '>
                        Subsribe
                    </button>
                </div>
            </div>

        </div>
    )
}

export default SubscribeRightBar