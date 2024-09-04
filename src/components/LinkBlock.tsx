'use client';
import React from 'react';
import { motion } from 'framer-motion';
import LinkItem from '@/components/LinkedItem';

interface Link {
    title: string;
    url: string;
    logo?: string;
    description: string;
    keywords: string[];
}

interface LinkBlockProps {
    title: string;
    links: Link[];
}

const LinkBlock: React.FC<LinkBlockProps> = ({ title, links }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start justify-start p-4 bg-background dark:bg-dark-background rounded-lg shadow-lg h-full outline outline-1 outline-stroke dark:outline-dark-stroke"
        >
            <h3 className="text-xl mb-4 text-headline dark:text-dark-headline">{title}</h3>
            <ul className="space-y-4 w-full">
                {links.map((link, index) => (
                    <LinkItem
                        key={index}
                        title={link.title}
                        url={link.url}
                        logo={link.logo}
                        description={link.description}
                    />
                ))}
            </ul>
        </motion.div>
    );
};

export default LinkBlock;
