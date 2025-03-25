import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const team = [
  {
    name: "Dr. Moses",
    role: "Prosthodontist",
    phone: "0752136615",
    // image: "/moses.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2a8bc00399ed1810f/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    name: "Dr. Francis",
    role: "Dentist",
    phone: "0752136615",
    // image: "/francis.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2a8a50007081dd760/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    name: "Dr. Daniel",
    role: "Endodontist",
    phone: "0752136615",
    // image: "/daniel_endodontist.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2a9e60007805e4d58/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    name: "Dr. Innocent",
    role: "Hygienist",
    phone: "0752136615",
    // image: "/innocent_hygienist.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2a8b000158d1818bd/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    name: "Nurse Cathy",
    role: "Whitening and Scaling",
    phone: "0776295077",
    // image: "/cathy.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2a87a001a1e5f18ea/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    name: "Nurse Flavia",
    role: "Dental implants",
    phone: "0752136615",
    // image: "/flavia.png",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2a88d002107ee9cc3/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    name: "Nurse Najwa",
    role: "Receptionist",
    phone: "0776295077",
    // image: "/najwa.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2a8c6000c9207dad0/view?project=67e2a223000b0eb6c75c&mode=admin",
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
