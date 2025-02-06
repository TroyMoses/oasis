"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import type { TimeSlot } from "@/types/booking";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DateTimeStepProps {
  selectedDate?: Date;
  selectedTimeSlot?: TimeSlot;
  onSelect: (date: Date, timeSlot: TimeSlot) => void;
  onNext: () => void;
  onBack: () => void;
}

const timeSlots: TimeSlot[] = [
  { id: "1", start: "8:30 am", end: "9:30 am", slotsLeft: 1 },
  { id: "2", start: "9:30 am", end: "10:30 am", slotsLeft: 1 },
  { id: "3", start: "10:30 am", end: "11:30 am", slotsLeft: 1 },
  { id: "4", start: "11:30 am", end: "12:30 pm", slotsLeft: 1 },
  { id: "5", start: "12:30 pm", end: "1:30 pm", slotsLeft: 1 },
  { id: "6", start: "1:30 pm", end: "2:30 pm", slotsLeft: 1 },
  { id: "7", start: "2:30 pm", end: "3:30 pm", slotsLeft: 1 },
  { id: "8", start: "3:30 pm", end: "4:30 pm", slotsLeft: 1 },
  { id: "9", start: "4:30 pm", end: "5:30 pm", slotsLeft: 1 },
  { id: "10", start: "5:30 pm", end: "6:30 pm", slotsLeft: 1 },
];

export default function DateTimeStep({
  selectedDate,
  selectedTimeSlot,
  onSelect,
  onNext,
  onBack,
}: DateTimeStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg text-blue-800 font-semibold mb-4">Select Date & Time</h2>
        <div className="grid lg:grid-cols-[1fr,300px] gap-6">
          <Card className="p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(date) =>
                date && onSelect(date, selectedTimeSlot || timeSlots[0])
              }
              className="w-full text-blue-800"
              disabled={(date) =>
                date < new Date() ||
                date > new Date(new Date().setMonth(new Date().getMonth() + 2))
              }
            />
          </Card>

          <Card className="p-4">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-blue-800">Morning</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.slice(0, 4).map((slot) => (
                    <Button
                      key={slot.id}
                      variant={
                        selectedTimeSlot?.id === slot.id ? "default" : "outline"
                      }
                      className="w-full"
                      onClick={() =>
                        selectedDate && onSelect(selectedDate, slot)
                      }
                    >
                      <div className="text-xs">
                        <div>{slot.start}</div>
                        <div className="text-[10px] opacity-70">
                          {slot.slotsLeft} Slots left
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-blue-800">Afternoon</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.slice(4, 8).map((slot) => (
                    <Button
                      key={slot.id}
                      variant={
                        selectedTimeSlot?.id === slot.id ? "default" : "outline"
                      }
                      className="w-full"
                      onClick={() =>
                        selectedDate && onSelect(selectedDate, slot)
                      }
                    >
                      <div className="text-xs">
                        <div>{slot.start}</div>
                        <div className="text-[10px] opacity-70">
                          {slot.slotsLeft} Slots left
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2 text-blue-800">Evening</h3>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.slice(8).map((slot) => (
                    <Button
                      key={slot.id}
                      variant={
                        selectedTimeSlot?.id === slot.id ? "default" : "outline"
                      }
                      className="w-full"
                      onClick={() =>
                        selectedDate && onSelect(selectedDate, slot)
                      }
                    >
                      <div className="text-xs">
                        <div>{slot.start}</div>
                        <div className="text-[10px] opacity-70">
                          {slot.slotsLeft} Slots left
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
        <Button className="bg-blue-800" onClick={onNext} disabled={!selectedDate || !selectedTimeSlot}>
          Next: Basic Details
          <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
