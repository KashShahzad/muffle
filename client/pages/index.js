import Head from "next/head";
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Muffle: Food Paradise</title>
        <meta
          name="description"
          content="We ship Pakistan's most loved foods nationwide"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      {/* <About />
      <Features />
      <Subscribe /> */}
    </div>
  );
}
