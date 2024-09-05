import Image from 'next/image';

interface CustomImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, width, height, className }) => {
    return (
        <div className={className}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="object-cover" // Tailwind CSS or any custom styles
            />
        </div>
    );
};

export default CustomImage;
