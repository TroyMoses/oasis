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
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">CLIENT TESTIMONIALS</p>
          <h2 className="text-3xl font-bold mb-4">What our clients say</h2>
          <p className="text-muted-foreground">
            What Clients say about Dental Solutions Kampala.
          </p>
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
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
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
