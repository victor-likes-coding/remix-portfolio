import type { MetaFunction, LinksFunction } from "@remix-run/node";
import Navbar from "~/components/layout/Navbar";
import styles from '../styles/root.css'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
  ];
};

export default function Index() {
  return (
    <div>
      {/* on top */}
      <Navbar />
    </div>
  );
}
