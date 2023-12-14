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

interface Props {
  className?: string;
}

type pathOptions = '/' | '/portfolio' | '/contact' | '/about' | '/pet';

const CustomNavbar = (props: Props) => {
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
    // { text: 'Sign In', navigateTo: '/auth' },
  ];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-slate-900 border-b-2 border-blue-500"
      isBordered={true}>
      <NavbarContent>
        {/* Only show toggle menu if we're not on root page of '/' */}
        {location.pathname !== '/' && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            icon={<Burger />}
            className="lg:hidden"
          />
        )}
        <p className="text-[#fff] font-bold text-center w-screen absolute right-0 -z-10 text-xl lg:text-start lg:pl-6 lg:flex lg:justify-between lg:items-center">
          {linksMap[location.pathname as pathOptions]}
          <div className="xs:hidden lg:flex lg:max-h-16">
            {links.map(({ text, navigateTo }, index) => {
              // Don't show the current page in the navbar
              if (location.pathname === navigateTo) return '';
              const renderedText = text.split(' ').map((value, index) => (
                <span key={value} className={index !== 0 ? 'lg:hidden' : ''}>
                  {value}
                </span>
              ));
              return (
                <Link
                  key={text}
                  className="w-full p-4 text-[#fff md:flex md:justify-center lg:text-sm lg:px-6 lg:w-32"
                  href={navigateTo}
                  size="sm">
                  {renderedText}
                </Link>
              );
            })}
          </div>
        </p>
      </NavbarContent>
      <NavbarMenu className="p-0 gap-0 divide-y bg-slate-900">
        {links.map(({ text, navigateTo }, index) => {
          // Don't show the current page in the navbar
          if (location.pathname === navigateTo) return '';
          return (
            <NavbarMenuItem key={navigateTo}>
              <Link
                className="w-full bg-blue-500 p-4 text-[#fff md:flex md:justify-center"
                href={navigateTo}
                size="lg">
                {text}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default CustomNavbar;
