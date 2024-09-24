import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'

interface TrendItem {
  title: string;
  trend: {
    type: string;
    value: string;
    score?: number | string;
  }
}
interface TrendProps {
  item: TrendItem;
}


const Trend: React.FC<TrendProps> = ({ item }) => {
  return (
    <div>
      <Link href="/home"
        className='py-3   '>
        <div className='hover:bg-zinc-950'>
          <div className='mx-4 my-1 py-2'>
            <Popover className="relative">
              <div className='text-[#71767b] font-normal text-[13px] flex items-center justify-between '>
                <div >{item.title}</div>
                <PopoverButton as='div' className='w-[34.75px] h-[34.75px] rounded-full flex justify-center items-center hover:bg-twitterDarkPastel duration-0'>
                  <svg fill='#71767b' width={18.75} height={18.75} viewBox="0 0 24 24" aria-hidden="true" className="hover:fill-[#1d9bf0]">
                    <g>
                      <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                    </g>
                  </svg>
                </PopoverButton>
              </div>
              <PopoverPanel className="absolute shadow-box w-[294.98px] h-[88px] rounded-xl text-[15px]  font-bold right-0 top-0 z-30 bg-black px-3 py-3 ">
                <div className='w-[30.75]  flex'>
                  <div className='mr-2.5   '>
                    <svg fill='#ffff' width={18.75} height={18.75} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></g></svg>
                  </div>
                  <span className=''>Not interested in this </span>
                </div>
                <div className='w-[30.75]  flex  mt-4'>
                  <div className='mr-2.5'>
                    <svg fill='#ffff' width={18.75} height={18.75} viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-1q142lx"><g><path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"></path></g></svg>
                  </div>
                  <span>This trend in harmful or spammy</span>
                </div>
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

          </div>
        </div>
      </Link >
    </div >
  )
}

export default Trend


