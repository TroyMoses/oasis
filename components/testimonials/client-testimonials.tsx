"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialDialog } from "./testimonial-dialog";

// const dummyTestimonials = [
//   {
//     name: "Dorah Nanyanzi",
//     role: "Patient",
//     content: "I enjoyed the services, especially the fillings and implants.",
//     avatar: "/testimonials/Dorah_Nanyanzi.png",
//   },
//   {
//     name: "Patrick Rosh",
//     role: "Patient",
//     content: "Quality Braces. I can now smile confidently 😊",
//     avatar: "/testimonials/Patrick_Rosh.png",
//   },
// ];

export default function ClientTestimonials() {
  const testimonials = useQuery(api.testimonials.list) || [];
  const generateUploadUrl = useMutation(api.testimonials.generateUploadUrl);
  const createTestimonial = useMutation(api.testimonials.create);

  const handleTestimonialSubmit = async (data: {
    name: string;
    content: string;
    file: File;
  }) => {
    // Get upload URL from Convex
    const uploadUrl = await generateUploadUrl();

    // Upload the file
    const result = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "Content-Type": data.file.type,
      },
      body: data.file,
    });

    if (!result.ok) {
      throw new Error("Failed to upload image");
    }

    const { storageId } = await result.json();

    // Create the testimonial with the storage ID
    await createTestimonial({
      name: data.name,
      role: "Patient",
      content: data.content,
      storageId,
    });
  };

  return (
    <section className="py-16 px-10">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-blue-800 font-medium mb-2">CLIENT TESTIMONIALS</p>
          <h2 className="text-3xl text-blue-800 font-bold mb-4">
            What our clients say about us
          </h2>
          <div className="mt-6">
            <TestimonialDialog onTestimonialSubmit={handleTestimonialSubmit} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.imageUrl || undefined} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-blue-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-blue-800">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <blockquote className="text-muted-foreground">
                  &quot;{testimonial.content}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
