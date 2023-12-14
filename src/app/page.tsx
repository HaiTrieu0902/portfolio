import { Hero } from '@/components';
import { Row } from 'antd';
export default function Home() {
    return (
        <main className="h-full w-full">
            <Row className="flex flex-col h-[850px] gap-20">
                <Hero />
            </Row>
        </main>
    );
}
