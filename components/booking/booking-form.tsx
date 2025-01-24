"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import type { BookingData } from "@/types/booking";
import BookingStepper from "./booking-stepper";
import ServiceStep from "./steps/service-step";
import DateTimeStep from "./steps/date-time-step";
import DetailsStep from "./steps/details-step";
import SummaryStep from "./steps/summary-step";

export type Step = "service" | "datetime" | "details" | "summary";

export default function BookingForm() {
  const [currentStep, setCurrentStep] = useState<Step>("service");
  const [bookingData, setBookingData] = useState<BookingData>({});

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const goToNext = (nextStep: Step) => {
    setCurrentStep(nextStep);
  };

  const goBack = (previousStep: Step) => {
    setCurrentStep(previousStep);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-6">
        <div className="grid md:grid-cols-[200px,1fr] gap-6">
          <BookingStepper currentStep={currentStep} />
          <div className="min-h-[600px]">
            {currentStep === "service" && (
              <ServiceStep
                selectedService={bookingData.service}
                onSelect={(service) => updateBookingData({ service })}
                onNext={() => goToNext("datetime")}
              />
            )}
            {currentStep === "datetime" && (
              <DateTimeStep
                selectedDate={bookingData.date}
                selectedTimeSlot={bookingData.timeSlot}
                onSelect={(date, timeSlot) =>
                  updateBookingData({ date, timeSlot })
                }
                onNext={() => goToNext("details")}
                onBack={() => goBack("service")}
              />
            )}
            {currentStep === "details" && (
              <DetailsStep
                formData={bookingData}
                onSubmit={(data) => {
                  updateBookingData(data);
                  goToNext("summary");
                }}
                onBack={() => goBack("datetime")}
              />
            )}
            {currentStep === "summary" && (
              <SummaryStep
                bookingData={bookingData}
                onBack={() => goBack("details")}
              />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
