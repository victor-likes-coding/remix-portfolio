import { Link } from '@remix-run/react';

interface ButtonProps {
  className?: string;
  text?: string;
  navigateTo: string;
}

const Button = ({ className = '', text, navigateTo }: ButtonProps) => {
  return (
    <Link
      className={(
        className +
        ' font-bold block rounded-none p-3 border-x-2 border-y-1 border-x-blue-500 border-y-black text-center bg-slate-900 hover:bg-blue-700 focus:bg-blue-700 active:bg-white active:text-black hover:text-black focus:text-black Button md:w-1/2 md:border-x-0 md:border-l-2 last-of-type:md:border-r-2'
      ).trim()}
      to={navigateTo}>
      {text
        ? text.split(' ').map((value, index) => (
            <span key={index} className={index === 0 ? '' : 'md:hidden'}>
              {value}{' '}
            </span>
          ))
        : 'Button'}
    </Link>
  );
};

export default Button;
