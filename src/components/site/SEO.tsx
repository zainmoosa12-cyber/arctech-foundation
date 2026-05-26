import { useEffect } from "react";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMeta(opts: MetaInput) {
  return opts;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO(opts: MetaInput) {
  useEffect(() => {
    const url = `https://arctechworx.co.za${opts.path ?? ""}`;
    document.title = opts.title;
    setMeta("name", "description", opts.description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", opts.title);
    setMeta("property", "og:description", opts.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", opts.title);
    setMeta("name", "twitter:description", opts.description);
    if (opts.image) {
      setMeta("property", "og:image", opts.image);
      setMeta("name", "twitter:image", opts.image);
    }
    setLink("canonical", url);
  }, [opts.title, opts.description, opts.path, opts.image]);
}
