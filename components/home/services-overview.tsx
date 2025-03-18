import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "/icons/examination.png",
    title: "Dental Examination",
    description:
      "Take the first step towards a healthier, happier smile with our comprehensive dental examination. Our thorough dental examination is designed to assess the overall health of your teeth, gums, and mouth. Our experienced dentists will carefully evaluate your oral health, identifying any potential issues or concerns.",
  },
  {
    icon: "/icons/scaling.png",
    title: "Scaling and Washing",
    description:
      "Maintain a healthy, radiant smile with our professional scaling and washing service. Our scaling and washing treatment is a thorough deep cleaning process that removes plaque, tartar, and stains from your teeth, both above and below the gum line. This essential dental care service helps prevent gum disease, promotes healthy gums, and leaves your mouth feeling fresh and clean.",
  },
  {
    icon: "/icons/whitening.png",
    title: "Teeth Whitening",
    description:
      "Our teeth whitening treatment is designed to safely and effectively remove stains and discoloration from your teeth, leaving you with a whiter, more confident smile. Our experienced dentists use the latest technology and high-quality whitening agents to ensure optimal results.",
  },
  {
    icon: "/icons/filling.png",
    title: "Fillings",
    description:
      "Restore your smile with our dental filling service, designed to repair and protect your teeth. Our dental filling treatment is a quick and effective way to repair teeth damaged by decay, cracks, or fractures. Our experienced dentists use high-quality materials to fill the affected area, restoring the natural shape and function of your tooth.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-blue-800 font-bold">
            Oasis Dental Clinic Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-2 pb-6">
                <div className="text-center md:text-left">
                  <div className="flex md:block justify-center items-center text-center">
                    <Image width={48} height={48} alt={service.title} className="h-[52px] w-[52px] mb-2" src={service.icon}/>
                  </div>
                  <h3 className="text-xl text-blue-800 font-bold mb-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 line-clamp-4">
                  {service.description}
                </p>
                <Link href="/services">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services">
            <Button variant="default" className="bg-blue-800">
              Explore More Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
