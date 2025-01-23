import Hero from "@/components/testimonials/hero";
import Stats from "@/components/testimonials/stats";
import ClientTestimonials from "@/components/testimonials/client-testimonials";
import BeforeAfter from "@/components/testimonials/before-after";
import FAQ from "@/components/testimonials/faq";

export default function TestimonialsPage() {
  return (
    <main>
      <Hero />
      <Stats />
      <ClientTestimonials />
      <BeforeAfter />
      <FAQ />
    </main>
  );
}
