type StoryblokBlok<T> = {
  component: T;
  _uid: string;
};

//Storyblok Sections
type HeroType = StoryblokBlok<"section_hero"> & {
  heading: string;
  description: string;
};
// Storyblok Templates
type PageTemplate = StoryblokBlok<"page"> & {
  // seo: StoryblokMetaData;
  body: HeroType[];
};
