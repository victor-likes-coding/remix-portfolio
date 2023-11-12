import { cssBundleHref } from '@remix-run/css-bundle';
import tailwindStyles from './styles/tailwind.css';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import Navbar from './components/layout/Navbar';
import { NextUIProvider } from '@nextui-org/react';
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },

  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
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
      <body className="text-[#fff] bg-slate-950 h-auto w-screen">
        <NextUIProvider>
          <Navbar />
          <div className="container px-3 min-h-screen h-auto min-w-full bg-transparent">
            <Outlet />
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}
