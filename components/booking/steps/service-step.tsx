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
];

const services: Service[] = [
  {
    id: "dental-examination",
    name: "Dental Examination",
    duration: 60,
    price: 15000,
  },
  {
    id: "teeth-extraction",
    name: "Teeth Extraction",
    duration: 60,
    price: 500000,
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    duration: 60,
    price: 200000,
  },
  {
    id: "scaling-washing",
    name: "Scaling and Washing",
    duration: 70,
    price: 100000,
  },
  {
    id: "filling",
    name: "Filling",
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
        <h2 className="text-lg font-semibold mb-4 text-blue-800">Select Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "ALL" ? "default" : "outline"}
              className="rounded-full bg-blue-800 text-white"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4 text-blue-800">Select Service</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`p-4 cursor-pointer transition-colors hover:border-blue-800 ${
                selectedService?.id === service.id ? "border-blue-800" : ""
              }`}
              onClick={() => onSelect(service)}
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-blue-800" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-2 text-blue-800">{service.name}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Duration: {service.duration}m</span>
                    <span className="font-semibold text-blue-800">
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
        <Button className="bg-blue-800" onClick={onNext} disabled={!selectedService}>
          Next: Date & Time
        </Button>
      </div>
    </div>
  );
}
