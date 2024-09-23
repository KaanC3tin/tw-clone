// import { trends } from '@/utilts/page'
// import React from 'react'
// import Trend from './Trend'
// import Link from 'next/link'

// const Trends = () => {
//     return (
//         <div className='border border-twitterBorder  rounded-xl mt-[17px] '>

//             <div className=''>
//                 <div className='my-[12px] font-extrabold text-[20px] text-white mx-4'>
//                     Trend for you
//                 </div>
//                 {/* <div className=' space-y-[12px] '> */}
//                 <div>
//                     {trends.map((trend, index) =>
//                         <Trend item={trend} key={index} />
//                     )}
//                     <Link
//                         href="/trend"
//                         className='h-[52px] flex items-center  text-twitterBlue hover:bg-zinc-950 text-[15px] mx-3'
//                     >
//                         Show more
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Trends



import { trends } from '@/utilts/page'
import React from 'react'
import Trend from './Trend'
import RightbarLayout from './RightbarLayout'

const Trends = () => {
    return (

        <RightbarLayout
            title={"Trend for you"}
            more="/trends">
            {...trends.map((trend, index) =>
                <Trend item={trend} key={index} />
            )}
        </RightbarLayout >

    )
}

export default Trends