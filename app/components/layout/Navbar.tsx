import Burger from "../shared/burger";

interface INavbarProps {
  className?: string;
}

const Navbar = ({className = ''}: INavbarProps) => {
  return (
    <nav className={(className + ' Navbar').trimStart()}>
      <Burger />
    </nav>
  )
}

export default Navbar;