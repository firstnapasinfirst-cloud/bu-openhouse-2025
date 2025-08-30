'use client';

import React from 'react';
import Image
    from 'next/image';

const ProfileCard: React.FC = () => {

    const socialLinks = [
        {
            name: 'Email',
            href: 'mailto:alex.johnson@example.com',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            ),
            color: 'text-red-400 hover:text-red-300'
        },
        //TODO: Add more social links here
        {
            name: 'Instagram',
            href: 'https://instagram.com/iamnpsips',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.817-5.817C19.988 13.056 20 12.716 20 10s-.012-3.057-.06-4.123C19.833 2.245 17.818.227 14.183.06 13.057.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.717-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
                </svg>
            ),
            color: 'text-pink-400 hover:text-pink-300'
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/alexjohnson',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
            ),
            color: 'text-sky-400 hover:text-sky-300'
        },
        {
            name: 'YouTube',
            href: 'https://youtube.com/@alexjohnson',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
            ),
            color: 'text-red-500 hover:text-red-400'
        },
        {
            name: 'TikTok',
            href: 'https://tiktok.com/@alexjohnson',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.101 2.272c.676 4.317 3.706 5.856 6.592 6.07v3.833c-2.11-.15-4.065-.97-5.803-2.286v4.578c0 5.543-6.252 8.84-10.424 4.668C-4.068 15.5.578 9.248 6.121 9.248v3.885c-1.677-.178-3.287.518-3.75 1.986-1.091 3.457 3.064 5.985 5.64 3.408V2.272h1.09Z" clipRule="evenodd" />
                </svg>
            ),
            color: 'text-black hover:text-gray-700'
        },
        {
            name: 'Discord',
            href: 'https://discord.gg/alexjohnson',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.942 4.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-8.72ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
            ),
            color: 'text-indigo-400 hover:text-indigo-300'
        },
        {
            name: 'Telegram',
            href: 'https://t.me/alexjohnson',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.987 6.838l-1.684 7.935c-.127.57-.461.713-.934.444l-2.568-1.895-1.24 1.193c-.137.137-.252.252-.516.252l.184-2.607 4.745-4.289c.206-.184-.045-.287-.32-.103L7.67 11.73l-2.557-.798c-.555-.174-.566-.555.116-.822l9.996-3.858c.461-.174.866.103.719.822z" />
                </svg>
            ),
            color: 'text-blue-500 hover:text-blue-400'
        }
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#FFD700] via-purple-900 to-[#FFD700] flex items-center justify-center p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-30">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Main Profile Card */}
            <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center text-center">

                    {/* Profile Section */}
                    <div className="mb-4">
                        {/* Avatar */}
                        <div className="w-36 h-36 mx-auto mb-2 relative">
                            {/* //TODO: Replace with actual profile picture */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl">
                                <Image
                                    src="/jjj.jpg"
                                    alt="Profile"
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-ping opacity-20"></div>
                        </div>

                        {/* Name and Title */}
                        {/* //TODO: Replace with actual name and title */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                            Napasin imprasert
                        </h1>
                        <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm sm:text-base border border-blue-400/30  mb-1">
                            GoDBigOnlyfanForU
                        </div>

                        {/* Contact Information */}
                        {/* //TODO: Replace with actual contact information */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm sm:text-base">firstnapasinfirst@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm sm:text-base">+66 (098) 261-3806</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    {/* //TODO: Replace with actual bio */}
                    <div className="max-w-xl mb-2">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            LnWZa007x_ZaZa
                        </p>
                    </div>

                    {/* Social Links */}
                    {/* //TODO: Add more social links here */}
                    <div className="space-y-2 mb-4">
                        <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
                        <div className="flex justify-center space-x-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 bg-white/10 rounded-lg border border-white/20 hover:border-white/40 ${link.color} transition-all duration-300 transform hover:scale-110`}
                                    title={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Start Chatting Button */}
                    <div className="pt-4 border-t border-white/20 max-w-xl w-full">
                        <a
                            href="/chat"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 backdrop-blur-sm rounded-full text-white font-semibold text-sm sm:text-base border border-blue-400/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                        >
                            Start Chatting
                        </a>
                    </div>
                </div>
            </div>

            {/* Mark component directly embedded */}
            <div className="absolute bottom-0 left-0 right-0 py-4 z-[60]">
                <p className="text-center text-sm text-white opacity-90 bg-black/20 rounded-lg mx-4 py-2">
                    <a href="https://peamz4.in.th" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">peamz4</a> X BU OPENHOUSE 2025
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
