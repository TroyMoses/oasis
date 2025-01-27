import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Mukiibi Denis",
    role: "Patient",
    content: "I enjoyed your services. I feel no pain now.",
    avatar: "/placeholder.svg",
  },
  {
    name: "Kelly Mbabazi",
    role: "Patient",
    content: "Quality Crowns. I can now smile 😊",
    avatar: "/placeholder.svg",
  },
  {
    name: "Philip Katende",
    role: "Patient",
    content: "Am glad I found you Doctor.",
    avatar: "/placeholder.svg",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-blue-800 font-medium mb-2">CLIENT TESTIMONIALS</p>
          <h2 className="text-3xl text-blue-800 font-bold mb-4">What our clients say about us</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-blue-800">{testimonial.name}</div>
                    <div className="text-sm text-blue-800">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground">
                  {"'"}
                  {testimonial.content}
                  {"'"}
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
