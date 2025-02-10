import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

const team = [
  {
    name: "Dr. Moses",
    role: "Prothodontist",
    phone: "0752136615",
    image: "/moses.jpg",
  },
  {
    name: "Nurse Cathy",
    role: "Whitening and Scaling",
    phone: "0776295077",
    image: "/cathy.jpg",
  },
  {
    name: "Dr. Francis",
    role: "Dentist",
    phone: "0752136615",
    image: "/francis.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Professional Dentists at Oasis Dental Clinic
        </h2>
        <div className="grid md:grid-cols-3 gap-8 w-full px-5 md:px-20">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                {member.phone}
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/team">
            <Button variant="default" className="bg-blue-800">
              See More Doctors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
