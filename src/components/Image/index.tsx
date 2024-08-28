// Define the props for the Image component
interface ImageProps {
  imageSrc?: string | undefined;
  size: {
    width: number;
    height: number;
  };
  altText: string;
}

/**
 * Primary UI component for user interaction
 */
const Image = ({ imageSrc, size, altText }: ImageProps): JSX.Element => {
  const { width, height } = size;

  return (
    <img
      className="object-cover img-item"
      src={imageSrc}
      width={width}
      height={height}
      alt={altText}
    />
  );
};

export default Image;
