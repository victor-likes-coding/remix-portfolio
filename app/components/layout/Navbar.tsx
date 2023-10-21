import Burger from '../shared/burger';

interface INavbarProps {
  className?: string;
}

const Navbar = ({ className = '' }: INavbarProps) => {
  return (
    <nav
      className={(
        className +
        ' z-10 px-3 divide-y h-auto w-full bg-black sticky top-0 left-0 right-0 Navbar'
      ).trimStart()}>
      <Burger />
    </nav>
  );
};

export default Navbar;
