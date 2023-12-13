import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';
import { SocialIcon } from 'react-social-icons';

export default function Portfolio() {
  return (
    <section className="Socials max-h-full overflow-y-scroll">
      <div className="card-container mt-6 grid gap-6 md:w-3/4 mx-auto">
        <Card
          className="max-w-full bg-slate-900 border border-blue-500  text-[#fff] rounded relative overflow-visible"
          isBlurred>
          <div className="icon-wrapper w-full absolute top-0 left-0 z-20 grid place-items-center">
            <SocialIcon
              network="github"
              bgColor="rgb(2, 6, 23)"
              href="https://github.com/victor-likes-coding"
              className="relative -top-4 left-0 h-2 w-2 bg-slate-950 border-blue-500 rounded-full border-1"
            />
          </div>
          <CardHeader className="text-transparent">
            @victor-likes-coding
          </CardHeader>
          <Divider className="bg-blue-500" />
          <CardBody className="py-3 text-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/victor-likes-coding">
              @victor-likes-coding
            </a>
          </CardBody>
        </Card>

        <Card
          className="max-w-full bg-slate-900 border border-blue-500  text-[#fff] rounded relative overflow-visible"
          isBlurred>
          <div className="icon-wrapper w-full absolute top-0 left-0 z-20 grid place-items-center">
            <SocialIcon
              network="email"
              bgColor="rgb(2, 6, 23)"
              href="https://github.com/victor-likes-coding"
              className="relative -top-4 left-0 h-2 w-2 bg-slate-950 border-blue-500 rounded-full border-1"
            />
          </div>
          <CardHeader className="text-transparent">
            victor.tran@tempestas.io
          </CardHeader>
          <Divider className="bg-blue-500" />
          <CardBody className="py-3 text-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:https://github.com/victor-likes-coding">
              victor.tran@tempestas.io
            </a>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
