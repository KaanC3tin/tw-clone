import { trends } from '@/utilts/page'
import React from 'react'
import Trend from './Trend'

const Trends = () => {
    return (
        <div className='border border-twitterBorder  rounded-xl mt-[17px] '>
            <div className=''>
                <div className='my-[12px] font-extrabold text-[20px] text-white mx-4'>
                    Trend for you
                </div>
                {/* <div className=' space-y-[12px] '> */}
                <div>
                    {trends.map((trend, index) =>
                        <Trend item={trend} key={index} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Trends