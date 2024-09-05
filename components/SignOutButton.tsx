"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { getAuth, signOut } from 'firebase/auth';

const SignOutButton: React.FC = () => {
  const router = useRouter();
  const auth = getAuth()



  const handleSignOut = async () => {
    try {
      await signOut(auth);

      console.log("Çıkış yapıldı!")
      router.push("/")

    } catch (error) {
      console.log("Çıkış Yapılmadı!:", error)
    }
  }

  return (
    <div>
      <button onClick={handleSignOut} className='button w-full rounded-3xl border-3 border-twitterGray'>
        Çıkış Yap
      </button>
    </div>
  )
}

export default SignOutButton