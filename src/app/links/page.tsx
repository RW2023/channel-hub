'use client';
import { FC, useState } from 'react';
import links from '@/data/Links';
import LinkBlock from '@/components/LinkBlock';
import { motion } from 'framer-motion';
import Search from '@/components/Search';

interface Props { }

const Page: FC<Props> = (props): JSX.Element => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const {
        socialLinks,
        homeOfficeLinks,
    } = links;

    const allLinks = [
        // { title: "Home Office", description: "Essential items for a comfortable home office.", links: homeOfficeLinks }, // Uncomment this line to add a new category and follow the same pattern
        { title: "Social Links", description: "Connect with me on social media.", links: socialLinks },
    ];

    const filteredLinks = allLinks.map(category => ({
        ...category,
        links: category.links.filter(link =>
            (selectedCategory === 'All' || category.title === selectedCategory) &&
            (link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                link.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase())))
        )
    })).filter(category => category.links.length > 0);

    const selectedCategoryDescription = allLinks.find(category => category.title === selectedCategory)?.description;

    return (
        <div className="min-h-screen bg-background dark:bg-dark-background flex flex-col items-center text-black dark:text-white">
            <div className="w-full max-w-screen-lg p-4 sm:p-8">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-base-100 dark:bg-dark-secondary rounded-lg shadow-md p-6 sm:p-8 text-center outline outline-1 outline-stroke dark:outline-dark-stroke"
                >
                    <h1 className="text-5xl text-headline dark:text-headline mt-10">The Link Hub</h1>
                    <h2 className="text-2xl text-paragraph dark:text-black mt-4">
                        Discounts, Extended Trials, and Tools I Use
                    </h2>
                    <p className="mt-4 text-paragraph dark:text-black max-w-2xl mx-auto">
                        Explore exclusive offers with extended trials and deep discounts through these affiliate links. These offers are designed to benefit us both: you get great deals, and I receive a small commission at no additional cost to you, which helps support my content creation. Thank you for your support!
                    </p>
                </motion.div>
                <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
                    <Search onSearch={setSearchTerm} />
                    <div className="mt-4 sm:mt-0">
                        <label htmlFor="category" className="mr-2 text-paragraph dark:text-white">Filter by Category:</label>
                        <select
                            id="category"
                            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 bg-white dark:bg-dark-container-background dark:text-black"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            <option value="All">All</option>
                            {allLinks.map((category, index) => (
                                <option key={index} value={category.title}>{category.title}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {selectedCategory !== 'All' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full bg-base-100 dark:bg-dark-secondary rounded-lg shadow-md mt-4 p-4 sm:p-6 text-center outline outline-1 outline-stroke dark:outline-dark-stroke"
                    >
                        <h3 className="text-xl text-headline dark:text-white">{selectedCategory}</h3>
                        <p className="mt-2 text-paragraph dark:text-white">{selectedCategoryDescription}</p>
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full bg-base-100 dark:bg-dark-secondary rounded-lg shadow-md mt-10 p-4 sm:p-8"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                        {filteredLinks.map((category, index) => (
                            <LinkBlock key={index} title={category.title} links={category.links} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Page;
