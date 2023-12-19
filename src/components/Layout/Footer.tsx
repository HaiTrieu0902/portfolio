import { FaYoutube, FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { RxDiscordLogo, RxGithubLogo } from 'react-icons/rx';

const Footer = () => {
    return (
        <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-99  mt-20">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center  justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <a
                            href="https://www.youtube.com/@MixiGaming89"
                            target="#blank"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </a>
                        <a
                            href="https://github.com/HaiTrieu0902"
                            target="#blank"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <a
                            href="https://www.instagram.com/h.trieu____/"
                            target="#blank"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <FaInstagramSquare />
                            <span className="text-[15px] ml-[6px]">Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/trieuql123"
                            target="#blank"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <FaFacebook />
                            <span className="text-[15px] ml-[6px]">Facebook</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/trieubuihai/"
                            target="#blank"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <FaLinkedin />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <a className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">+84 328618265</span>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://m.me/trieuql123"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <span className="text-[15px] ml-[6px]">Learning about me</span>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="mailto:haitrieuql0902@gmail.com"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <span className="text-[15px] ml-[6px]">haitrieuql0902@gmail.com</span>
                        </a>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">&copy; Design by Hai Trieu. All rights reserved</div>
            </div>
        </div>
    );
};

export default Footer;
