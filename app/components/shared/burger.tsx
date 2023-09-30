interface IBurgerProps {
  className?: string;
}

const Burger = ({ className = '',...props }: IBurgerProps) => {
  return (
    <div className={(className + ' Burger').trimStart()} {...props}>
      <div className="burger-line" />
      <div className="burger-line" />
      <div className="burger-line" />
    </div>
  )
}

export default Burger