'use client';
import { Socials } from '@/constants';
import { Row, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
const Navbar = () => {
    const [param, setParam] = useState('');

    const handleSetParmas = (param: string) => {
        setParam(param);
    };

    return (
        <Row className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-1000 px-10">
            <Row className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <Link href="#head" className="h-auto w-auto flex flex-row items-center">
                    <Image
                        src="/img/ninja.jpg"
                        alt="Hai Trieu"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin rounded-lg"
                    />
                    <span className="font-bold ml-[10px] md:block text-gray-300">HAI TRIEU</span>
                </Link>

                <Row className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <Row className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        <Link
                            onClick={() => handleSetParmas('about')}
                            href="#about-me"
                            className={`cursor-pointer ${
                                param === 'about' &&
                                'font-bold text-transparent bg-clip-text bg-gradient-to-r  from-red-500 to-cyan-500'
                            }`}
                        >
                            About me
                        </Link>
                        <Link
                            onClick={() => handleSetParmas('skill')}
                            href="#skills"
                            className={`cursor-pointer ${
                                param === 'skill' &&
                                'font-bold text-transparent bg-clip-text bg-gradient-to-r  from-red-500 to-cyan-500'
                            }`}
                        >
                            Skills
                        </Link>
                        <Link
                            onClick={() => handleSetParmas('project')}
                            href="#projects"
                            className={`cursor-pointer ${
                                param === 'project' &&
                                'font-bold text-transparent bg-clip-text bg-gradient-to-r  from-red-500 to-cyan-500'
                            }`}
                        >
                            Projects
                        </Link>
                        <Link
                            onClick={() => handleSetParmas('activities')}
                            href="#activities"
                            className={`cursor-pointer ${
                                param === 'activities' &&
                                'font-bold text-transparent bg-clip-text bg-gradient-to-r  from-red-500 to-cyan-500'
                            }`}
                        >
                            Activities
                        </Link>
                    </Row>
                </Row>

                <Row className="flex flex-row gap-5">
                    {Socials.map((social: any) => (
                        <Image src={social.src} alt={social.name} key={social.name} width={24} height={24} />
                    ))}
                </Row>
            </Row>
        </Row>
    );
};

export default Navbar;
