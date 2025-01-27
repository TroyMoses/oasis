import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import About from "@/components/home/about";
import WhyChoose from "@/components/home/why-choose";
import Team from "@/components/home/team";
import ServicesOverview from "@/components/home/services-overview";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <WhyChoose />
      <ServicesOverview />
      <Team />
    </main>
  );
}
