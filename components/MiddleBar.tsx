import React from 'react'
import StyleTopBar from './StyleTopBar'
import Tab from "@/components/Tab"

const MiddleBar = () => {
  return (
    <>
      <Tab activeTab="for-you">
        <StyleTopBar>
          <Tab.Items>
            <Tab.Item id="for-you">
              For you
            </Tab.Item>
            <Tab.Item id="following">
              Following
            </Tab.Item>
          </Tab.Items>
        </StyleTopBar>


        <Tab.Content id="for-you">
          1.content
        </Tab.Content>
        <Tab.Content id="following">
          2.content
        </Tab.Content>
      </Tab>
      
      <div className='mt-[53px]'></div>
    </>
  )
}

export default MiddleBar