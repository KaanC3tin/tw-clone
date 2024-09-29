"use client";
import React, { useEffect, useState } from 'react';
import GoogleAuth from './GoogleAuth';
// import AppleAuth from '@/components/AppleAuth';
import Loading from './Loading';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const waitUser = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

interface LoginFormProps {
    onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [transitioning, setTransitioning] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();


    const handleEmailSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (email && isEmailValid) {
            setShowPassword(false);
            setTransitioning(true);
        }
    };

    const handleLogin = async () => {
        const auth = getAuth();

        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            const user = result.user;
            const token = await user.getIdToken()


            Cookies.set("token", token, { expires: 4 })
            console.log("Giriş Yapıldı");
            router.push("/home")


        } catch (error) {
            console.log("Giriş Yapılmadı", error);
        }
    };

    const handlePasswordSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        setLoading(true);
        await waitUser(1000);
        setLoading(false);
        if (onClose) {
            onClose();
        }
        handleLogin();
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const thereIsPassword = e.target.value;
        setPassword(thereIsPassword);
        setIsPasswordValid(thereIsPassword.length >= 8);
    };

    useEffect(() => {
        if (showPassword) {
            setIsPasswordValid(password.length >= 8);
        } else {
            setIsEmailValid(email.includes('@'));
        }
    }, [email, password, showPassword]);

    useEffect(() => {
        const applyTransition = async () => {
            if (transitioning) {
                setLoading(true);
                await waitUser(1000);
                setShowPassword(true);
                setTransitioning(false);
                setLoading(false);
            }
        };
        applyTransition();
    }, [transitioning]);

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-xs">
                <div className="space-y-3">
                    <GoogleAuth />
                    {/* <AppleAuth /> */}
                </div>
                <div className="flex items-center justify-center mt-2">
                    {loading ? (
                        <div className="flex justify-center items-center ">
                            <Loading />
                        </div>
                    ) : !showPassword ? (
                        <form
                            onSubmit={handleEmailSubmit}
                            className={`transition-opacity duration-750 ease-in-out ${transitioning ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <div className="flex justify-center items-center my-1">
                                <div className="flex-grow border-t border-twitterGray"></div>
                                <span className="mx-1 text-white">veya</span>
                                <div className="flex-grow border-t border-twitterGray"></div>
                            </div>
                            <input
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                required
                                value={email}
                                type="email"
                                id="email"
                                placeholder="E-posta"
                                name="email"
                                className="w-64 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:border-blue-500 transition ease-in-out duration-150"
                            />
                            <button
                                type="submit"
                                disabled={!isEmailValid}
                                className={`w-full bg-white text-black py-2 rounded-3xl flex justify-center items-center text-center transition duration-1000 mt-5 ${!isEmailValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                İleri
                            </button>
                        </form>
                    ) : (
                        <form onSubmit={handlePasswordSubmit}>
                            <div className="flex justify-center items-center my-1">
                                <div className="flex-grow border-t border-twitterGray"></div>
                                <span className="mx-1 text-white">veya</span>
                                <div className="flex-grow border-t border-twitterGray"></div>
                            </div>
                            <input
                                onChange={handlePasswordChange}
                                required
                                value={password}
                                type="password"
                                id="password"
                                placeholder="Parola"
                                name="password"
                                className="w-64 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:border-blue-500 transition ease-in-out duration-150"
                            />
                            <button
                                type="submit"
                                disabled={!isPasswordValid}
                                className={`w-full bg-white text-black py-2 rounded-3xl flex justify-center items-center text-center transition duration-1000 mt-5 ${!isPasswordValid ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                İleri
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
