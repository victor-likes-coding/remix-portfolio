interface ImageProps {
  className?: string;
  alt?: string;
  src?: string;
  hideable?: boolean;
  replaceCss: boolean;
}

const Image = ({
  className = '',
  alt = '',
  src = '',
  hideable,
  replaceCss,
}: ImageProps) => {
  return (
    <div
      className={
        replaceCss
          ? className
          : (
              className + `pt-3 Image ${hideable ? 'md:hidden' : ''}`
            ).trimStart()
      }>
      <img src={src} alt={alt} className="border border-blue-500 rounded-lg" />
    </div>
  );
};

export default Image;
