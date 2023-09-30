import Button from "../shared/button";

interface LinksProps {
  className?: string;
}

const Links = ({className = ''}: LinksProps) => (
  <div className={`Links ${className}`.trim()}>
    <Button text="Portfolio & Experience" navigateTo="/portfolio"/>
    <Button text="Contact & Socials" navigateTo="/contact"/>
    <Button text="Lore & About" navigateTo="/about"/>
    <Button text="Pet" navigateTo="/pet"/>
  </div>
);

export default Links