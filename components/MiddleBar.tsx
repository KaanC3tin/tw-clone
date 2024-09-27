import React from 'react'
import Topbar from './Tab'
import ForYou from './ForYou'
import Following from './Following'
import FixedTopBar from './FixedTopBar'
import Tab from "@/components/Tab"

const MiddleBar = () => {
  return (
    <div className='text-white '>
      <FixedTopBar/>
      <Tab activeTab="for you">
          <Tab.Items>
          <Tab.Item id="for you">
            For you
            </Tab.Item>
          <Tab.Item id="followings">
            Following
            </Tab.Item>
          </Tab.Items>
          <Tab.Content id="for you">
            1.content
          </Tab.Content>
          <Tab.Content id="followings">
            2.content
          </Tab.Content>
      </Tab>
      home component!
     
  
      <div className='mt-[53px]'>
       
      </div>
    </div>
  )
}

export default MiddleBar