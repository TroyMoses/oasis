import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Service, ServiceCategory } from "@/types/booking";
import { Mountain } from "lucide-react";

interface ServiceStepProps {
  selectedService?: Service;
  onSelect: (service: Service) => void;
  onNext: () => void;
}

const categories: ServiceCategory[] = [
  "ALL",
  "Cosmetic Dentistry",
  "Endodontics",
];

const services: Service[] = [
  {
    id: "dental-check",
    name: "Dental Check - Up",
    category: "Cosmetic Dentistry",
    duration: 60,
    price: 15000,
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    category: "Cosmetic Dentistry",
    duration: 60,
    price: 500000,
  },
  {
    id: "root-canal",
    name: "Root Canal",
    category: "Endodontics",
    duration: 60,
    price: 200000,
  },
  {
    id: "wisdom-tooth",
    name: "Wisdom Tooth",
    category: "Endodontics",
    duration: 70,
    price: 100000,
  },
];

export default function ServiceStep({
  selectedService,
  onSelect,
  onNext,
}: ServiceStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Select Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Endodontics" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Select Service</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`p-4 cursor-pointer transition-colors hover:border-primary ${
                selectedService?.id === service.id ? "border-primary" : ""
              }`}
              onClick={() => onSelect(service)}
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-slate-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">{service.name}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Duration: {service.duration}m</span>
                    <span className="font-semibold text-primary">
                      UGX{service.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext} disabled={!selectedService}>
          Next: Date & Time
        </Button>
      </div>
    </div>
  );
}
