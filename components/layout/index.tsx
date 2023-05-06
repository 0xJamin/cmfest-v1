import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
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
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
