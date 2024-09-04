import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        img: ({ src, width, height, alt, ...rest }) => {
            // Ensure the src is defined
            if (!src) {
                console.error("Image component requires a 'src' property.");
                return null;
            }

            // Parse width and height as numbers, with sensible defaults
            const parsedWidth = width ? parseInt(width as string) : 500;
            const parsedHeight = height ? parseInt(height as string) : 300;

            return (
                <Image
                    src={src}
                    width={parsedWidth}
                    height={parsedHeight}
                    layout="responsive"
                    alt={alt || ''}
                    {...rest}
                />
            );
        },
    };
}
