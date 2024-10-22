import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import LatestProjects from "@/components/LatestProjects";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <LatestProjects/>
      <ContactSection/>
    </main>
  );
}
