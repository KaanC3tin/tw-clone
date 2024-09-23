import React from 'react'
import Trends from './TrendsBar'
import { title } from 'process';
import RightbarLayout from './RightbarLayout';
import { useAccount } from '@/lib/hook';

const WhoFollowMe = ( title, more) => {


    const account=useAccount()
    return (
        <div>
            <RightbarLayout
                title={"Who to follow"}
                more={`/i/connect_people?user_id=${account.id}`}

            >


            </RightbarLayout>
        </div>
    )
}

export default WhoFollowMe