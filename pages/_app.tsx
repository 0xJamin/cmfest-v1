import "@/styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import type { AppProps } from "next/app";

import Page from "../templates/Pages";
import HeroSection from "../components/sections/HeroSection";
const components = {
  section_hero: HeroSection,
  page: Page,
};
storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components,
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
