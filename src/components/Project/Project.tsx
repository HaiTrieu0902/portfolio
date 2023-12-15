'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import { Carousel } from 'antd';
const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Projects = () => {
    const onChange = (currentSlide: number) => {};
    return (
        <div className="flex flex-col items-center justify-center py-20 z-99" id="projects">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 z-99">
                <ProjectCard
                    src="/NextWebsite.png"
                    title="Modern Next.js Portfolio"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="Interactive Website Cards"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Space Themed Website"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
            <Carousel className="z-99" afterChange={onChange} dotPosition={'left'}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </div>
    );
};

export default Projects;
