/* eslint-disable @next/next/no-img-element */
'use client';
import { Col, Row, Image } from 'antd';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export const handleDiffDate = (startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) => {
    if (startDate && endDate) {
        const startDateValue = dayjs(startDate).startOf('day');
        const endDateValue = dayjs(endDate).startOf('day');
        return Number(endDateValue.diff(startDateValue, 'years'));
    }
};

const About = () => {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <Row
            id="about-me"
            className="flex-wrap items-center justify-center  md:h-[500px] lg:h-[640px] xl:h-[640px] 2xl:h-[640px] w-full relative overflow-hidden z-99 lg:px-10 xl:px-60 2xl:px-60"
        >
            <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                {/* <Image
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                    width={width < 750 ? 280 : 600}
                    height={width < 750 ? 280 : 600}
                    src={'/img/haitrieu.jpg'}
                    preview={false}
                    alt="HAITRIEU"
                    className="sx:mt-5 sx:w-full"
                /> */}
                <img
                    className="sx:w-[280px] sx:h-[280px] w-[400px] h-[400px] sx:mt-5"
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                    src="/img/haitrieumain.jpg"
                    alt="HaiTrieu"
                />
            </Col>
            <Col sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} className="text-white sx:px-3">
                <div className="d-flex items-center justify-center sx:mt-5">
                    <h2 className="text-white font-extrabold text-2xl">
                        {'"Slowly, good things always take time,"'}
                        <br />
                        {'Enjoy the pain 🥷'}
                    </h2>
                </div>
                <Row className="pt-10">
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px] sx:text-[12px] ">Name: </span>
                            <span className="font-bold text-[14px] sx:text-[12px]">Hai Trieu (Schanel)</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px] sx:text-[12px]">Phone: </span>
                            <span className="font-bold text-[14px] sx:text-[12px]">+84 328618265</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px] sx:text-[12px]">Age: </span>
                            <span className="font-bold text-[14px] sx:text-[12px]">
                                {handleDiffDate(dayjs('09/02/2002'), dayjs())}
                            </span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px] sx:text-[12px]">Email: </span>
                            <span className="font-bold text-[14px] sx:text-[12px]">haitrieuql0902@gmail.com</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px] sx:text-[12px]">Languages: </span>
                            <span className="font-bold text-[14px] sx:text-[12px]">Vietnamese, English</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px] sx:text-[12px]">Address: </span>
                            <span className="font-bold text-[14px] sx:text-[12px]">Ha Dong, Ha Noi</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px] sx:text-[12px]">Educations: </span>
                            <span className="font-bold text-[14px] sx:text-[12px]">Ha Noi Open University</span>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default About;
