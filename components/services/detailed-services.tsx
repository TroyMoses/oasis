import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Dental Examination",
    description:
      "Cosmetic fillings, or tooth- colored fillings, are made of composite resin and glass particles. They are cemented onto the existing teeth using a bonding agent. Cosmetic fillings can improve the appearance of your smile. Unlike silver-colored",
    image: "/2.jpg",
  },
  {
    title: "Extraction, Automatic Restoration",
    description:
      "A dental crown or cap is a type of tooth restoration that completely cover or encircles a damaged, decayed, discolored or misshapen tooth or dental implant",
    image: "/examination.jpg",
  },
  {
    title: "Teeth Whitening",
    description:
      "You should visit the dentist every six months for teeth cleanings. Tartar is a hard buildup of plaque that forms on the teeth. Tartar forms below and above the gum line. The only way to remove tartar is to see a dentist for a professional teeth cleaning. Regular tooth cleanings are important to",
    image: "/Whitening.png",
  },
  {
    title: "Scaling and Washing",
    description:
      "You should visit the dentist every six months for teeth cleanings. Tartar is a hard buildup of plaque that forms on the teeth. Tartar forms below and above the gum line. The only way to remove tartar is to see a dentist for a professional teeth cleaning. Regular tooth cleanings are important to",
    image: "/1.jpg",
  },
  {
    title: "Filling",
    description:
      "You should visit the dentist every six months for teeth cleanings. Tartar is a hard buildup of plaque that forms on the teeth. Tartar forms below and above the gum line. The only way to remove tartar is to see a dentist for a professional teeth cleaning. Regular tooth cleanings are important to",
    image: "/4.jpg",
  },
];

export default function DetailedServices() {
  return (
    <section className="pt-10 pb-16 bg-slate-50 px-10">
      <div className="container w-full md:w-[1200px]">
      <h2 className="text-4xl text-blue-500 font-bold text-center mb-12">Services At Oasis Dental Clinic</h2>
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
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl text-blue-800 font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button variant="default" className="bg-blue-800">Read More</Button>
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
