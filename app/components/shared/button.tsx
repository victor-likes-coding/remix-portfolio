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
        ' font-bold block w-full rounded-none p-3 border-x-2 border-y-1 border-x-blue-500 border-y-black text-center bg-slate-900 hover:bg-blue-700 focus:bg-blue-700 active:bg-white active:text-black hover:text-black focus:text-black Button md:border-l-0 md:w-1/2 md:odd:border-l-2'
      ).trim()}
      to={navigateTo}>
      {text ? text : 'Button'}
    </Link>
  );
};

export default Button;
