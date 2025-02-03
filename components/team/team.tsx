import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const team = [
  {
    name: "Dr. Moses",
    role: "Fillings, dental surgery.",
    phone: "0701020304",
    image: "/moses.jpg",
  },
  {
    name: "Nurse Cathy",
    role: "Orthodontic treatment.",
    phone: "0701020304",
    image: "/cathy.jpg",
  },
  {
    name: "Dr. Francis",
    role: "Our Prosthodontist.",
    phone: "0788877374",
    image: "/francis.jpg",
  },
  {
    name: "Nurse Flavia",
    role: "Specialized in dental implants.",
    phone: "0701020304",
    image: "/flavia.png",
  },
  {
    name: "Nurse Najwa",
    role: "Specialized in veneers.",
    phone: "0701020304",
    image: "/najwa.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Professional Dentists at Oasis Dental Clinic
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name}>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl text-blue-800 font-bold mb-2">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <Button variant="outline" className="w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  {member.phone}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
