'use client';
import React from 'react';
import SignupForm from '@/components/SignUpForm';

const SignupSection: React.FC = () => {
    return (
        <section id="signup" className="relative flex items-center justify-center w-full min-h-screen text-white dark:text-dark-secondary overflow-hidden">
            <div
                id="parallax-background"
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: 'url("/brandBackground.JPG")' }}
            ></div>
            <div id="form" className="relative bg-white dark:bg-dark-background p-8 rounded-lg shadow-lg max-w-lg w-full text-center outline drop-shadow-md z-10">
                <h1 className="text-3xl font-poppins font-bold mb-4 text-black dark:text-dark-headline">
                    Join Our Tech & Culture Community
                </h1>
                <p className="mb-6 text-gray-700 dark:text-dark-paragraph">
                    Stay Ahead with Weekly Insights & Exclusive Content!
                </p>
                <SignupForm />
            </div>
        </section>
    );
};

export default SignupSection;