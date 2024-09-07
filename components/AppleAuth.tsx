import { getAuth, OAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'



const AppheAuth = () => {
    const handleSignIn = async () => {
        const provider = new OAuthProvider("apple.com")
        const auth = getAuth();
        // provider.setCustomParameters({
        //     // Localize the Apple authentication screen in French.
        //     locale: 'tr'
        // });

        try {
            const result = await signInWithPopup(auth, provider)

            console.log("Başarılı:!:", result)
        } catch (error) {
            console.log("Başarısız!:", error)
        }

    }

    return (
        <div className='mt-1 flex items-center justify-center '>
            <div className="apple-login-button duration-500 px-5 w-full rounded-3xl" onClick={handleSignIn}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="apple-icon" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
                </svg>
                <span>Apple ile giriş yap</span>
            </div>
        </div>

    )
}

export default AppheAuth