import { format } from "date-fns";
import type { BookingData } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

interface SummaryStepProps {
  bookingData: BookingData;
  onBack: () => void;
}

export default function SummaryStep({ bookingData, onBack }: SummaryStepProps) {
  const router = useRouter();
  const { toast } = useToast();
  const createAppointment = useMutation(api.appointments.create);

  const handleBookAppointment = async () => {
    if (!bookingData.service || !bookingData.date || !bookingData.timeSlot)
      return;

    try {
      await createAppointment({
        service: bookingData.service.name,
        date: bookingData.date.toISOString(),
        time: `${bookingData.timeSlot.start} - ${bookingData.timeSlot.end}`,
        firstName: bookingData.firstName!,
        lastName: bookingData.lastName!,
        email: bookingData.email!,
        phone: bookingData.phone!,
        note: bookingData.note,
        amount: bookingData.service.price,
      });

      toast({
        title: "Appointment Booked Successfully!",
        description: "We'll send you a confirmation email shortly.",
      });

      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error booking appointment",
        description: "Please try again later.",
      });
    }
  };

  if (!bookingData.service || !bookingData.date || !bookingData.timeSlot) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-muted-foreground">
          Your appointment booking summary
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Customer</p>
          <p className="font-medium">
            {bookingData.firstName} {bookingData.lastName}
          </p>
        </div>

        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Service</p>
          <p className="font-medium">{bookingData.service.name}</p>
        </div>

        <div className="grid gap-1">
          <p className="text-sm text-muted-foreground">Date & Time</p>
          <p className="font-medium">
            {format(bookingData.date, "MMMM d, yyyy")},{" "}
            {bookingData.timeSlot.start} - {bookingData.timeSlot.end}
          </p>
        </div>

        <div className="border-t pt-4 mt-4">
          <div className="flex justify-between">
            <p className="font-medium">Total Amount Payable</p>
            <p className="font-bold text-primary">
              UGX{bookingData.service.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
        <Button onClick={handleBookAppointment}>Book Appointment</Button>
      </div>
    </div>
  );
}
