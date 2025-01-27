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
  "Dentures",
];

export default function WhatWeDo() {
  return (
    <section className="py-16 px-10">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase border-b pb-5">
          About Oasis Dental Clinic
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square bg-slate-100 rounded-lg overflow-hidden">
            <Image
              src="/Whitening.png"
              alt="Best Dental Clinic"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
              <div className="flex items-start gap-4">
                <Award className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Best Dental Clinic</h3>
                  <p className="text-muted-foreground">
                    Best Dental Clinic in Kampala for all your dental needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-6">
              <div>
                <p className="text-primary text-2xl font-medium mb-2">
                  WHAT WE DO
                </p>
                <h2 className="text-3xl font-bold mb-4">
                  True Healthcare For Your Family
                </h2>
              </div>

              <div>
                <ul className="list-disc space-y-4 pl-6">
                  {services.map((service, index) => (
                    <li key={index} className="text-muted-foreground">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-sm">{feature}</span>
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
