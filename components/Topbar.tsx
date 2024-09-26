


import React, { useState } from 'react'

const Topbar = () => {
    const [blueBar, setBlueBar] = useState(true); // Başlangıçta "For you" aktif.

    return (
      <div className=''>
        <div className='font-twitterChirp bg-transparent backdrop-blur-md fixed top-0'>
            <div className='h-[53px] w-full  border-b border-r  border-twitterBorder flex justify-between overflow-hidden  '>
                <div
                    onClick={() => setBlueBar(true)}
                    className={` w-[291.91px] flex items-center justify-center cursor-pointer hover:bg-twitterIConHover   ${blueBar ? 'text-[#e7e9ea]   leading-5 text-[15px]' : 'font-twitterChirp font-medium leading-5 text-[#71767b]'}`}>
                    <span className='absolute text-[15px] font-normal w-[53.13px] leading-normal  '>
                        For you
                    </span>
                    {blueBar && (
                        <div className='relative w-[53.13px] h-[4px] bg-[#1d9bf0] mr-[15px] top-[25px] rounded-2xl'></div>
                    )}
                </div>

                <div
                    onClick={() => setBlueBar(false)}
                    className={` flex items-center justify-center cursor-pointer w-[307px] hover:bg-twitterIConHover ${!blueBar ? 'text-[#e7e9ea] font-bold  leading-5 text-[15px]' : 'font-twitterChirp font-medium leading-5 text-[#71767b]'}`}>
                    <span className='relative w-[69px] font-normal text-[15px] top-[] leading-normal '>
                        Following
                    </span>
                    {!blueBar && (
                        <div className='absolute w-[69px] h-[4px] bg-[#1d9bf0] top-[50px] mr-[18px] rounded-2xl'></div>
                    )}
                </div>
            </div>
        </div>
                    </div>
    )
}

export default Topbar;

