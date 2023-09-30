interface ImageProps {
  className?: string
  alt?: string
  src?: string
}

const Image = ({ className = '', alt = '', src = '' }: ImageProps) => {
  return (
    <div className={(className + ' Image').trimStart()}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Image
