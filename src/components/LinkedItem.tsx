'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LinkItemProps {
    title: string;
    url: string;
    logo?: string;
    description: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ title, url, logo, description }) => {
    return (
        <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full outline outline-1 outline-black dark:outline-white"
        >
            <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <div className="flex items-center">
                    {logo && (
                        <div className="relative w-20 h-20 mr-4">
                            <Image src={logo} alt={title} layout="fill" objectFit="contain" className="rounded" />
                        </div>
                    )}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                    </div>
                </div>
            </a>
        </motion.li>
    );
}

export default LinkItem;
