import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const cases = [
  {
    title: "Primecare Filling",
    // image: "/before-after/5.png",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2cb6f0037eae4147d/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    title: "Primecare Whitening",
    // image: "/before-after/4.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2cb63000c940bb8eb/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    title: "Primecare Cleaning",
    // image: "/before-after/1.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2cb4b00320c7bd12b/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    title: "Primecare Ortho",
    // image: "/before-after/2.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2cb570034f8cf1114/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-16 px-10 bg-slate-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-blue-800 font-bold mb-4">Testimonials</h2>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
