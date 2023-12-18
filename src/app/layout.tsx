import { Footer, Navbar, StarsCanvas } from '@/components';
import type { Metadata } from 'next';
import './globals.css';
import About from '@/components/About/About';

export const metadata: Metadata = {
    title: 'Pewnoy',
    description: 'This is my portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="overflow-y-scroll overflow-x-hidden bg-[#0d1117] z-10">
                <StarsCanvas />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
