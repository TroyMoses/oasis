import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/Implants.png"
            alt="Dental procedure"
            width={600}
            height={400}
            className="rounded-lg md:h-[380px] w-[550px] ml-5 md:ml-10"
          />
          <div className="pl-6">
            <h2 className="text-3xl text-blue-800 font-bold mb-6">
              About Oasis Dental Clinic
            </h2>
            <p className="text-muted-foreground mb-6">
              Experience the future of dental care at Oasis Dental Clinic. With
              5 years of innovation and excellence, our team, led by Dr. Moses,
              is passionate about harnessing the latest technologies and
              techniques to deliver unparalled results and an exceptional
              patient experience. Step into Oasis Dental Clinic and discover a
              world of cutting-edge dental care and health.
            </p>
            {/* Link button to the about page */}
            <div className="text-center md:text-left">
              <Link href="/about">
                <Button className="mt-2 md:mt-5 bg-blue-800">
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
