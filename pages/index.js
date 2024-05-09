import Image from "next/image";
import { Inter } from "next/font/google";
import MainPage from "@/components/MainPage";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Facts from "@/components/Facts";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavBar />
      <MainPage />
      <About />
      <Projects />
      <Facts />
      <Footer />
    </>
  );
}
