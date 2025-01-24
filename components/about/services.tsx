"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  SmileIcon as Tooth,
  FileText,
  Smile,
  Stethoscope,
  Microscope,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "tooth-extraction",
    icon: Tooth,
    title: "Tooth Extraction",
    description:
      "Tooth extraction is the removal of a tooth from its socket in the bone. When a tooth is damaged by decay or broken, our dentist will try to fix it with a filling, crown or other treatment. Some times though, there is too much damage for the tooth to be repaired. In such case, the tooth may require extraction.",
    stats: [
      { label: "Dental Perfection", value: 99 },
      { label: "Dental Solution", value: 100 },
      { label: "Durability", value: 100 },
    ],
  },
  {
    id: "pediatric-dentistry",
    icon: FileText,
    title: "Pediatric Dentistry",
    description:
      "Pediatric dentistry is the branch of dentistry dealing with children from birth through adolescence.",
    stats: [
      { label: "Dental Perfection", value: 80 },
      { label: "Dental Solution", value: 82 },
      { label: "Durability", value: 90 },
    ],
  },
  {
    id: "teeth-whitening",
    icon: Smile,
    title: "Teeth Whitening",
    description: "Professional teeth whitening treatment for a brighter smile.",
    stats: [
      { label: "Dental Perfection", value: 85 },
      { label: "Dental Solution", value: 80 },
      { label: "Durability", value: 92 },
    ],
  },
  {
    id: "dental-services",
    icon: Stethoscope,
    title: "Dental Services",
    description:
      "Comprehensive dental services for all your oral health needs.",
    stats: [
      { label: "Dental Perfection", value: 78 },
      { label: "Dental Solution", value: 90 },
      { label: "Durability", value: 85 },
    ],
  },
  {
    id: "dental-implants",
    icon: Microscope,
    title: "Dental Implants",
    description: "State-of-the-art dental implant solutions.",
    stats: [
      { label: "Dental Perfection", value: 86 },
      { label: "Dental Solution", value: 80 },
      { label: "Durability", value: 100 },
    ],
  },
];

export default function Services() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section className="py-16 bg-slate-50 px-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <Tabs defaultValue={services[0].id} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto p-0 bg-transparent gap-2">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className={`flex flex-col items-center gap-2 p-6 data-[state=active]:bg-primary data-[state=active]:text-white`}
              >
                <service.icon className="h-6 w-6" />
                <span className="text-sm text-center">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8">
                  {service.description}
                </p>

                <div className="space-y-6 w-[400px] md:w-[800px]">
                  {service.stats.map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">
                          {stat.label}
                        </span>
                        <span className="text-sm font-medium">
                          {stat.value}%
                        </span>
                      </div>
                      <Progress value={stat.value} className="h-2" />
                    </div>
                  ))}
                </div>
                <Link href="/booking" className="text-sm font-bold">
                  <Button className="mt-8">Get Appointment</Button>
                </Link>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
