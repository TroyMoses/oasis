"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const subjects = [
  "Question",
  "Inquiry",
  "Consultation",
  "Other(Specify in message)",
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    // Reset form or show success message
  }

  return (
    <section className="py-16 bg-slate-50 px-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="h-[600px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d15958.990273909652!2d32.5719775!3d0.341217!3m2!1i1024!2i768!4f13.1!2m1!1soasis%20dental%20clinic!5e0!3m2!1sen!2sug!4v1737671094059!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Have Questions? Get in Touch!</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we{"'"}ll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    Full Name<span className="text-red-500">*</span>
                  </Label>
                  <Input id="name" placeholder="Your names" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email<span className="text-red-500">*</span>
                  </Label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Select Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject.toLowerCase()}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your message or question</Label>
                <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending message..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

