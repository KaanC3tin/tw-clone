
"use client"
import React, { useEffect, useState } from 'react';
import SignOutButton from '../../components/SignOutButton';
import { tmpdir } from 'os';
import TwitterIconLoading from '@/components/TwitterIconLoading';





const Home: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)



    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500)

        return () => clearTimeout(timer)
    }, [])



    return (

        <div className='text-white'>

            {loading ? (
                <div>
                    <TwitterIconLoading />
                </div>
            ) : (
                <>
                    Home
                    <SignOutButton />
                </>
            )}

        </div>
    )
}

export default Home