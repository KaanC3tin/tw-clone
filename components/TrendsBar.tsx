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