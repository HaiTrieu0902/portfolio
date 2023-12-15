'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideInFromTop } from '@/utils/motions';
import { Row } from 'antd';

const Encryption = () => {
    return (
        <Row className="flex flex-row relative items-center justify-center min-h-screen w-full h-full z-99 ">
            <Row className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div variants={slideInFromTop} className="text-[40px] font-medium text-center text-gray-200">
                    Performance
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        {' '}
                        &{' '}
                    </span>
                    Security
                </motion.div>
            </Row>

            <Row className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
                <Row className="flex flex-col items-center group cursor-pointer w-auto h-auto">
                    <Image
                        src="/LockTop.png"
                        alt="Lock top"
                        width={50}
                        height={50}
                        className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
                    />
                    <Image src="/LockMain.png" alt="Lock Main" width={70} height={70} className=" z-10" />
                </Row>

                <Row className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
                    <h1 className="Welcome-text text-[12px]">Encryption</h1>
                </Row>
            </Row>
            <Row className="absolute z-[20] bottom-[10px] px-[5px]">
                <Row className="cursive text-[20px] font-medium text-center text-gray-300">
                    Secure your data with end-to-end encryption
                </Row>
            </Row>

            <Row className="w-full flex items-start justify-center absolute">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="w-full h-auto"
                    src="/img/encryption.webm"
                />
            </Row>
        </Row>
    );
};

export default Encryption;
