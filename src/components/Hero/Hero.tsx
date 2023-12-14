const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full" id="about-me">
            <video autoPlay muted loop className="rotate-180 absolute  h-full w-full left-0 z-[1] object-cover ">
                <source src="/img/backg.mp4" type="video/webm" />
                {/* <source src="/img/blackhole.webm" type="video/webm" /> */}
                {/* <source src="/img/background.mp4" type="video/webm" /> */}
                {/* <source src="/img/world.mp4" type="video/webm" /> */}
            </video>
        </div>
    );
};

export default Hero;
