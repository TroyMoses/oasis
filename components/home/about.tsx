import Image from "next/image"

export default function About() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/about.jpg"
            alt="Dental procedure"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-6">About Dental Solutions Kampala</h2>
            <p className="text-muted-foreground mb-6">
              Since 2012, we have provided patients with the finest dental health treatments in Uganda. Our team of
              highly skilled specialists, consisting of dentists and hygienists are led by Dr. in their commitment to
              excellence. Each of our clinics are equipped to provide a complete range of treatments: Including general
              dentistry, state-of-the-art cosmetic dentistry, dental implants, prosthetics, children{"'"}s dentistry, veneer
              placements and orthodontics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

