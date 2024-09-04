import React, { useState } from 'react';

interface SearchProps {
    onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div id="search" className="w-full max-w-md mx-auto mt-8">
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search links..."
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 bg-white text-black dark:bg-dark-container-background dark:text-black"
            />
        </div>
    );
};

export default Search;
