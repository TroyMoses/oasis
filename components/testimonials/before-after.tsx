import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const cases = [
  {
    title: "Primecare Cleaning",
    image: "/banner2.jpg",
  },
  {
    title: "Primecare ortho",
    image: "/banner1.jpg",
  },
  {
    title: "Primecare braces",
    image: "/banner2.jpg",
  },
  {
    title: "Primecare ortho",
    image: "/banner1.jpg",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <p className="text-muted-foreground">
            Take a look at our work before and after.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-primary text-white text-center">
                  {item.title}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
