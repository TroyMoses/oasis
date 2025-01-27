import Image from "next/image";
import { Button } from "@/components/ui/button";

const processes = [
  {
    title: "Cosmetic Dentistry",
    description:
      "Dentistry is no longer just a case of filling and taking out teeth. Nowadays many people",
    image: "/banner1.jpg",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Pediatric dentistry is the branch of dentistry dealing with children from birth through adolescence.",
    image: "/banner2.jpg",
  },
  {
    title: "Dental Implants",
    description:
      "If you're missing one or more teeth, you have choices in restorative care. However, dental implants",
    image: "/banner1.jpg",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-blue-800 font-medium mb-2">WORK PROCESS</p>
          <h2 className="text-blue-500 text-3xl font-bold">
            We Complete Every Step Carefully
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="text-center">
              <div className="relative h-48 mb-6">
                <Image
                  src={process.image || "/placeholder.svg"}
                  alt={process.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl text-blue-900 font-semibold mb-2">{process.title}</h3>
              <p className="text-muted-foreground mb-4">
                {process.description}
              </p>
              <Button variant="default" className="bg-blue-500">Read More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
