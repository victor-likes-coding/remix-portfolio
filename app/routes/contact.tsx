import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { SocialIcon } from 'react-social-icons';

const profiles = [
  {
    network: 'github',
    href: 'https://github.com/victor-likes-coding',
    handle: '@victor-likes-coding',
  },
  {
    network: 'email',
    href: 'mailto:victor.tran@tempestas.io',
    handle: 'victor.tran@tempestas.io',
  },
];

export default function Portfolio() {
  return (
    <section className="Socials max-h-full overflow-y-scroll">
      <div className="card-container mt-6 grid gap-6 md:w-3/4 mx-auto lg:w-1/2">
        {profiles.map(({ handle, ...profileProps }) => (
          <Card
            key={handle}
            className="max-w-full bg-slate-900 border border-blue-500  text-[#fff] rounded relative overflow-visible">
            <div className="icon-wrapper w-full absolute top-0 left-0 z-20 grid place-items-center">
              <SocialIcon
                {...profileProps}
                bgColor="rgb(2, 6, 23)"
                className="relative -top-4 left-0 h-2 w-2 bg-slate-950 border-blue-500 rounded-full border-1"
              />
            </div>
            <CardHeader className="text-transparent">{handle}</CardHeader>
            <Divider className="bg-blue-500" />
            <CardBody className="py-3 text-center">
              <a target="_blank" rel="noreferrer" href={profileProps.href}>
                {handle}
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
