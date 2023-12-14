import Image from '../shared/image';
import Introduction from './Introduction';
import Links from './Links';
import gif from '../../assets/jujutsu-kaisen-gojo-satoru.gif';

interface IMainProps {
  className?: string;
}

const Main = ({ className = '' }: IMainProps) => {
  return (
    <div
      className={(
        className + ' Main md:h-without-navbar md:pt-40 lg:pt-60'
      ).trimStart()}>
      <Image src={gif} alt="Gojo" hideable={true} />
      <Introduction introText="Frontend | Backend | Fullstack">
        <header className="mb-2 md:w-1/2 md:mx-auto">
          <h1 className="font-bold flex flex-col">
            <span className="line-through text-blue-500 text-xs md:hidden">
              Gojo Satoru
            </span>
            <span className="text-xl md:text-4xl">Victor Tran</span>
          </h1>
        </header>
      </Introduction>
      <Links />
    </div>
  );
};

export default Main;
