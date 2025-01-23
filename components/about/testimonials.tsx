import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, CheckCircle, Clock } from "lucide-react"

const stats = [
  {
    icon: Award,
    value: "2",
    label: "Awards Win",
  },
  {
    icon: Heart,
    value: "360+",
    label: "Happy Customers",
  },
  {
    icon: CheckCircle,
    value: "100%",
    label: "Satisfaction",
  },
  {
    icon: Clock,
    value: "6+",
    label: "Years of experience",
  },
]

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
]

export default function Testimonials() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-primary text-white rounded-lg p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-2" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">CLIENT TESTIMONIALS</p>
          <h2 className="text-3xl font-bold mb-4">What our clients say</h2>
          <p className="text-muted-foreground">What Clients say about Dental Solutions Kampala.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{"'"}{testimonial.content}{"'"}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

