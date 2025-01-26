import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const team = [
  {
    name: "Ms. Jane Doe",
    role: "Fillings, dental surgery, orthodontic treatment, root canals, teeth whitening, teeth cleaning, teeth extraction etc",
    phone: "0794812050",
    image: "/doc1.jpg",
  },
  {
    name: "Mr.John Doe",
    role: "Fillings, dental surgery, orthodontic treatment, root canals, teeth whitening, teeth cleaning, teeth extraction etc",
    phone: "0707836946",
    image: "/doc2.jpg",
  },
  {
    name: "Dentist Doe",
    role: "Our Prosthodontist. Specialized in teeth replacement, dental implants, veneers, dentures, crowns and bridges etc",
    phone: "0788877374",
    image: "/doc3.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
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
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
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
