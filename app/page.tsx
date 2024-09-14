
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
        <div className=" w-1/2 grid place-items-center ">
          <CustomIcon />
        </div>

        <div className="text-white w-1/5  md:1/4 ">
          <div className="text-7xl xl:text-6xl lg:text-5xl md:text-4xl  sm:text-3xl xs:text-xl md:mt-40  mt-32">Şu anda olup bitenler</div>
          <div className="text-3xl mt-11 lg:text-2xl font-bold">Hemen katıl.</div>
          <div>
            <GoogleAuth />
            <AppleAuth />
            <div className="flex items-center  justify-between mt-3 my-2.5 ">
              <div className="flex-grow h-px bg-twitterBorder"></div>
              <span className=" paddingL text-white  whitespace-nowrap">veya</span>
              <div className="flex-grow h-px bg-twitterBorder"></div>
            </div>

            <button
              onClick={handleShowSigninModal}
              className=" bg-twitterBlue w-full  text-center text-white flex items-center justify-center rounded-3xl hover:bg-opacity-80 duration-1000"
            >
              <div className="text-base md:text-base">Hesap Oluştur</div>
            </button>

            <button
              onClick={handleShowLoginModal}
              className="button bg-black w-full  text-center border border-gray-400 text-twitterBlue flex items-center justify-center rounded-3xl hover:opacity-100 duration-1000 mt-4"
            >
              <div className="text-xs md:text-base">Giriş yap</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
