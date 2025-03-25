import Image from "next/image";

const processes = [
  {
    title: "Cosmetic Dentistry",
    description:
      "Dentistry is no longer just a case of filling and taking out teeth. Nowadays many people. Dentistry is no longer just a case of filling and taking out teeth. Nowadays many people.",
    // image: "/2.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2c64d00367ce1d8d0/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Pediatric dentistry is the branch of dentistry dealing with children from birth through adolescence. Pediatric dentistry is the branch of dentistry dealing with children from birth through adolescence.",
    image: "/Whitening.png",
    // image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2c470003200b79e1e/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    title: "Dental Implants",
    description:
      "If you're missing one or more teeth, you have choices in restorative care. However, dental implants. If you're missing one or more teeth, you have choices in restorative care.",
    // image: "/examination.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2c7e200393317d488/view?project=67e2a223000b0eb6c75c&mode=admin",
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
                  src={process.image}
                  alt={process.title}
                  fill
                  className="object-cover w-[400px] rounded-md"
                />
              </div>
              <h3 className="text-xl text-blue-900 font-semibold mb-2">{process.title}</h3>
              <p className="text-muted-foreground mb-4">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
