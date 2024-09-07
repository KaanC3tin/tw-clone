import React from 'react'
import SignOutButton from '../../components/SignOutButton';
import Cookies from 'js-cookie';

const page = () => {
    // çerezden tokenı al
    const token = Cookies.get("token");
    return (
        <div className='text-white'>
            Home
            <SignOutButton />
        </div>
    )
}

export default page