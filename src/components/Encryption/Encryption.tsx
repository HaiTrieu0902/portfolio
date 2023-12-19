'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motions';
import { Col, Image, Row } from 'antd';

const Encryption = () => {
    return (
        <Row
            id="activities"
            className="flex flex-row relative items-center justify-center min-h-screen w-full  h-full z-99 "
        >
            <Row className="absolute w-auto h-auto top-0 z-[5]">
                <motion.div
                    variants={slideInFromTop}
                    className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-purple-500 to-cyan-500"
                >
                    Activities
                </motion.div>
            </Row>

            <Row
                gutter={[12, 12]}
                className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] sx:px-5 md:px-10 lg:px-20 xl:px-20 2xl:px-20 w-auto h-auto"
            >
                <motion.div
                    variants={slideInFromTop}
                    className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-red-500 to-cyan-500"
                >
                    Running
                </motion.div>
                <motion.div
                    variants={slideInFromTop}
                    className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-red-500 to-cyan-500"
                >
                    Reading
                </motion.div>
                <motion.div
                    variants={slideInFromTop}
                    className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-red-500 to-cyan-500"
                >
                    Cooking
                </motion.div>
                <motion.div
                    variants={slideInFromTop}
                    className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-red-500 to-cyan-500"
                >
                    Soccer
                </motion.div>
                <motion.div
                    variants={slideInFromTop}
                    className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-red-500 to-cyan-500"
                >
                    Learn Something New
                </motion.div>
            </Row>
            <Row className="absolute z-[20] bottom-[10px] px-[5px]">
                <Row className="cursive text-[20px] font-medium text-center text-gray-300">
                    If one day you disappear, who cares?
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
