import { Link } from "@remix-run/react";

interface ButtonProps {
  className?: string;
  text?: string;
  navigateTo: string
}

const Button = ({ className = '', text, navigateTo }: ButtonProps) => {
  return <Link className={(className + ' Button').trim()} to={navigateTo}>{text ? text : 'Button'}</Link>
}

export default Button
