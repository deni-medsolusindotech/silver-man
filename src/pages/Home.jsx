import React, { useEffect, useRef, useState } from 'react';
import { Send, Twitter, TrendingUp, BarChart3 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ReactTyped } from 'react-typed';
const Home = () => {
    const videoRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const media = [
        { type: 'image', src: '/image/logo.jpeg' },
        { type: 'video', src: '/video/tiny.mp4' },
        { type: 'video', src: '/video/grafik2.mp4' }, // media ke-3
    ];
    useEffect(() => {
        AOS.init({
            duration: 1100, // durasi animasi (ms)
            once: false, // animasi jalan sekali aja
            mirror: true,
            easing: 'ease-out-cubic',
        });
    }, []);
    useEffect(() => {
        const elements = document.querySelectorAll('.scroll-animate');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeInUp');
                    }
                });
            },
            { threshold: 0.1 },
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % media.length);
        }, 4000); // ganti ke 20000 untuk 20 detik
        return () => clearInterval(interval);
    }, [media.length]);

    useEffect(() => {
        // Add more dynamic particles on mousemove
        const handleMouseMove = (e) => {
            if (Math.random() > 0.97) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                particle.style.left = e.pageX + 'px';
                particle.style.top = e.pageY + 'px';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDuration = Math.random() * 3 + 2 + 's';
                particle.style.animationDelay = Math.random() * 2 + 's';

                const background = document.querySelector('.fixed.inset-0');
                if (background) {
                    background.appendChild(particle);
                }

                // Remove particle after animation completes
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 5000);
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen overflow-hidden">
            {/* Animated Background Elements - Hide some on mobile for performance */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {/* Silver Man Figures - Hide on mobile */}
                <div
                    className="hidden md:block silver-man top-1/4 left-1/4 w-16 h-16"
                    data-aos="fade-up"
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="40" r="25" fill="silver" opacity="0.8" />
                        <rect x="35" y="65" width="30" height="40" fill="silver" opacity="0.8" />
                        <circle cx="40" cy="30" r="5" fill="white" />
                        <circle cx="60" cy="30" r="5" fill="white" />
                    </svg>
                </div>

                <div
                    className="hidden md:block silver-man top-1/3 right-1/4 w-12 h-12"
                    style={{ animationDelay: '2s' }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="40" r="20" fill="silver" opacity="0.7" />
                        <rect x="40" y="60" width="20" height="35" fill="silver" opacity="0.7" />
                    </svg>
                </div>

                <div
                    className="hidden md:block silver-man bottom-1/4 left-1/3 w-10 h-10"
                    style={{ animationDelay: '4s' }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="40" r="18" fill="silver" opacity="0.6" />
                        <rect x="42" y="58" width="16" height="30" fill="silver" opacity="0.6" />
                    </svg>
                </div>

                {/* Orbiting Elements - Hide on mobile */}
                <div className="hidden md:block orbit top-1/2 left-1/2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-silver pulse"></div>
                </div>

                <div
                    className="hidden md:block orbit top-1/2 left-1/2"
                    style={{ animationDuration: '20s', animationDelay: '1s' }}
                >
                    <div
                        className="w-4 h-4 rounded-full bg-gradient-to-r from-silver to-cyan-500 pulse"
                        style={{ animationDelay: '1s' }}
                    ></div>
                </div>

                <div
                    className="hidden md:block orbit top-1/2 left-1/2"
                    style={{ animationDuration: '25s', animationDelay: '2s' }}
                >
                    <div
                        className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-300 to-silver pulse"
                        style={{ animationDelay: '2s' }}
                    ></div>
                </div>

                {/* Floating Particles - Reduce number on mobile */}
                <div
                    className="particle top-1/4 right-1/3 w-2 h-2"
                    style={{ animationDelay: '0.5s' }}
                ></div>
                <div
                    className="particle top-1/2 left-1/4 w-3 h-3"
                    style={{ animationDelay: '1.2s' }}
                ></div>
                <div
                    className="hidden md:block particle bottom-1/3 right-1/4 w-2 h-2"
                    style={{ animationDelay: '2.8s' }}
                ></div>
                <div
                    className="hidden sm:block particle top-1/3 left-1/2 w-3 h-3"
                    style={{ animationDelay: '3.5s' }}
                ></div>
                <div
                    className="hidden md:block particle bottom-1/4 right-1/2 w-2 h-2"
                    style={{ animationDelay: '4.7s' }}
                ></div>

                {/* Glowing Circles - Reduce opacity and size on mobile */}
                <div className="absolute top-1/4 right-1/4 w-16 h-16 md:w-32 md:h-32 rounded-full bg-cyan-400 opacity-5 md:opacity-10 blur-xl pulse"></div>
                <div
                    className="absolute bottom-1/4 left-1/4 w-20 h-20 md:w-40 md:h-40 rounded-full bg-silver opacity-3 md:opacity-5 blur-xl pulse"
                    style={{ animationDelay: '2s' }}
                ></div>
            </div>
            {/* Header */}
            <header className="relative z-10 flex items-center justify-between px-4 md:px-8 py-2 bg-gray-900/70 backdrop-blur-md">
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-15 md:h-15 rounded-full bg-gradient-to-br from-silver to-cyan-400 flex items-center justify-center shadow-2xl shadow-cyan-400/30 animate-pulse overflow-hidden border-2 border-cyan-400/30">
                        <img
                            src="/image/logo.jpeg"
                            className="w-full h-full object-cover"
                            alt="Silver Man Logo"
                        />
                    </div>

                    <span className="text-xl md:text-3xl font-bold text-cyan-400">Silver-Man</span>
                </div>

                <button className="bg-cyan-500 hover:bg-cyan-600 px-3 py-1 md:px-4 md:py-2 rounded-lg text-white text-sm md:text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                    Get Started
                </button>
            </header>
            {/* Hero Section */}
            <section className="relative z-10 py-10 md:py-20 px-4 md:px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                            data-aos="fade-left"
                        >
                            Welcome to{' '}
                            <span className="text-cyan-400" data-aos="fade-right">
                                SilverMan
                            </span>
                        </h1>
                        <p
                            data-aos="fade-down"
                            className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0"
                        >
                            <ReactTyped
                                strings={[
                                    'The future of decentralized finance is here, empowering individuals with freedom, transparency, and limitless opportunities.',
                                    'Buy, trade, and hold your favorite cryptocurrencies securely with confidence and ease, anytime and anywhere.',
                                    'Join the revolution of Web3 and DeFi today, where innovation meets financial independence for everyone.',
                                    'Discover a new era of digital assets and decentralized ecosystems built for the community, by the community.',
                                    'Shape the future of finance — decentralized, transparent, and unstoppable.',
                                ]}
                                typeSpeed={50} // kecepatan mengetik
                                backSpeed={30} // kecepatan menghapus
                                backDelay={2000} // jeda sebelum teks dihapus
                                loop // biar berulang terus
                                smartBackspace // hapus hanya perbedaan kata
                            />
                        </p>
                        <div
                            data-aos="fade-up"
                            className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#"
                                className="px-4 py-2 md:px-6 md:py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 text-center text-sm md:text-base"
                            >
                                Start Trading
                            </a>
                            <a
                                href="#"
                                className="px-4 py-2 md:px-6 md:py-3 border border-cyan-500 rounded-lg hover:bg-cyan-500/20 font-semibold transition-all duration-300 transform hover:scale-105 text-center text-sm md:text-base"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    {/* Video Container */}
                    <div
                        data-aos="zoom-in"
                        className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-cyan-400/20 border border-cyan-400/30 mt-6 md:mt-0"
                    >
                        {media.map((item, i) =>
                            item.type === 'image' ? (
                                <img
                                    key={i}
                                    src={item.src}
                                    alt={`media-${i}`}
                                    className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-1000 ease-in-out
              ${activeIndex === i ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-95 z-10'}`}
                                />
                            ) : (
                                <video
                                    key={i}
                                    src={item.src}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-1000 ease-in-out
              ${activeIndex === i ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 z-10'}`}
                                ></video>
                            ),
                        )}
                    </div>
                </div>
            </section>
            {/* Features */}
            <section className="relative z-10 py-12 md:py-20 px-4 md:px-8 bg-gray-800/60 backdrop-blur-md">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
                        Why Choose SilverMan?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                        <div
                            data-aos="fade-right"
                            className="p-4 md:p-6 bg-gray-900/80 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md border border-gray-700"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-silver to-cyan-400 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 md:h-8 md:w-8 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2 md:mb-4">
                                Secure Wallet
                            </h3>
                            <p className="text-sm md:text-base text-gray-300">
                                Keep your assets safe with top-notch encryption and decentralized
                                storage.
                            </p>
                        </div>
                        <div
                            data-aos="zoom-in"
                            className="p-4 md:p-6 bg-gray-900/80 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md border border-gray-700"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-silver to-cyan-400 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 md:h-8 md:w-8 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2 md:mb-4">
                                Fast Transactions
                            </h3>
                            <p className="text-sm md:text-base text-gray-300">
                                Experience lightning-fast crypto transfers with minimal fees.
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            className="p-4 md:p-6 bg-gray-900/80 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md border border-gray-700"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br from-silver to-cyan-400 flex items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 md:h-8 md:w-8 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-cyan-400 mb-2 md:mb-4">
                                24/7 Support
                            </h3>
                            <p className="text-sm md:text-base text-gray-300">
                                Get help anytime from our global support team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative z-10 py-12 md:py-20 px-4 md:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto text-center scroll-animate">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">
                        Live Charts
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Monitor Pumpfun & Dexscreener charts directly from this website
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pumpfun Frame */}
                        <div
                            data-aos="zoom-in-up"
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                        >
                            <div className="bg-cyan-500/20 text-cyan-400 font-semibold py-2">
                                Pumpfun
                            </div>
                            <iframe
                                src="https://pumpfun.fun"
                                className="w-full h-[500px] border-0"
                                loading="lazy"
                            ></iframe>
                        </div>

                        {/* Dexscreener Frame */}
                        <div
                            data-aos="zoom-in-down"
                            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                        >
                            <div className="bg-purple-500/20 text-purple-400 font-semibold py-2">
                                Dexscreener
                            </div>
                            <iframe
                                src="https://dexscreener.com"
                                className="w-full h-[500px] border-0"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tokenomics Section */}
            <section className="relative z-10 py-12 md:py-20 px-4 md:px-8 bg-gray-900/70 backdrop-blur-md">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-cyan-400">
                        Tokenomics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                        <div
                            data-aos="zoom-out-left"
                            className="p-4 md:p-6 bg-gray-800/80 rounded-xl shadow-lg border border-gray-700"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                                Liquidity
                            </h3>
                            <p className="text-cyan-400 text-2xl font-bold">40%</p>
                        </div>
                        <div
                            data-aos="zoom-out-down"
                            className="p-4 md:p-6 bg-gray-800/80 rounded-xl shadow-lg border border-gray-700"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                                Community
                            </h3>
                            <p className="text-cyan-400 text-2xl font-bold">30%</p>
                        </div>
                        <div
                            data-aos="zoom-out-up"
                            className="p-4 md:p-6 bg-gray-800/80 rounded-xl shadow-lg border border-gray-700"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                                Marketing
                            </h3>
                            <p className="text-cyan-400 text-2xl font-bold">20%</p>
                        </div>
                        <div
                            data-aos="zoom-out-right"
                            className="p-4 md:p-6 bg-gray-800/80 rounded-xl shadow-lg border border-gray-700"
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                                Development
                            </h3>
                            <p className="text-cyan-400 text-2xl font-bold">10%</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Community Section */}
            <section className="relative z-10 py-12 md:py-20 px-4 md:px-8 bg-gray-800/60 backdrop-blur-md">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400 animate-pulse">
                        Join Our Community
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Stay connected with the SilverMan community. Follow us for the latest
                        updates, charts, and announcements.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {/* Telegram */}
                        <a
                            data-aos="zoom-in-left"
                            href="https://t.me/silvermanishere"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-500 to-silver rounded-lg shadow-lg hover:scale-110 hover:shadow-cyan-400/40 transition-all duration-300 text-white font-semibold"
                        >
                            <Send className="w-5 h-5 animate-bounce" />
                            Telegram
                        </a>

                        {/* Twitter */}
                        <a
                            data-aos="zoom-out-up"
                            href="https://x.com/Slver_man?t=LmWBQOYD9RxG4aiVarv0XA&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-400 to-silver rounded-lg shadow-lg hover:scale-110 hover:shadow-blue-400/40 transition-all duration-300 text-white font-semibold"
                        >
                            <Twitter className="w-5 h-5 animate-spin-slow" />
                            Twitter
                        </a>

                        {/* Pumpfun */}
                        <a
                            data-aos="zoom-out-down"
                            href="https://pumpfun.fun"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-400 to-silver rounded-lg shadow-lg hover:scale-110 hover:shadow-green-400/40 transition-all duration-300 text-white font-semibold"
                        >
                            <TrendingUp className="w-5 h-5 animate-pulse" />
                            Pumpfun
                        </a>

                        {/* Dexscreener */}
                        <a
                            data-aos="zoom-in-right"
                            href="https://dexscreener.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-400 to-silver rounded-lg shadow-lg hover:scale-110 hover:shadow-purple-400/40 transition-all duration-300 text-white font-semibold"
                        >
                            <BarChart3 className="w-5 h-5 animate-bounce" />
                            Dexscreener
                        </a>
                    </div>
                </div>

                {/* Animasi Custom */}
                <style jsx>{`
                    .animate-spin-slow {
                        animation: spin 6s linear infinite;
                    }
                `}</style>
            </section>
            {/* Footer */}
            <footer className="relative z-10 py-6 md:py-8 text-center text-gray-400 bg-gray-900/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-sm md:text-base">© 2025 SilverMan. All rights reserved.</p>
                    {/* <div className="mt-3 md:mt-4 flex justify-center space-x-4 md:space-x-6">
                        <a
                            href="#"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm md:text-base"
                        >
                            Terms
                        </a>
                        <a
                            href="#"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm md:text-base"
                        >
                            Privacy
                        </a>
                        <a
                            href="#"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm md:text-base"
                        >
                            Contact
                        </a>
                    </div> */}
                </div>
            </footer>
            <style jsx>{`
                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }

                @keyframes sparkle {
                    0%,
                    100% {
                        opacity: 0;
                        transform: scale(0.5);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }

                @keyframes orbit {
                    0% {
                        transform: rotate(0deg) translateX(80px) rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg) translateX(80px) rotate(-360deg);
                    }
                }

                @keyframes pulse-slow {
                    0%,
                    100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.6;
                        transform: scale(1.05);
                    }
                }

                .silver-man {
                    position: absolute;
                    animation: float 8s ease-in-out infinite;
                    filter: drop-shadow(0 0 15px rgba(128, 128, 128, 0.5));
                }

                .particle {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.7);
                    border-radius: 50%;
                    animation: sparkle 3s infinite;
                }

                .orbit {
                    position: absolute;
                    animation: orbit 15s linear infinite;
                }

                .pulse {
                    animation: pulse-slow 4s infinite;
                }

                /* Media query untuk perangkat mobile */
                @media (max-width: 768px) {
                    .orbit,
                    .silver-man {
                        display: none;
                    }

                    .particle {
                        display: none;
                    }
                }
                @keyframes fadeInUp {
                    0% {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default Home;
