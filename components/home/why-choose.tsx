import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ClipboardList, Users } from "lucide-react";

export default function WhyChoose() {
  return (
    <section className="py-10 md:py-16 md:px-20 pl-5 pr-2">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Why Choose Oasis Dental Clinic?
            </h2>
            <div className="grid gap-8">
              <div className="flex gap-4">
                <ClipboardList className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Dental Clinic Near Me
                  </h3>
                  <p className="text-muted-foreground">
                    Get top-quality dental care at Oasis Dental Clinic, the
                    best dental clinic near me. Contact us now!
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Best Dentists Near Me
                  </h3>
                  <p className="text-muted-foreground">
                    Find the best dentist near you in Kampala at Dental
                    Solutions Kampala. We offer a wide range of dental services
                    for a healthy and beautiful smile. Contact us today!
                  </p>
                </div>
              </div>
            </div>
            <Button className="mt-8">Book Appointment</Button>
          </div>
          <Image
            src="/why.jpg"
            alt="Dental clinic reception"
            width={600}
            height={400}
            className="rounded-lg h-[380px] w-[400px] ml-28 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}
