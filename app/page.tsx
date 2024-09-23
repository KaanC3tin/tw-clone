
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
import classNames from 'classnames';

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
          <div className="text-[64px] xl:text-6xl lg:text-5xl md:text-4xl  sm:text-3xl xs:text-xl md:mt-40  mt-32 w-[450px]">Şu anda olup bitenler</div>
          <div className="text-[31px] mt-11 lg:text-2xl font-bold">Hemen katıl.</div>
          <div>
            <GoogleAuth />
            <AppleAuth />
            <div className="flex items-center  justify-between mt-3 my-2.5  px-10">
              <div className="flex-grow h-px bg-twitterBorder"></div>
              <span className=" paddingL text-white  whitespace-nowrap">veya</span>
              <div className="flex-grow h-px bg-twitterBorder"></div>
            </div>

            <button
              onClick={handleShowSigninModal}
              className=" w-ful  text-center  flex items-center justify-center rounded-3xl hover:bg-[#1a8cd8] hover:opacity-90  duration-1000 transition-colors ease-in-out button w-[300px] h-[40px] !bg-[#1d9bf0] !text-white text-[15px] font-normal"
            >
              <div className="text-[15px] md:text-base ">Hesap Oluştur</div>

            </button>
            <div className="mt-[50px] text-white text-[17px] ">
              Zaten bir hesabın var mı?
            </div>

            <button
              onClick={handleShowLoginModal}
              className="button bg-black w-full  text-center border !border-gray-400 !text-twitterBlue flex items-center justify-center rounded-3xl  duration-1000 mt-4 button-base ease-in-out transition-colors text-[15px] font-normal"
            >
              <div className="text-xs md:text-base">Giriş yap</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
