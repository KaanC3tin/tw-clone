"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebaseConfig';
import Cookies from 'js-cookie';



const SignOutButton: React.FC = () => {
  const router = useRouter();


  const [signOutMessage, setSignOutMessage] = useState<string | null>(null);


  const handleSignOut = async () => {
    try {
      await signOut(auth);

      setSignOutMessage("Başarıyla çıkış yapıldı!")
      Cookies.remove("token")
      console.log("Çıkış yapıldı!")

      setTimeout(() => {
        router.push("/") // çıkıp yapılınca başlangıç dizinine yönlendiiriliyor.
      }, 1500)


    } catch (error) {
      setSignOutMessage("Çıkış yapılırken bir hata oluştu!")
      console.log("Çıkış Yapılmadı!:", error)
    }
  }

  return (
    <div className=''>
      <button onClick={handleSignOut}
        className='justify-start ml-4 text-sm font-semibold  pt-2 pb-2  text-white'>
        Çıkış Yap
      </button>
      {signOutMessage && (
        <div className='mx-4 font-semibold font-twitterChirp leading-none overflow-hidden'>
          {signOutMessage}
        </div>
      )}
    </div>
  )
}

export default SignOutButton