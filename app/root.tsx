import { Links, Outlet, Scripts, ScrollRestoration } from "react-router";
import stylesheet from "~/tailwind.css?url";
import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = () => {
  return <Outlet />;
};

export default App;
