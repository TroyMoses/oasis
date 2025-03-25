import { Award, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  "Latest Dental Technology",
  "Emergency Dental Care",
  "Trusted in Dental Services",
  "100% Satisfaction guaranteed",
];

const services = [
  "Preventative care",
  "Extractions",
  "Fillings",
  "Dental surgery",
  "Orthodontic treatment",
  "Root canals",
  "Dental implants",
  "Teeth whitening",
  "Veneers",
];

export default function WhatWeDo() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        <h2 className="text-4xl text-blue-500 font-bold text-center mb-12 border-b pb-5">
          About Oasis Dental Clinic
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square bg-slate-100 rounded-lg overflow-hidden">
            <Image
              // src="/afande.jpg"
              src="https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2c6ac003b30aad364/view?project=67e2a223000b0eb6c75c&mode=admin"
              alt="Best Dental Clinic"
              fill
              className="object-cover rounded-sm"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
              <div className="flex items-start gap-4">
                <Award className="h-[60px] w-[60px] text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl text-blue-500 font-bold mb-2">Best Dental Clinic</h3>
                  <p className="text-muted-foreground text-lg">
                    Best Dental Clinic in Kampala for all your dental needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <p className="text-blue-800 text-2xl font-medium mb-2">
                  WHAT WE DO
                </p>
                <h2 className="text-3xl text-blue-500 font-bold mb-4">
                  True Healthcare For Your Family
                </h2>
              </div>

              <div>
                <ul className="list-disc space-y-4 pl-6">
                  {services.map((service, index) => (
                    <li key={index} className="text-muted-foreground text-lg">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-500" />
                    <span className="text-sm text-blue-500">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
