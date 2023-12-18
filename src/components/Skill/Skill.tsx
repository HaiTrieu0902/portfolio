import { Backend_skill, Frontend_skill, Other_skill } from '@/constants';
import React from 'react';
import SkillCard from './SkillCard';
import SkillText from './SkillText';
import { Row } from 'antd';

const Skills = () => {
    return (
        <Row
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-full w-full relative overflow-hidden z-99 "
        >
            <SkillText />
            <Row className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                    <SkillCard key={index} src={image.Image} width={image.width} height={image.height} index={index} />
                ))}
            </Row>
            <Row className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                    <SkillCard key={index} src={image.Image} width={image.width} height={image.height} index={index} />
                ))}
            </Row>
            <Row className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((image, index) => (
                    <SkillCard key={index} src={image.Image} width={image.width} height={image.height} index={index} />
                ))}
            </Row>
            <Row className="h-20"></Row>
            <Row className="w-full h-full absolute">
                <Row className="w-full h-full z-[-10]  absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/img/world.mp4"
                    />
                </Row>
            </Row>
        </Row>
    );
};

export default Skills;
