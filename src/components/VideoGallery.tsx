'use client';
import { useState, useEffect } from 'react';
import videos from '@/data/videoData';
import VideoCard from '@/components/VideoCard';

const allCategories = ['All', ...Array.from(new Set(videos.flatMap((video) => video.categories)))];

const VideoGallery = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [filteredVideos, setFilteredVideos] = useState(videos);

    useEffect(() => {
        const filtered = videos.filter((video) => {
            const query = searchQuery.toLowerCase();
            const matchesCategory = selectedCategory === 'All' || video.categories.includes(selectedCategory);
            const matchesSearch =
                video.title.toLowerCase().includes(query) ||
                video.description.toLowerCase().includes(query) ||
                video.categories.some((category) =>
                    category.toLowerCase().includes(query)
                ) ||
                video.keywords.some((keyword) =>
                    keyword.toLowerCase().includes(query)
                );
            return matchesCategory && matchesSearch;
        });
        setFilteredVideos(filtered);
    }, [searchQuery, selectedCategory]);

    return (
        <div className="video-gallery bg-background dark:bg-dark-background min-h-screen w-full flex flex-col items-center justify-center py-20" id="videoGallery">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-center mb-8 text-headline dark:text-dark-headline">My Videos</h2>

                {/* Responsive Search and Filter Layout */}
                <div className="w-full flex flex-col md:flex-row md:space-x-4 justify-center items-center mb-8 lg:mb-12">
                    <input
                        type="text"
                        placeholder="Search videos..."
                        className="input input-bordered w-full max-w-md mb-4 md:mb-0 bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />

                    <div className="flex flex-col items-center">
                        <label htmlFor="categorySelect" className="mb-2 text-lg text-paragraph dark:text-dark-paragraph">
                            Filter by Category
                        </label>
                        <select
                            id="categorySelect"
                            className="select select-bordered w-full max-w-xs bg-white dark:bg-gray-700 dark:text-white dark:border-gray-500"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {allCategories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {filteredVideos.length > 0 ? (
                        filteredVideos.map((video) => (
                            <VideoCard key={video.id} video={video} />
                        ))
                    ) : (
                        <p className="text-center text-paragraph dark:text-dark-paragraph col-span-full">
                            No videos found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoGallery;
