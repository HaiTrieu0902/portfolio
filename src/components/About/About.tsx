'use client';
import { Col, Row, Image } from 'antd';

const About = () => {
    return (
        <Row className="items-center justify-center  h-[550px] w-full relative overflow-hidden z-99 px-60">
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
                hello
            </Col>
        </Row>
    );
};

export default About;
