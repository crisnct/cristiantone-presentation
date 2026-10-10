import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "react-router";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "../styles/site.css";
import { SiteLayout } from "../components/layout";
import { branding } from "../content/migrated";
import { assetUrl } from "../content/site";
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={assetUrl(branding.logo)} />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default function App() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
export function ErrorBoundary() {
  const error = useRouteError();
  const missing = isRouteErrorResponse(error) && error.status === 404;
  return (
    <SiteLayout>
      <main id="main-content" className="container section">
        <h1>{missing ? "Page not found" : "Something went wrong"}</h1>
        <p>
          {missing
            ? "This page is unavailable. Please choose a page from the navigation."
            : "Please refresh the page or contact me by email."}
        </p>
      </main>
    </SiteLayout>
  );
}
