interface ImageProps {
  className?: string;
  alt?: string;
  src?: string;
}

const Image = ({ className = '', alt = '', src = '' }: ImageProps) => {
  return (
    <div className={(className + 'pt-3 Image').trimStart()}>
      <img
        src={src}
        alt={alt}
        className="w-full border border-blue-700 rounded-md"
      />
    </div>
  );
};

export default Image;
