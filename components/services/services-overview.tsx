import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SmileIcon as Tooth, FileText, Crown, Microscope } from "lucide-react"

const services = [
  {
    icon: Tooth,
    title: "Dental Braces",
    description:
      "Looking for orthordontic experts in Kampala for teeth alignment? Consider a dental solutions kampala clinic near you. Dental braces are a popular treatment option for straightening teeth and correcting misalignment. Book an appointment with our",
  },
  {
    icon: FileText,
    title: "Root Canal Treatment",
    description:
      "Looking for root canal treatment/endodontic specialist in kampala uganda to save your badly damaged tooth? Book an appointment at Dental Solutions Kampala for expert care. We take careful procedures to repair and save your tooth, instead",
  },
  {
    icon: Crown,
    title: "Dental Crowns",
    description:
      "Looking for a dental crown and bridge work services near me in Kampala uganda? look no further than Dental solutions Kampala,we provide expert dental crowns and bridge procedures to restore your",
  },
  {
    icon: Microscope,
    title: "Teeth Whitening",
    description:
      "Looking for teeth whitening services in Kampala? Visit our dental clinic and let our expert dentists brighten your smile. We offer the best teeth whitening services to give you a dazzling smile. Find a dentist near you and",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Dental Solutions services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-4">{service.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

