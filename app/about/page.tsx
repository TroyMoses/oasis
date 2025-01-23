import Hero from "@/components/about/hero"
import WhatWeDo from "@/components/about/what-we-do"
import Services from "@/components/about/services"
import WorkProcess from "@/components/about/work-process"
import Testimonials from "@/components/about/testimonials"

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Services />
      <WorkProcess />
      <Testimonials />
    </main>
  )
}

