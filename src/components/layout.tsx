import { useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { assetUrl, navigation, site } from "../content/site";
import { branding } from "../content/migrated";
import { searchContent } from "../content/search";
export function Hero({
  title,
  subtitle,
  home = false,
}: {
  title: string;
  subtitle?: string;
  home?: boolean;
}) {
  return (
    <div
      className={`hero ${home ? "hero-home" : ""}`}
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(9,22,27,.68),rgba(9,22,27,.50)),url(${assetUrl(branding.background)})`,
      }}
    >
      <div className="container hero-inner">
        {home && (
          <img
            className="portrait"
            src={assetUrl(branding.portrait)}
            alt="Portrait of Cristian Țone"
            fetchPriority="high"
          />
        )}
        <div>
          {!home && <p className="eyebrow">{site.name}</p>}
          <h1>{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          {home && (
            <>
              <p className="hero-statement">{site.statement}</p>
              <div className="actions">
                <Link className="button primary" to="/hire-me">
                  Let’s work together
                </Link>
                <Link className="button light" to="/projects">
                  Explore projects
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
function Search() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const results = searchContent(query);
  return (
    <>
      <button
        type="button"
        className="search-trigger"
        aria-label="Search website"
        onClick={() => dialog.current?.showModal()}
      >
        ⌕<span className="sr-only">Search</span>
      </button>
      <dialog
        aria-label="Search the website"
        className="search-dialog"
        ref={dialog}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            dialog.current?.close();
          }
        }}
      >
        <div className="dialog-toolbar">
          <h2>Search the website</h2>
          <button
            type="button"
            aria-label="Close search"
            onClick={() => dialog.current?.close()}
          >
            Close ×
          </button>
        </div>
        <label htmlFor="site-search">
          Titles, technologies and page content
        </label>
        <input
          id="site-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try Java, leadership or VeriDate"
        />
        <p role="status">
          {query.trim()
            ? `${results.length} result${results.length === 1 ? "" : "s"}`
            : "Enter a word or phrase to search."}
        </p>
        {query.trim() && !results.length && (
          <p>No results found. Try a different word.</p>
        )}
        <ul className="search-results">
          {results.map((result) => (
            <li key={result.id}>
              <Link to={result.href} onClick={() => dialog.current?.close()}>
                <small>{result.page}</small>
                <strong>{result.title}</strong>
                <span>{result.snippet}</span>
              </Link>
            </li>
          ))}
        </ul>
      </dialog>
    </>
  );
}
export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="Cristian Țone home">
            <img src={assetUrl(branding.logo)} alt="" width="42" height="42" />
            <span>Cristian Țone</span>
          </Link>
          <div className="nav-tools">
            <button
              className="menu-toggle"
              type="button"
              aria-expanded={open}
              aria-controls="primary-navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? "Close ×" : "Menu ☰"}
            </button>
            <nav
              id="primary-navigation"
              aria-label="Main navigation"
              className={open ? "navigation open" : "navigation"}
            >
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  end={item.to === "/"}
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <Search />
          </div>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h2>{site.shortName}</h2>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <div className="social-links">
              <a href={site.linkedin}>LinkedIn ↗</a>
              <a href={site.github}>GitHub ↗</a>
            </div>
          </div>
          <img
            src={assetUrl(branding.footer)}
            alt="Cristian Țone at his desk"
            loading="lazy"
          />
          <nav aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="container footer-credit">
          <p>
            Some of the photos on this website were taken by{" "}
            <a href="https://alinholda.com/">Alin Holda</a>, a professional
            photographer based in Timișoara, Romania.
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </footer>
    </>
  );
}
