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
    <div>
      <button onClick={handleSignOut} className='button w-full rounded-3xl border-3 border-twitterGray'>
        Çıkış Yap
      </button>
      {signOutMessage && (
        <div className='  justify-center items-center text-center text-white border-2 border-twitterGray rounded-3xl'>
          {signOutMessage}
        </div>
      )}
    </div>
  )
}

export default SignOutButton