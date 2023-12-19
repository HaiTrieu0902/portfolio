import { Image } from 'antd';
import Link from 'next/link';
import React from 'react';
interface Props {
    src: string;
    title: string;
    description: string;
    height?: number | string;
    href?: any;
}

const ProjectCard = ({ src, title, description, height, href }: Props) => {
    return (
        <a className="w-full" href={href} target="#blank">
            <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-[#8863d2] ">
                <Image
                    preview={false}
                    style={{ height: height, width: '100%' }}
                    src={src}
                    alt={title}
                    className="w-full object-contain"
                />
                <div className="relative p-4">
                    <div className="flex flex-row w-full justify-between">
                        <span className="text-lg font-semibold text-white">{title}</span>
                        <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r z-99 from-red-500 to-cyan-500">
                            View detail
                        </span>
                    </div>
                    <p className="mt-2 text-gray-300">{description}</p>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
