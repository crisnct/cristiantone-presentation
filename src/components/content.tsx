import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import { assetUrl } from "../content/site";
import type {
  ContentBlock,
  ContentSection,
  GalleryImage,
  InlineContent,
} from "../content/types";
export function Inline({ content }: { content: InlineContent[] }) {
  return (
    <>
      {content.map((item, i) => {
        let child: React.ReactNode = item.text;
        if (item.strong) child = <strong>{child}</strong>;
        if (item.emphasis) child = <em>{child}</em>;
        return item.href && item.text.trim() ? (
          item.href.startsWith("/") ? (
            <Link key={i} to={item.href}>
              {child}
            </Link>
          ) : (
            <a key={i} href={item.href}>
              {child}
            </a>
          )
        ) : (
          <span key={i}>{child}</span>
        );
      })}
    </>
  );
}
export function Gallery({
  images,
  id,
}: {
  images: GalleryImage[];
  id: string;
}) {
  const [position, setPosition] = useState(0);
  const image = images[position];
  if (!image) return null;
  const move = (delta: number) =>
    setPosition((current) => (current + delta + images.length) % images.length);
  return (
    <section className="gallery" aria-label="Image gallery" id={id}>
      <div className="gallery-stage">
        <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" />
      </div>
      <div className="gallery-controls">
        <button
          type="button"
          aria-label="Previous image"
          onClick={() => move(-1)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              move(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              move(1);
            }
          }}
        >
          ← Previous
        </button>
        <p aria-live="polite">
          {position + 1} / {images.length}
        </p>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => move(1)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              move(-1);
            }
            if (event.key === "ArrowRight") {
              event.preventDefault();
              move(1);
            }
          }}
        >
          Next →
        </button>
      </div>
      <p className="caption">{image.alt}</p>
    </section>
  );
}
export function ImageViewer({
  image,
  title,
}: {
  image: GalleryImage;
  title: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        className="certificate-button"
        onClick={() => dialog.current?.showModal()}
        aria-label={`Enlarge ${title}`}
      >
        <img src={assetUrl(image.src)} alt={image.alt} loading="lazy" />
        <span>View full size ↗</span>
      </button>
      <dialog aria-label={title} ref={dialog} className="image-dialog">
        <div className="dialog-toolbar">
          <h3>{title}</h3>
          <button
            type="button"
            aria-label="Close image"
            onClick={() => dialog.current?.close()}
          >
            Close ×
          </button>
        </div>
        <img src={assetUrl(image.src)} alt={image.alt} />
        <a href={assetUrl(image.src)} download>
          Download image
        </a>
      </dialog>
    </>
  );
}
function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case "disclosure":
      return (
        <details id={block.id}>
          <summary>{block.title}</summary>
          <div className="disclosure-content">
            {block.blocks.map((child, i) => (
              <Block key={i} block={child} />
            ))}
          </div>
        </details>
      );
    case "paragraph":
      return (
        <p>
          <Inline content={block.content} />
        </p>
      );
    case "heading": {
      const Heading = `h${block.level}` as "h2" | "h3" | "h4";
      return (
        <Heading id={block.id}>
          <Inline content={block.content} />
        </Heading>
      );
    }
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List>
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline content={item} />
            </li>
          ))}
        </List>
      );
    }
    case "image":
      return (
        <figure>
          <img
            className="content-image"
            src={assetUrl(block.image.src)}
            alt={block.image.alt}
            loading="lazy"
          />
        </figure>
      );
    case "gallery":
      return <Gallery images={block.images} id={block.id} />;
    case "embed-link":
      return (
        <p>
          <a href={block.href}>▶ {block.title}</a>
        </p>
      );
  }
}
export function ContentSections({ sections }: { sections: ContentSection[] }) {
  const { hash } = useLocation();
  useEffect(() => {
    const reveal = () => {
      const id = decodeURIComponent(hash.slice(1));
      if (!id) return;
      const target = document.getElementById(id);
      const details =
        target?.closest("details") || target?.querySelector("details");
      if (details) details.open = true;
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, [hash]);
  return (
    <>
      {sections.map((section) => (
        <section
          className="content-section card prose"
          key={section.id}
          id={section.id}
        >
          {section.collapsed ? (
            <details>
              <summary>{section.title}</summary>
              <div className="disclosure-content">
                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </details>
          ) : (
            <>
              <h2>{section.title}</h2>
              {section.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </>
          )}
        </section>
      ))}
    </>
  );
}
