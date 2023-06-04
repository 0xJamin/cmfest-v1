type StoryblokBlok<T> = {
  component: T;
  _uid: string;
};

type ElementLinkType = StoryblokBlok<"element_link"> & {
  url: string;
  style?: "primary" | "outline" | "secondary";
  type?: "external" | "internal";
  label: string;
};
//Storyblok Layouts
type Header = StoryblokBlok<"layout_header"> & {
  logo: string;
  cta_buttons: ElementLinkType[];
};
type Footer = StoryblokBlok<"layout_footer"> & {
  copyright: string;
  footer_links: ElementLinkType[];
};
//Storyblok Sections
type HeroType = StoryblokBlok<"section_hero"> & {
  label: string;
  heading: string;
  description: string;
  cta_buttons: ElementLinkType[];
};
// Storyblok Templates
type PageTemplate = StoryblokBlok<"page"> & {
  // seo: StoryblokMetaData;
  body: HeroType[];
  layout_header: Header[];
  layout_footer: Footer[];
};
