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
        'Introduction divide-y divide-blue-500 lg:divide-y-0 my-2 text-center md:w-3/4 md:mx-auto lg:w-1/2 ' +
        className
      ).trimStart()}>
      {children}
      <div className="xs:hidden lg:block">
        A Professional Web Application Developer
      </div>
      {introText && <div className="font-bold pt-1 lg:1/2">{introText}</div>}
    </section>
  );
};

export default Introduction;
