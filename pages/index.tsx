import Head from "next/head";
import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
  ISbStory,
  ISbStoryParams,
  ISbStoryData,
  storyblokEditable,
} from "@storyblok/react";
import Layout from "../components/layout";

export default function Home({
  story,
}: {
  story: ISbStoryData<PageTemplate> | null;
}) {
  story = useStoryblokState(story);
  const {
    content: { body, layout_header, layout_footer },
  } = story!;

  const layoutProps = {
    header: layout_header[0],
    footer: layout_footer[0],
  };
  return (
    <Layout {...layoutProps}>
      {Array.isArray(body) &&
        body.map((section) => {
          return (
            <div key={section._uid} {...storyblokEditable(section)}>
              <StoryblokComponent blok={section} />
            </div>
          );
        })}
    </Layout>
  );
}

export async function getStaticProps() {
  let slug = "home";
  let sbParams: ISbStoryParams = {
    version: "draft", // or 'published'
  };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
