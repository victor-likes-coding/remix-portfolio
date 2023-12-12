import Button from '../shared/button';

interface LinksProps {
  className?: string;
}

const Links = ({ className = '' }: LinksProps) => (
  <div
    className={`Links ${className} flex flex-col md:flex-row gap-4 md:gap-0 md:w-1/2 md:flex-wrap md:mx-auto`.trim()}>
    {[
      {
        text: 'Portfolio & Experience',
        navigateTo: '/portfolio',
      },
      { text: 'Contact & Socials', navigateTo: '/contact' },
      { text: 'Lore & About', navigateTo: '/about' },
      { text: 'Pet', navigateTo: '/pet' },
    ].map(({ text, navigateTo }) => {
      return <Button key={text} text={text} navigateTo={navigateTo} />;
    })}
  </div>
);

export default Links;
