//src/components/ContactForm.tsx
'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './Button';
import Image from 'next/image';

function ContactForm() {
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';

    if (!process.env.NEXT_PUBLIC_FORMSPREE_ID) {
        console.warn('Formspree ID is not set. Check your environment variables.');
    }

    const [state, handleSubmit] = useForm(formspreeId);

    if (state.succeeded) {
        return <p>Thank you! We will contact you ASAP.</p>;
    }

    return (
       
            <div className="contact relative w-full flex items-center justify-center py-20">
                <Image
                    src="/aboutBackground.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl font-bold text-center mb-8 text-white">Get in Touch</h2>
                    <p className="text-xl text-white text-center mb-8">
                        Have a question or need more information? Reach out to us, and we&apos;ll get back to you as soon as possible.
                    </p>
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 shadow-xl rounded-lg">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-bold mb-2 text-black dark:text-white">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                                required
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-bold mb-2 text-black dark:text-white">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white"
                                placeholder="How can we assist you? Let us know your thoughts."
                                required
                            />
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>
                        <div className="text-center">
                            <Button type="submit" disabled={state.submitting}>Send Message</Button>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default ContactForm;
