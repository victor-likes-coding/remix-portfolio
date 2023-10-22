import { useState } from 'react';
import {
  Navbar,
  NavbarContent,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import Burger from '../shared/burger';
import { useLocation } from '@remix-run/react';

interface INavbarProps {
  className?: string;
}

type pathOptions = '/' | '/portfolio' | '/contact' | '/about' | '/pet';

const CustomNavbar = ({ className = '' }: INavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const linksMap = {
    '/': 'Home',
    '/portfolio': 'Portfolio & Experience',
    '/contact': 'Contact & Socials',
    '/about': 'Lore & About',
    '/pet': 'Pet',
  };

  const links = [
    { text: 'Home', navigateTo: '/' },
    {
      text: 'Portfolio & Experience',
      navigateTo: '/portfolio',
    },
    { text: 'Contact & Socials', navigateTo: '/contact' },
    { text: 'Lore & About', navigateTo: '/about' },
    { text: 'Pet', navigateTo: '/pet' },
    { text: 'Sign In', navigateTo: '/auth' },
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black"
      isBordered={true}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          icon={<Burger />}
        />
        <p className="text-[#fff] font-bold text-center w-screen absolute right-0 -z-10 text-xl">
          {linksMap[location.pathname as pathOptions]}
        </p>
      </NavbarContent>
      <NavbarMenu className="p-0 gap-0 divide-y bg-black">
        {links.map(({ text, navigateTo }, index) => (
          <NavbarMenuItem key={navigateTo}>
            <Link
              className="w-full bg-blue-500 p-4 text-[#fff]"
              href={navigateTo}
              size="lg">
              {text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default CustomNavbar;
