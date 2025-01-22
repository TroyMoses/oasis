import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import About from "@/components/home/about";
import WhyChoose from "@/components/home/why-choose";
import Team from "@/components/home/team";
import Navbar from "@/components/home/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <WhyChoose />
      <Team />
    </main>
  );
}
