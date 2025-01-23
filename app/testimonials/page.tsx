import Hero from "@/components/testimonials/hero";
import ClientTestimonials from "@/components/testimonials/client-testimonials";
import BeforeAfter from "@/components/testimonials/before-after";
import FAQ from "@/components/testimonials/faq";

export default function TestimonialsPage() {
  return (
    <main>
      <Hero />
      <ClientTestimonials />
      <BeforeAfter />
      <FAQ />
    </main>
  );
}
