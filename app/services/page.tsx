import Hero from "@/components/services/hero";
import ServicesOverview from "@/components/services/services-overview";
import DetailedServices from "@/components/services/detailed-services";
import Team from "@/components/services/team";

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <DetailedServices />
      <Team />
    </main>
  );
}
