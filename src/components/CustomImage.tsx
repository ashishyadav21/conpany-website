import Image from 'next/image';

interface CustomImageProps {
    src: string;
    alt: string;
    width?: any;
    height?: any;
    className?: string;
    priority?: boolean | undefined
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, width, height, className, priority }) => {
    return (
        <div className={className}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading='lazy'
                className="object-cover"
                priority={priority} // Tailwind CSS or any custom styles
            />
        </div>
    );
};

export default CustomImage;
