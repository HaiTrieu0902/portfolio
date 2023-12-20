'use client';
import { Socials } from '@/constants';
import { Popover, Row, Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const Navbar = () => {
    const [param, setParam] = useState('');
    const handleSetParmas = (param: string) => {
        setParam(param);
    };

    const content = (
        <Row className="flex flex-col gap-5 w-[200px]">
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

            <Row>
                <div className={`cursor-pointer w-full`}>Socials</div>
                <div>
                    <ul className="ml-3">
                        {Socials.map((social: any) => (
                            <li key={social.name}>
                                <a href={social?.links} target="#blank">
                                    <Image src={social.src} alt={social.name} width={24} height={24} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Row>
        </Row>
    );

    return (
        <Row className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-1000 px-10 sx:px-1">
            <Row className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <Link href="#head" className="h-auto w-auto  flex flex-row items-center sx:mt-3 ">
                    <Image
                        src="/img/ninja.jpg"
                        alt="Hai Trieu"
                        width={70}
                        height={70}
                        className="cursor-pointer hover:animate-slowspin rounded-lg "
                    />
                    <span className="font-bold ml-[10px] md:block  text-gray-300">HAI TRIEU</span>
                </Link>

                <Row className="sx:flex hidden h-full  flex-row items-center justify-between md:mr-20">
                    <Popover content={content} title="" trigger="click">
                        <Button className="gradient_custom" type="primary">
                            Menu
                        </Button>
                    </Popover>
                </Row>

                <Row className="w-[500px] sx:hidden flex h-full  flex-row items-center justify-between md:mr-20">
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

                <Row className="flex flex-row gap-5 sx:hidden">
                    {Socials.map((social: any) => (
                        <a key={social.name} href={social?.links} target="#blank">
                            <Image src={social.src} alt={social.name} width={24} height={24} />
                        </a>
                    ))}
                </Row>
            </Row>
        </Row>
    );
};

export default Navbar;
