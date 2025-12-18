import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative overflow-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
