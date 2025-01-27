import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SmileIcon as Tooth, Crown, Microscope } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Tooth,
    title: "Dental Examination",
    description:
      "Looking for orthordontic experts in Kampala for teeth alignment? Consider a dental solutions kampala clinic near you. Dental braces are a popular treatment option for straightening teeth and correcting misalignment. Book an appointment with our",
  },
  {
    icon: Crown,
    title: "Scaling and Washing",
    description:
      "Looking for a dental crown and bridge work services near me in Kampala uganda? look no further than Dental solutions Kampala,we provide expert dental crowns and bridge procedures to restore your",
  },
  {
    icon: Microscope,
    title: "Teeth Whitening",
    description:
      "Looking for teeth whitening services in Kampala? Visit our dental clinic and let our expert dentists brighten your smile. We offer the best teeth whitening services to give you a dazzling smile. Find a dentist near you and",
  },
  {
    icon: Microscope,
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
            Dental Solutions Services
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center md:text-left">
                  <div className="flex md:block justify-center items-center text-center">
                    <service.icon className="h-12 w-12 text-blue-800 mb-4" />
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
