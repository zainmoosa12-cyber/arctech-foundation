type Meta = { name?: string; property?: string; content: string; title?: string };

export function buildMeta(opts: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}) {
  const url = `https://arctechworx.co.za${opts.path ?? ""}`;
  const meta: Meta[] = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
  if (opts.image) {
    meta.push({ property: "og:image", content: opts.image });
    meta.push({ name: "twitter:image", content: opts.image });
  }
  return {
    meta,
    links: [{ rel: "canonical", href: url }],
  };
}
