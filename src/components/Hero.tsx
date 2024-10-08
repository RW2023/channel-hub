'use client';
import Button from './Button';
import GhostButton from './GhostButton';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="hero relative min-h-screen flex items-center justify-center">
            <Image
                src="https://via.placeholder.com/1920x1080?text=Hero+Background"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className='text-5xl text-white font-bold mb-4'>Channel Site Template</h1>
                <p className="text-xl text-white mb-8 font-sans">Customize the content to fit your needs and make it your own.</p>

                <div className="flex justify-center space-x-4">
                    <Button href="/blog">Get Started</Button>
                    {/* <GhostButton href="#subscribe" className='text-white border-white'>Subscribe</GhostButton> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;
