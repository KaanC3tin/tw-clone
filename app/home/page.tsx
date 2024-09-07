import React from 'react'
import SignOutButton from '../../components/SignOutButton';
const page = () => {
    // çerezden tokenı al
    return (
        <div className='text-white'>
            Home
            <SignOutButton />
        </div>
    )
}

export default page