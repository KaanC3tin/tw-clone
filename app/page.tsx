//       <Head>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

// export default home

"use client";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import SigninModal from "@/components/SignUpModal";
import LoginModal from "@/components/LoginModal";
import CustomIcon from "@/components/CustomIcon";
import GoogleAuth from "@/components/GoogleAuth";
import Loading from "@/components/Loading";
import AppleAuth from '@/components/AppleAuth';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Loading ve modal state'leri
  const [loading, setLoading] = useState(true);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);
  const [backgroundClassModal, setBackgroundClassModal] = useState("bg-black");

  // Sayfa yüklendiğinde loading animasyonunu göstermek için useEffect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Giriş modalını gösterme ve kapatma fonksiyonları
  const handleShowSigninModal = () => {
    setLoading(true); // Loading başlasın
    setBackgroundClassModal("bg-twitterModal");

    setTimeout(() => {
      setLoading(false); // Loading dursun
      setIsSigninModalOpen(true); // Signin modal aç
    }, 1000); // 1 saniye bekle
  };

  const handleShowLoginModal = () => {
    setLoading(true); // Loading başlasın
    setBackgroundClassModal("bg-twitterModal");

    setTimeout(() => {
      setLoading(false); // Loading dursun
      setIsLoginModalOpen(true); // Login modal aç
    }, 1000); // 1 saniye bekle
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
    setIsSigninModalOpen(false);
    setBackgroundClassModal("bg-black");
  };

  return (
    <div className={`${inter.className} ${backgroundClassModal}`}>
      {/* <Head>
      //         <link rel="icon" href="/favicon.ico" />
      //       </Head> */}
      {/* Loading animasyonu */}
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-twitterModal z-50">
          <Loading />
        </div>
      )}

      {/* Modallar */}
      <SigninModal isOpen={isSigninModalOpen} onClose={handleCloseModal} />
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseModal} />

      {/* Sayfa İçeriği */}
      <div className="flex font-twitterChirpExtendedHeavy bg-black h-screen">
        <div className="w-1/2 grid place-items-center">
          <CustomIcon />
        </div>

        <div className="text-white w-1/5">
          <div className="text-7xl mt-32">Şu anda olup bitenler</div>
          <div className="text-3xl mt-11 font-bold">Hemen katıl.</div>
          <GoogleAuth />
          <AppleAuth />
          <div className="flex items-center justify-center mt-3 my-2.5 px-5">
            <div className="flex-grow border-t border-gray-400"></div>
            <span className="mx-2 text-white">veya</span>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <button
            onClick={handleShowSigninModal}
            className="bg-twitterBlue w-full h-12 text-center text-white items-center justify-center flex rounded-3xl pb-6 hover:bg-opacity-80 duration-500 ml-2"
          >
            <div className="my-auto mx-auto">Hesap Oluştur</div>
          </button>
          <div className="mt-8 mb-5 mx-4">Zaten Hesabın Var mı?</div>
          <button
            onClick={handleShowLoginModal}
            className="button-base bg-black w-full h-12 text-center border border-gray-400 text-twitterBlue items-center hover:opacity-100 justify-center flex rounded-3xl pb-6 duration-500 ml-2"
          >
            <div className="my-auto z-20">Giriş yap</div>
          </button>
        </div>
      </div>
    </div>
  );
}