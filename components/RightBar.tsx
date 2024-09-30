import React from 'react'
import Search from './Search'
import SubscribeRightBar from './SubscribeRightBar'
import Trends from './TrendsBar'
import WhoFollowMe from './WhoFollowMe'
import Footer from './Footer'

const RightBar = () => {
    return (
        <div className='flex mt-[5px] font-twitterChirp h-full'>
            <div className='flex flex-col ml-[32px] absolute top-0'>

                <Search focus={focus}/>
                <div className='flex flex-col sticky bottom-0'>
                    <SubscribeRightBar />
                    <Trends />
                    <WhoFollowMe />
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default RightBar