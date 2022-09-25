import Head from "next/head";
import About from "../components/About";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Duedale</title>
        <meta name="description" content="E-Commerce Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <About />
      <Features />
      <Subscribe />
    </div>
  );
}
