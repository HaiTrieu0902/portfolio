'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motions';

const SkillText = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center z-99 mt-12">
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]  "
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text  text-[14px] font-semibold">{"We can't, -> C A N"}</h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
            >
                Making apps with modern technologies
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.5)}
                className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
            >
                Never miss a task, deadline or idea
            </motion.div>
        </div>
    );
};

export default SkillText;
