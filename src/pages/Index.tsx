import ParticleBackground from "@/components/ui/ParticleBackground";
import Navbar from "@/components/ui/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
