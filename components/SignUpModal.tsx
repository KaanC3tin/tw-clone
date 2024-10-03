import React, { useEffect, useState } from 'react';
import { Icon } from "@iconify-icon/react";
import { auth } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Loading from './Loading';
import { useRouter } from 'next/navigation';

interface SigninModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SigninModal: React.FC<SigninModalProps> = ({ isOpen, onClose }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [isim, setIsim] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showIsim, setShowIsim] = useState<boolean>(true);
    const [showEmail, setShowEmail] = useState<boolean>(true);
    const [showHistory, setShowHistory] = useState<boolean>(true);
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

    const router = useRouter();

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 120 }, (_, i) => currentYear - i);
    const months = [
        "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
        "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
    ];
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    useEffect(() => {
        if (isOpen) {
            setPassword('');
            setEmail('');
            setIsim('');
            setShowPassword(false);
            setShowIsim(true);
            setShowEmail(true);
            setShowHistory(true);
            setShowSuccessMessage(false);
        }
    }, [isOpen]);

    useEffect(() => {
        setIsFormValid(!!(isim && email && day && month && year && (!showPassword || isPasswordValid)));
    }, [isim, email, password, day, month, year, showPassword, isPasswordValid]);


    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Kayıt Başarılı!");
            setLoading(false);
            setShowSuccessMessage(true);
            setTimeout(() => {
                onClose();
            }, 1500);
        } catch (error) {
            console.error("Kaydı tamamlamak için bir hata oluştu!", error);
            setLoading(false);
            setShowIsim(false);
            setShowEmail(false);
            setShowHistory(false);
            setShowPassword(true);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsPasswordValid(newPassword.length >= 8);
    };

    if (!isOpen) return null;

    return (
        <div className='w-full h-full absolute top-0 bg-twitterModal z-50' onClick={onClose}>
            <div className="text-white flex items-center justify-center min-h-screen rounded-3xl font-twitterChirpExtendedHeavy text-sm" onClick={(e) => e.stopPropagation()}>
                <div className="bg-black w-full max-w-md p-24 rounded-xl shadow-lg">
                    <div className="relative container">
                        <div className="icon-top">
                            <Icon icon="prime:twitter" width={30} height={30} />
                            <button
                                onClick={onClose}
                                className="absolute right-52 bottom-5 w-10 h-10 bg-black rounded-full flex items-center justify-center transition-all duration-500 p-1 hover:bg-twitterDarkPastel"
                            >
                                <Icon icon="mdi:close" width={16} height={16} style={{ color: 'white' }} />
                            </button>
                        </div>
                        <div className="text-center text-lg font-semibold mb-7">
                            Hesabını Oluştur
                        </div>
                        {loading ? (
                            <Loading />
                        ) : showSuccessMessage ? (
                            <div className="text-center text-lg font-semibold mb-7">
                                Kayıt Başarılı! Yönlendiriliyorsunuz...
                            </div>
                        ) : (
                            <form className="flex flex-col items-center" onSubmit={handleSignUp}>
                                {showIsim && (
                                    <div className="mb-4 w-full">
                                        <input
                                            required
                                            type="text"
                                            placeholder="İsim"
                                            name="isim"
                                            className="w-64 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:border-blue-500 transition ease-in-out duration-150"
                                            onChange={(e) => setIsim(e.target.value)}
                                            value={isim}
                                        />
                                    </div>
                                )}
                                {showEmail && (
                                    <div className="mb-4 w-full">
                                        <input
                                            required
                                            type="email"
                                            placeholder="E-posta"
                                            name="email"
                                            className="w-64 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:border-blue-500 transition ease-in-out duration-150"
                                            onChange={handleEmailChange}
                                            value={email}
                                        />
                                    </div>
                                )}
                                {showHistory && (
                                    <div className="mb-9 w-full">
                                        <div className="flex bg-black w-64">
                                            <select
                                                required
                                                name="month"
                                                className="bg-black text-white border border-twitterGray focus:border-blue-500 rounded-md p-2"
                                                onChange={(e) => setMonth(e.target.value)}
                                            >
                                                <option value="">Ay</option>
                                                {months.map((month) => (
                                                    <option key={month} value={month}>{month}</option>
                                                ))}
                                            </select>
                                            <select
                                                required
                                                name="day"
                                                className="bg-black text-white border border-twitterGray focus:border-blue-500 rounded-md p-2"
                                                onChange={(e) => setDay(e.target.value)}
                                            >
                                                <option value="">Gün</option>
                                                {days.map((day) => (
                                                    <option key={day} value={day}>{day}</option>
                                                ))}
                                            </select>
                                            <select
                                                required
                                                name="year"
                                                className="bg-black text-white border border-twitterGray focus:border-blue-500 rounded-md p-2"
                                                onChange={(e) => setYear(e.target.value)}
                                            >
                                                <option value="">Yıl</option>
                                                {years.map((year) => (
                                                    <option key={year} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                )}
                                {showPassword && (
                                    <div className="mb-4 w-full">
                                        <input
                                            required
                                            type="password"
                                            placeholder="Şifre"
                                            name="password"
                                            className="w-64 bg-black text-white rounded-md p-2 focus:outline-none focus:ring-1 focus:border-blue-500 transition ease-in-out duration-150"
                                            onChange={handlePasswordChange}
                                        />
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    disabled={!isFormValid}
                                    className={`w-full py-2 rounded-3xl flex justify-center items-center text-center transition duration-1000 ${isFormValid ? 'bg-white text-black' : 'bg-gray-400 text-gray-600 opacity-50 cursor-not-allowed'}`}
                                >
                                    Kayıt ol
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninModal;
