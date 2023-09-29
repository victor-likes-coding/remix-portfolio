interface INavbarProps {
  className?: string;
}

const Navbar = ({className}: INavbarProps) => {
  return (
    <div className={className + ' Navbar'.trimStart()}></div>
  )
}

export default Navbar;