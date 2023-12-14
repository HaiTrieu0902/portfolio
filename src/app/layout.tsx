import { Footer, Header } from '@/components';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Pewnoy',
    description: 'This is my portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className=" overflow-y-scroll overflow-x-hidden">
                {children}
                <Footer />
            </body>
        </html>
    );
}
