import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Dental fillings/Cementing",
    description:
      "Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particles. They are cemented onto the existing teeth using a bonding agent. Cosmetic fillings can improve the appearance of your smile. Unlike silver-colored",
    image: "/banner1.jpg",
  },
  {
    title: "Dental Crowns / Bridges",
    description:
      "A dental crown or cap is a type of tooth restoration that completely cover or encircles a damaged, decayed, discolored or misshapen tooth or dental implant",
    image: "/banner2.jpg",
  },
  {
    title: "Teeth Cleaning",
    description:
      "You should visit the dentist every six months for teeth cleanings. Tartar is a hard buildup of plaque that forms on the teeth. Tartar forms below and above the gum line. The only way to remove tartar is to see a dentist for a professional teeth cleaning. Regular tooth cleanings are important to",
    image: "/banner1.jpg",
  },
];

export default function DetailedServices() {
  return (
    <section className="py-16 bg-slate-50 px-10">
      <div className="container w-full md:w-[1200px]">
        <div className="grid gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button>Read More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
