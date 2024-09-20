"use client"
import { useParams } from 'next/navigation'
import Page from "@/app/profile/page"
import React from 'react'

const Profile = () => {

    const { username } = useParams();

    if (!username) {
        return <div>Loading</div>
    }
    return (

        <div className='text-white'>
            {/* {username} */}
            <Page />
        </div>
    )
}

export default Profile