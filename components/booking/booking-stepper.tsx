import { Calendar, ClipboardList, FileText, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Step } from "./booking-form";

interface BookingStepperProps {
  currentStep: Step;
}

const steps = [
  {
    id: "service" as const,
    label: "Service",
    icon: ClipboardList,
  },
  {
    id: "datetime" as const,
    label: "Date & Time",
    icon: Calendar,
  },
  {
    id: "details" as const,
    label: "Basic Details",
    icon: FileText,
  },
  {
    id: "summary" as const,
    label: "Summary",
    icon: ListChecks,
  },
];

export default function BookingStepper({ currentStep }: BookingStepperProps) {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => {
        const isActive = currentStep === step.id;
        const isPast = steps.findIndex((s) => s.id === currentStep) > index;

        return (
          <div
            key={step.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg transition-colors",
              isActive && "bg-primary text-primary-foreground",
              isPast && "bg-primary/10"
            )}
          >
            <step.icon className="h-5 w-5" />
            <span className="text-sm font-medium">{step.label}</span>
          </div>
        );
      })}
    </div>
  );
}
