'use client';
import React from 'react';
import ProjectCard from './ProjectCard';
import { Carousel, Col, Row } from 'antd';
const Projects = () => {
    const onChange = (currentSlide: number) => {};
    return (
        <div className="flex flex-col items-center justify-center mb-32 z-99" id="projects">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r z-99 from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 sx:px-5 md:px-10 lg:px-20 xl:px-20 2xl:px-20 z-99">
                <Row
                    gutter={[
                        { xs: 8, sm: 16, md: 24, lg: 32 },
                        { xs: 8, sm: 16, md: 24, lg: 32 },
                    ]}
                >
                    <Col xxl={{ span: 12 }} lg={{ span: 12 }} sm={24}>
                        <ProjectCard
                            href="/pdf/Sport stretching.pdf"
                            src="/img/gym.jpg"
                            title="Sport Stretching"
                            description="The Sport Stretching project is a management system
                            for fitness centers specializing in stretching
                            exercises. The system allows fitness centers to
                            manage customers, service packages, booking
                            schedules, and other related information."
                        />
                    </Col>
                    <Col xxl={{ span: 12 }} lg={{ span: 12 }} sm={24}>
                        <ProjectCard
                            href="/pdf/Pinnacle.pdf"
                            src="/img/pinnacle.jpg"
                            title="Pinnacle"
                            description="Pinnacle is a project that provides test case
                            management automation tools for mobile devices.
                            This tool helps reduce time and effort for test case
                            management, while improving testing efficiency and
                            quality."
                        />
                    </Col>
                    <Col xxl={{ span: 12 }} lg={{ span: 12 }} sm={24}>
                        <ProjectCard
                            href="/pdf/HurricaneSmartMoney.pdf"
                            src="/img/bitcoin.jpg"
                            title="SmartMoney"
                            description="The Smart Money project is a personal finance
                            management application that helps users track
                            spending, manage budgets, and save money."
                        />
                    </Col>
                    <Col xxl={{ span: 12 }} lg={{ span: 12 }} sm={24}>
                        <ProjectCard
                            href="/pdf/HRM system.pdf"
                            src="/img/office.jpg"
                            title="HRM System"
                            description="HRM System is the human resource management system for our company, it is a trial to see if it helps us optimize our human resource management resources."
                        />
                    </Col>
                </Row>
            </div>
            {/* <div className="z-99">
                <Carousel autoplay  speed={1500}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div> */}
        </div>
    );
};

export default Projects;
