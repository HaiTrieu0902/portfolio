'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motions';
import { Row, notification } from 'antd';

const HeroContent = () => {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.info({
            message: (
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-red-500 to-cyan-500">
                    Ayyyyzaaa Have a good day
                </span>
            ),
            description: 'My CV is in the process of completion, it will be available shortly, thank you!!!',
            duration: 0,
        });
    };

    const openNotificationInfo = () => {
        api.open({
            message: (
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-red-500 to-cyan-500">
                    Advertise a bit {':('}
                </span>
            ),
            description: 'If you want to have a portfolio like this, please contact me !!!',
            duration: 0,
        });
    };

    useEffect(() => {
        const notificationTimeout = setTimeout(() => {
            openNotificationInfo();
        }, 3000);
        return () => {
            clearTimeout(notificationTimeout);
        };
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-row items-center justify-center px-20 sx:px-2 mt-40 w-full z-[20]"
        >
            {contextHolder}
            <Row className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5 " />
                    <h1 className="Welcome-text text-[14px] font-semibold">Junior Fullstack Developer</h1>
                </motion.div>

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            the best
                        </span>
                        project exprience
                    </span>
                </motion.div>

                <motion.p variants={slideInFromLeft(0.8)} className="text-lg text-white my-5 max-w-[600px]">
                    I&apos;m Hai Trieu, A Junior full Stack Software Engineer with experience in Website, Mobile App,
                    and Software development. Check out my projects and skills.Now, I am working as a programmer at{' '}
                    <a href="https://powergategroup.com/" target="#blank" className="text-lg text-[#F47321]">
                        Powergate Software
                    </a>
                </motion.p>
                <motion.a
                    onClick={openNotification}
                    variants={slideInFromLeft(1)}
                    className="py-2 sx:-mt-10 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    My CV
                </motion.a>
            </Row>

            <motion.div variants={slideInFromRight(0.8)} className="w-full h-full flex justify-center items-center">
                <Image src="/img/mainIconsdark.svg" alt="work icons" height={650} width={650} />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;
