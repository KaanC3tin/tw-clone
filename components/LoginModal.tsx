import React from 'react';
import { useEffect, useState } from 'react';
import { Icon } from "@iconify-icon/react";
// import GoogleAuth from './GoogleAuth';
// import AppleAuth from '@/components/AppleAuth';
import LoginForm from './LoginForm';
import Loading from './Loading';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}


const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState<boolean>(true)





    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);

        return () => clearTimeout(timer);
    }, [])


    if (!isOpen) return null;

    return (
        <>
            <div className='w-full h-full absolute top-0 bg-twitterModal z-50' onClick={onClose}>
                <div className="text-white flex items-center justify-center min-h-screen rounded-3xl font-twitterChirpExtendedHeavy text-sm" onClick={(e) => e.stopPropagation()}>
                    <div className="bg-black  w-full max-w-md p-24 rounded-2xl shadow-lg">
                        <div className="relative container">
                            <div className="icon-top">
                                <Icon icon="prime:twitter" width={30} height={30} />
                                <button
                                    onClick={onClose}
                                    className="absolute right-52 bottom-5  w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-twitterDarkPastel transition-all duration-500 p-1"
                                >

                                    <Icon icon="mdi:close" width={16} height={16} style={{ color: "white" }} />
                                </button>
                            </div>
                            {loading ? (
                                <Loading />
                            ) : (
                                <>
                                    <div>
                                        <span className='text-2xl flex items-center justify-center'>X`e Giriş yap</span>
                                    </div>
                                    <LoginForm onClose={onClose} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginModal;
