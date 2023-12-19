'use client';
import { Col, Row, Image } from 'antd';

const About = () => {
    return (
        <Row
            id="about-me"
            className="flex-wrap items-center justify-center  md:h-[500px] lg:h-[640px] xl:h-[640px] 2xl:h-[640px] w-full relative overflow-hidden z-99 lg:px-10 xl:px-60 2xl:px-60"
        >
            <Col span={12}>
                <Image
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                    width={400}
                    height={400}
                    src={'/img/haitrieumain.jpg'}
                    preview={false}
                    alt="HAITRIEU"
                />
            </Col>
            <Col span={12} className="text-white">
                <div className="d-flex items-center justify-center">
                    <h2 className="text-white font-extrabold text-2xl">
                        {'"A simple person who is always optimistic even when hopeless"'}
                    </h2>
                </div>
                <Row className="pt-10">
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px]">Name: </span>
                            <span className="font-bold text-[14px]">Hai Trieu (Schanel)</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px]">Phone: </span>
                            <span className="font-bold text-[14px]">+84 328618265</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px]">Age: </span>
                            <span className="font-bold text-[14px]">18 plus plus+</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px]">Email: </span>
                            <span className="font-bold text-[14px]">haitrieuql0902@gmail.com</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px]">Languages: </span>
                            <span className="font-bold text-[14px]">Vietnamese, English</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px]">Address: </span>
                            <span className="font-bold text-[14px]">Ha Dong, Ha Noi</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px]">Educations: </span>
                            <span className="font-bold text-[14px]">Ha Noi Open University</span>
                        </div>
                    </Col>
                    <Col className="mt-3" span={12}>
                        <div className="d-flex gap-3">
                            <span className="text-gray-500 font-bold text-[14px]">Main: </span>
                            <span className="font-bold text-[14px]">Ninja</span>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default About;
