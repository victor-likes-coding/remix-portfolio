import { cssBundleHref } from "@remix-run/css-bundle";
import rootStyles from './styles/root.css'
import layoutStyles from './styles/layout.css'
import designStyles from './styles/design.css'
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/layout/Navbar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: rootStyles },
    { rel: "stylesheet", href: layoutStyles },
    { rel: "stylesheet", href: designStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
