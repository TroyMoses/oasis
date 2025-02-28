import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "/icons/examination.png",
    title: "Dental Examination",
    description:
      "Looking for orthordontic experts in Kampala for teeth alignment? Consider Oasis dental clinic near you. Dental braces are a popular treatment option for straightening teeth and correcting misalignment. Book an appointment with our",
  },
  {
    icon: "/icons/scaling.png",
    title: "Scaling and Washing",
    description:
      "Looking for a dental crown and bridge work services near me in Kampala uganda? look no further than Oasis dental clinic,we provide expert dental crowns and bridge procedures to restore your",
  },
  {
    icon: "/icons/whitening.png",
    title: "Teeth Whitening",
    description:
      "Looking for teeth whitening services in Kampala? Visit our dental clinic and let our expert dentists brighten your smile. We offer the best teeth whitening services to give you a dazzling smile. Find a dentist near you and",
  },
  {
    icon: "/icons/filling.png",
    title: "Fillings",
    description:
      "Looking for teeth whitening services in Kampala? Visit our dental clinic and let our expert dentists brighten your smile. We offer the best teeth whitening services to give you a dazzling smile. Find a dentist near you and",
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
