import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'

const Trend = ({ item }) => {
  return (
    <div>
      <Link href="/home"
        className='py-3   '>
        <div className='hover:bg-zinc-950'>
          <div className='mx-3 my-1 py-3'>
            <Popover >
              <div className='text-[#71767b] font-normal text-[13px] flex items-center justify-between  '>
                <div >{item.title}</div>
                <PopoverButton as='div' className='w-[34.75px] h-[34.75px] rounded-full flex justify-center items-center hover:bg-twitterDarkPastel duration-0'>
                  <svg fill='#71767b' width={18.75} height={18.75} viewBox="0 0 24 24" aria-hidden="true" className="hover:fill-[#1d9bf0]">
                    <g>
                      <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                    </g>
                  </svg>
                </PopoverButton>
              </div>
              <PopoverPanel>
                test
              </PopoverPanel>
            </Popover>
            <div className='flex text-white font-bold text-[15px]'>
              {item.trend.type === "tag" && "#"}{item.trend.value}
            </div>
            {item?.trend.score && (
              <div className='flex text-[#71767b] font-normal text-[13px]'>
                {item.trend.score}
              </div>
            )}

            {/* {item.trend} */}
          </div>
        </div>
      </Link >
    </div >
  )
}

export default Trend