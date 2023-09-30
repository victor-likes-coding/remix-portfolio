interface IntroductionProps {
  className?: string
  children?: React.ReactNode
  introText?: string
}

const Introduction = ({
  className = '',
  children,
  introText,
}: IntroductionProps) => {
  return (
    <section className={(className + ' Introduction').trimStart()}>
      {children}
      {introText && <div className="intro-text">{introText}</div>}
    </section>
  )
}

export default Introduction
