import Navbar from "@/components/Navbar";
import ScrollHero from "@/components/ScrollHero";
import ScrollPinned from "@/components/ScrollPinned";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <ScrollHero />
        <ScrollPinned />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  );
}
