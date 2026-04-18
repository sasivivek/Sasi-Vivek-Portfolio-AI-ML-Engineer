import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Articles from "@/components/portfolio/Articles";
import Education from "@/components/portfolio/Education";
import Languages from "@/components/portfolio/Languages";
import Community from "@/components/portfolio/Community";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Articles />
    <Education />
    <Languages />
    <Community />
    <Contact />
    <Footer />
  </div>
);

export default Index;
