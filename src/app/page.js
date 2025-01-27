import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Preview from "@/components/Preview";
import Stats from "@/components/Stats";
import Image from "next/image";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <Preview/>
      <Stats/>
      <Footer/>
    </>
  );
}
