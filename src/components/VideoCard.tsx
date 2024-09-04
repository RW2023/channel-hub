import React from 'react';

type VideoCardProps = {
    video: {
        id: string;
        title: string;
        description: string;
    };
};

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    return (
        <div className="card bg-white dark:bg-gray-800 shadow-xl">
            <div className="card-body">
                <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <h3 className="text-2xl font-bold mt-4 mb-4 text-black dark:text-white">{video.title}</h3>
                <p className="text-black dark:text-white">{video.description}</p>
            </div>
        </div>
    );
};

export default VideoCard;
