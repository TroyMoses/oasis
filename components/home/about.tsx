import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

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
            className="rounded-lg h-[300px] w-[550px] ml-5 md:ml-10"
          />
          <div className="pl-6">
            <h2 className="text-3xl font-bold mb-6">
              About Oasis Dental Clinic
            </h2>
            <p className="text-muted-foreground mb-6">
              Since 2012, we have provided patients with the finest dental
              health treatments in Uganda. Our team of highly skilled
              specialists, consisting of dentists and hygienists are led by Dr.
              in their commitment to excellence. Each of our clinics are
              equipped to provide a complete range of treatments: Including
              general dentistry, state-of-the-art cosmetic dentistry, dental
              implants, prosthetics, children{"'"}s dentistry, veneer placements
              and orthodontics.
            </p>
            {/* Link button to the about page */}
            <Link href="/about">
              <Button className="mt-2 md:mt-5">Explore More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
