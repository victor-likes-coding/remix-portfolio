import Introduction from '~/components/layout/Introduction';
import lucy from '../assets/lucy.jpeg';
import Image from '~/components/shared/image';

export default function Pet() {
  return (
    <section className="Pet">
      <Image
        replaceCss={true}
        src={lucy}
        alt="Lucy my dog"
        className="md:w-1/2 my-4 mx-auto lg:w-1/3"
      />
      <Introduction>
        <header className="font-bold text-center border-b">
          <h2 className="text-xl">Lucy</h2>
          <p className="mb-2">My "why" on becoming an SWE</p>
        </header>
      </Introduction>
      <section className="pet-life flex flex-col gap-2 pb-3 md:w-3/4 mx-auto text-center md:pb-6 lg:w-1/2">
        <section className="early-life gap-4 flex flex-col">
          <h3 className="font-bold text-center">Early Life</h3>
          <p>
            Lucy was born on or around May 13<sup>th</sup> of 2019. I adopted
            her from the Concow mountains back in August 13<sup>th</sup>, 2019
            while I was working as a Task Force Leader for a disaster relief
            company.
          </p>

          <p>
            Lucy was naturally potty trained to begin with as she was a mountain
            dog. She's really enjoying her lackadaisical life as an indoor dog,
            but she does enjoy company of other animals. She's also very social
            with humans and loves to greet anyone and everyone.
          </p>
        </section>

        <section className="mid-life flex flex-col gap-4">
          <h3 className="font-bold text-center">Mid Life</h3>
          <p>
            Lucy has been with me for {new Date().getFullYear() - 2019} years.
            In 2023, I've been home nearly the whole year, and she's definitely
            loving it as opposed to traveling around the bible belt doing
            disaster relief clean up work. This might be the sign where I go and
            get a remote job in the software engineering industry so that I can
            be home with her.
          </p>

          <p>
            As of 2023 I'm working towards getting a SWE job that will allow me
            to eventually purchase a big home with a backyard for her and adopt
            a brother/sister for her.
          </p>
        </section>
      </section>
    </section>
  );
}
