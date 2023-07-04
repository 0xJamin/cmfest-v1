import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";
import Head from "next/head";

type LayoutProps = {
  header: Header;
  footer: Footer;
  children: React.ReactNode;
};
export default function Layout({ header, children, footer }: LayoutProps) {
  const seo = {
    title: "CMFest Africa 23",
    description:
      "A festival for African community leaders, managers, and everyone in between to come together to learn, network, and have conversations around building sustainable communities.   ",
    url: "",
    image: "https://a.storyblok.com/f/228685/1682x880/7926e7cfa8/banner.png",
    ogType: "",
  };
  return (
    <>
      <Head>
        <Seo seo={seo} />
      </Head>
      <Header {...header} />
      <main>{children}</main>
      <Footer {...footer} />
    </>
  );
}
