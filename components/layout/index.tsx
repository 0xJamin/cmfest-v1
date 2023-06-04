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
    description: "CMFest website for the festival",
    url: "",
    image: "",
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
