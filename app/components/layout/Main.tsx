import Image from "../shared/image";
import Introduction from "./Introduction";
import Links from "./Links";
import gif from "../../assets/jujutsu-kaisen-gojo-satoru.gif";

interface IMainProps {
  className?: string;
}

const Main = ({ className = "" }: IMainProps) => {
  return (
    <div className={(className + " Main").trimStart()}>
      <Image src={gif} alt="Gojo" />
      <Introduction introText="Frontend | Backend | Fullstack">
        <header className="mb-2">
          <h1 className="font-bold flex flex-col">
            <span className="line-through text-black text-xs">Gojo Satoru</span>{" "}
            <span className="text-xl">Victor Tran</span>
          </h1>
        </header>
      </Introduction>
      <Links />
    </div>
  );
};

export default Main;
