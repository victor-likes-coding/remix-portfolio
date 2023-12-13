import { Link } from '@remix-run/react';
import Introduction from '~/components/layout/Introduction';
import Button from '~/components/shared/button';

export default function About() {
  return (
    <section className="About">
      <Introduction>
        <header className="font-bold text-center border-b pb-3">
          <h2 className="text-2xl">Hey there 👋</h2>
        </header>
      </Introduction>
      <section className="about-life flex flex-col pb-2 md:w-3/4 md:mx-auto md:text-justify lg:w-1/2">
        <section className="gap-6 mt-3 flex flex-col text-center text-md md:text-lg">
          <p>
            I'm Victor! Nice to meet ya. I'm a{' '}
            {
              // these are in ms so to get years we divide by 1000 to get seconds
              Math.floor(
                (new Date().getTime() - new Date('11-13-1994').getTime()) /
                  (1000 * 60 * 60 * 24 * 365),
              )
            }{' '}
            years old aspiring software developer. I was born right here in the
            U.S. and have been coding mostly in JS for the better part of 6
            years (more or less). I recently picked up TypeScript a couple years
            ago and have been loving it ever since. I'm a gamer when I'm not
            writing code.
          </p>

          <p>
            I do enjoy a good binge of anime or some tv show. I really enjoy
            Isekai animes. I don't really like social media except for TikTok
            and it's mostly to consume social media not make content.
          </p>

          <p>
            I have a pet named{' '}
            <span className="text-blue-700 cursor-pointer font-bold">
              <Link to="/pet">Lucy</Link>
            </span>
            , who is my sweet furbaby and the reason I've dedicated myself to
            wanting to get a job in SWE. It's to be able to get her a big house
            and a brother/sister companion. I've sort of been slacking trying to
            get a job in this field for a while now, but I'm fairly confident
            that I'll be able to land one soon.
          </p>

          <p>
            If you're reading this and you think I'm the guy for that SWE job,
            please don't hesitate to send me an{' '}
            <span className="text-blue-700 cursor-pointer font-bold">
              <a href="mailto:victor.tran@tempestas.io">email</a> {` `}
            </span>
            about it. You can also check out my socials page to see where else I
            can be reached at.
          </p>

          <Button navigateTo="/contact" text="Socials" />
        </section>
      </section>
    </section>
  );
}
