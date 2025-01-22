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

const banners = [
  {
    id: 1,
    image: "/banner1.jpg",
    alt: "banner 1",
  },
  {
    id: 2,
    image: "/banner2.jpg",
    alt: "banner 2",
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
                <Card className="border-0">
                  <Image
                    src={banner.image || "/placeholder.svg"}
                    alt={banner.alt}
                    width={1920}
                    height={600}
                    className="w-full object-cover h-[460px]"
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
