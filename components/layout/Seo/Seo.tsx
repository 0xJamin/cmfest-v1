import Head from "next/head";
import { SEOTypes } from "./types";

export function Seo({ seo }: { seo: SEOTypes }) {
  return (
    <>
      <title>{seo.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url.toString()} />
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="cmfestafrica" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </>
  );
}
