import React from 'react'
import StyleTopBar from './StyleTopBar'
import Tab from "@/components/Tab"
import ForYou from './ForYou'
import Following from './Following'

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
          <ForYou />
        </Tab.Content>
        <Tab.Content id="following">
          <Following />
        </Tab.Content>
      </Tab>

      <div className='mt-[53px]'></div>
    </>
  )
}

export default MiddleBar