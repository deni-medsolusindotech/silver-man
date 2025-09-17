import React from 'react';

export default function Loading({ text }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            {/* Logo Loading */}
            <div className="relative w-24 h-24 mb-6">
                <img
                    src="/image/logo.jpeg"
                    alt="Loading Logo"
                    className="w-full h-full object-cover rounded-full border-4 border-cyan-400 animate-pulse"
                />
                {/* Lingkaran berputar */}
                <div className="absolute inset-0 rounded-full border-4 border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent animate-spin-slow"></div>
            </div>

            {/* Text */}
            <p className="text-cyan-300 text-lg font-semibold animate-pulse">{'Loading...'}</p>

            {/* Tambahan efek */}
            <div className="mt-4 flex gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>

            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 3s linear infinite;
                }
            `}</style>
        </div>
    );
}
