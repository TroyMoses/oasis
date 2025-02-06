"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import { Button } from "../ui/button";

const banners = [
  {
    id: 1,
    image: "/banner.jpg",
    alt: "Confident smile",
    title: "Your Beautiful Smile Starts Here",
    subtitle: "Experience world-class dental care with our expert team",
    cta: "Schedule Your Visit Today",
  },
  {
    id: 2,
    image: "/banner11.jpg",
    alt: "Orthodontic treatment",
    title: "Transform Your Smile Today",
    subtitle: "Advanced orthodontic solutions for a confident future",
    cta: "Start Your Journey",
  },
];

export default function Hero() {
  return (
    <section className="w-full">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="p-1">
                <Card className="border-0 relative overflow-hidden">
                  <div className="relative h-[400px] text-center md:text-left w-full object-cover md:h-[460px]">
                    <Image
                      src={banner.image || "/placeholder.svg"}
                      alt={banner.alt}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40" />

                    {/* Content overlay */}
                    <div className="md:ml-10 absolute inset-0 flex items-center">
                      <div className="container">
                        <div className="max-w-[700px] text-white space-y-6">
                          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            {banner.title}
                          </h1>
                          <p className="text-xl md:text-2xl opacity-90">
                            {banner.subtitle}
                          </p>
                          <div className="pt-4">
                            <Link href="/booking" className="text-sm font-bold">
                              <Button className="bg-blue-800">
                                {banner.cta}
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
