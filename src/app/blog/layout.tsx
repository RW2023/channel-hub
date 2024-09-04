import { FC } from "react";
import { Poppins, Lato } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'], // Specify the weights you need
    subsets: ['latin'], // Specify the subsets you need
    display: 'swap', // Optional: controls how the font is swapped in
});

const lato = Lato({
    weight: ['400', '700'], // Specify the weights you need
    subsets: ['latin'], // Specify the subsets you need
    display: 'swap', // Optional: controls how the font is swapped in
});

interface BlogLayoutProps {
    children: React.ReactNode;
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {
    return (
        <div
            className={`min-h-screen bg-background dark:bg-dark-background ${poppins.className} ${lato.className}`}
        >
            <div className="container mx-auto px-4 py-8">
                {children}
            </div>
        </div>
    );
};

export default BlogLayout;
