import { MapPin, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    details: ["Makerere Kavule"],
  },
  {
    icon: Phone,
    title: "Our Phone",
    details: ["Office Phone: +256 752 136615", "Mobile: +256 776 295077"],
  },
  {
    icon: Mail,
    title: "Our Email",
    details: ["Main Email: oasisdentalspa256@gmail.com"],
  },
];

export default function ContactInfo() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-blue-800 font-medium mb-2">GET IN TOUCH</p>
          <h2 className="text-3xl text-blue-800 font-bold">For All Your dental Needs</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl text-blue-800 font-bold mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
