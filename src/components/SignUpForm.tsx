'use client';
import React from 'react';
import Button from './Button';

const SignupForm: React.FC = () => {
    const systemeIoUrl = process.env.NEXT_PUBLIC_SYSTEME_IO_URL;

    return (
        <div>
            <p className="text-sm text-paragraph dark:text-dark-paragraph mb-4">
                Subscribe now to get the latest in tech and pop culture straight to your inbox. Don’t miss out on exclusive updates and insights!
            </p>
            <form method="post" action={systemeIoUrl} className="space-y-4">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="surname"
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
