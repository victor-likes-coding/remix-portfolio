import type { MetaFunction } from "@remix-run/node";


import Main from "~/components/layout/Main";

export const meta: MetaFunction = () => {
  return [
    { title: "Victor Tran | Portfolio" },
    { name: "description", content: "Victor's personal project portfolio, inspired by JJK" },
  ];
};


export default function Index() {
  return (
      <Main />
  );
}
