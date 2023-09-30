import Image from "../shared/image";
import Introduction from "./Introduction";
import Links from "./Links";
import gif from '../../assets/jujutsu-kaisen-gojo-satoru.gif'


interface IMainProps {
  className?: string;
}

const Main = ({className=''}: IMainProps) => {
  return (
    <div className={(className + ' Main').trimStart()}>
      <Image src={gif} alt='Gojo' />
      <Introduction introText='Frontend | Backend | Fullstack'>
      <header>
        <h1><span className="strike black">Gojo Satoru</span> <br />Victor Tran</h1>
      </header>
      </Introduction>
      <Links />
    </div>
  )
}

export default Main;