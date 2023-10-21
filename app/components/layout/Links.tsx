import Button from '../shared/button';

interface LinksProps {
  className?: string;
}

const Links = ({ className = '' }: LinksProps) => (
  <div className={`Links ${className} flex flex-col gap-4`.trim()}>
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
