import React from 'react'
import Search from './Search'
import SubscribeRightBar from './SubscribeRightBar'
import Trends from './TrendsBar'

const RightBar = () => {
    return (
        <div className=' mt-[5px] font-twitterChirp'>
            <div className='ml-[32px]'>
                <Search />
                <SubscribeRightBar />
                <Trends />
            </div>
        </div>
    )
}

export default RightBar