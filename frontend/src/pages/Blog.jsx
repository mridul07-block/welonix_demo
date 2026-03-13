import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
    "Importance of Video Localization",
    "Subtitle Translation Benefits",
    "Localization vs Translation",
    "Future of AI in Localization",
    "Localization for E-learning",
    "Global Marketing Localization",
    "Multilingual Content Strategy",
    "Localization for Streaming Platforms",
    "Best Practices for Subtitles",
    "Video Dubbing vs Voice-over"
];

export default function Blog() {
    return (
        <div className="w-full pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                <div className="max-w-3xl">
                    <h1 className="font-sans font-bold text-5xl md:text-7xl leading-tight tracking-tight text-primary mb-6">
                        Knowledge Hub
                    </h1>
                    <p className="font-serif italic text-3xl text-primary/60">
                        Insights on the future of localization.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {blogPosts.map((title) => (
                        <Link
                            key={title}
                            to={`/blog/${title.toLowerCase().replace(/ /g, '-')}`}
                            className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group border-white/5"
                        >
                            <h3 className="font-sans font-medium text-xl text-primary group-hover:text-accent transition-colors">
                                {title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
