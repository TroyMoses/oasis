import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const team = [
  {
    name: "Ms. Angel",
    role: "Customer service",
    phone: "0705812050",
    image: "/doc1.jpg",
  },
  {
    name: "Mr.Tayebwa Darius",
    role: "Fillings, Dental surgery, Orthodontic treatment, Root canals,Teeth whitening,Teeth cleaning,Teeth Extraction etc",
    phone: "0709966946",
    image: "/doc2.jpg",
  },
  {
    name: "Dentist Gad",
    role: "Our Prosthodontist.Specialized in teeth replacement,Dental implants,Veneers, Dentures,Crowns and Bridges etc",
    phone: "0788127374",
    image: "/doc3.jpg",
  },
]

export default function Team() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Dentists at Dental solutions Kampala</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-muted-foreground mb-4">{member.role}</p>
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                {member.phone}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

