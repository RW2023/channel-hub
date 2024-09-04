'use client';
import React from 'react';
import Button from './Button';

const SignupForm: React.FC = () => {
    const placeholderUrl = "https://example.com/subscribe"; // Replace with your subscription URL

    return (
        <div>
            <p className="text-sm text-paragraph dark:text-dark-paragraph mb-4">
                Customize this text for your signup form. Use this form to collect subscriber information and engage with your audience.
            </p>
            <form method="post" action={placeholderUrl} className="space-y-4">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-stroke dark:border-dark-stroke rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary bg-white dark:bg-dark-background text-black dark:text-white"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-stroke dark:border-dark-stroke rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary bg-white dark:bg-dark-background text-black dark:text-white"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="f-row">
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Subscribe
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
