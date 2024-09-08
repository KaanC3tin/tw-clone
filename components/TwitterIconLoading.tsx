import React from 'react'
import {Icon} from "@iconify-icon/react"


const TwitterIconLoading = () => {
  return (
      <div className='flex items-center justify-center h-screen '>
          <Icon
              icon="prime:twitter"
              width={90}
              height={90}
              className='loading-icon'
          />
    </div>

  )
}

export default TwitterIconLoading