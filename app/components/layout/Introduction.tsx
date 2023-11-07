interface IntroductionProps {
  className?: string;
  children?: React.ReactNode;
  introText?: string;
}

const Introduction = ({
  className = '',
  children,
  introText,
}: IntroductionProps) => {
  return (
    <section
      className={(
        className + 'divide-y divide-blue-500 my-2 text-center'
      ).trimStart()}>
      {children}
      {introText && <div className="font-bold pt-2">{introText}</div>}
    </section>
  );
};

export default Introduction;
