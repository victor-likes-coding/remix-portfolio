import type { LinksFunction } from '@remix-run/node'
import Introduction from '~/components/layout/Introduction'
import lucy from '../assets/lucy.jpeg'
import Image from '~/components/shared/image'

export const links: LinksFunction = () => {
  return []
}

export default function Pet() {
  return (
    <section className="Pet">
      <Image src={lucy} alt="Lucy my dog" />
      <Introduction introText="My adorable sweet little puppy">
        <header>
          <h2>Lucy</h2>
        </header>
      </Introduction>
      <section className="pet-life">
        <section className="early-life">
          <h3>Early Life</h3>

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

        <section className="mid-life">
          <h3>Mid Life</h3>
          <p>
            Lucy has been with me for {new Date().getFullYear() - 2019} years.
            This year, 2023, I've been home nearly the whole year, and she's
            definitely loving it as opposed to traveling around the bible belt
            doing disaster relief clean up work. This might be the sign where I
            go and get a remote job in the software engineering industry so that
            I can be home with her.
          </p>
        </section>
      </section>
    </section>
  )
}
