import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Dental Examination",
    description:
      "Take the first step towards a healthier, happier smile with our comprehensive dental examination. Our thorough dental examination is designed to assess the overall health of your teeth, gums, and mouth. Our experienced dentists will carefully evaluate your oral health, identifying any potential issues or concerns.",
    // image: "/2.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2c64d00367ce1d8d0/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    title: "Extraction, Immediate Restoration",
    description:
      "Get back to smiling confidently with our efficient teeth extraction and immediate restoration service.",
    // image: "/examination.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2c7e200393317d488/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    title: "Teeth Whitening",
    description:
      "Our teeth whitening treatment is designed to safely and effectively remove stains and discoloration from your teeth, leaving you with a whiter, more confident smile. Our experienced dentists use the latest technology and high-quality whitening agents to ensure optimal results.",
    image: "/Whitening.png",
    // image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2c470003200b79e1e/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    title: "Scaling and Washing",
    description:
      "Maintain a healthy, radiant smile with our professional scaling and washing service. Our scaling and washing treatment is a thorough deep cleaning process that removes plaque, tartar, and stains from your teeth, both above and below the gum line. This essential dental care service helps prevent gum disease, promotes healthy gums, and leaves your mouth feeling fresh and clean.",
    // image: "/1.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2c922000d5ba0a184/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
  {
    title: "Dental Fillings",
    description:
      "Restore your smile with our dental filling service, designed to repair and protect your teeth. Our dental filling treatment is a quick and effective way to repair teeth damaged by decay, cracks, or fractures. Our experienced dentists use high-quality materials to fill the affected area, restoring the natural shape and function of your tooth.",
    // image: "/4.jpg",
    image: "https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2ca18001ab42e39ec/view?project=67e2a223000b0eb6c75c&mode=admin",
  },
];

export default function DetailedServices() {
  return (
    <section className="pt-10 pb-16 bg-slate-50 px-10">
      <div className="container w-full md:w-[1200px]">
      <h2 className="text-4xl text-blue-500 font-bold text-center mb-12">Services At Oasis Dental Clinic</h2>
        <div className="grid gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="relative h-[300px]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl text-blue-800 font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button variant="default" className="bg-blue-800">Read More</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
