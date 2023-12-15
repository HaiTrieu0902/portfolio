import { About, Encryption, Footer, Hero, Project, Skills } from '@/components';
import { Row } from 'antd';
export default function Home() {
    return (
        <main className=" w-full">
            <Row className="flex flex-col h-[850px] gap-20">
                <Hero />
            </Row>
            <About />
            <Skills />
            <Project />
            <Encryption />
        </main>
    );
}
