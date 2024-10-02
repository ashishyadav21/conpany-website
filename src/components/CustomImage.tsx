import Image from 'next/image';

interface CustomImageProps {
    src: string;
    alt: string;
    width?: any;
    height?: any;
    className?: string;
    priority?: boolean | undefined
    layout?: string
    objectFit?: string
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, width, height, className, priority, layout, objectFit }) => {
    return (
        <div className={className}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="object-cover"
                priority={priority}
                layout={layout}
                objectFit={objectFit} // Tailwind CSS or any custom styles
            />
        </div>
    );
};

export default CustomImage;
