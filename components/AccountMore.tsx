



import React from 'react'
import SignOutButton from './SignOutButton'

const AccountMore = () => {
  return (
    <div className='pt-3 pb-3 '>
      <div className=' hover:rounded-none   hover:bg-twitterIConHover overflow-hidden w-full outline-none duration-700 transition-colors '>
        <SignOutButton />
      </div>
    </div>
  )
}

export default AccountMore