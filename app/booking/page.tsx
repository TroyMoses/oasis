import BookingForm from "@/components/booking/booking-form";
import Hero from "@/components/booking/hero";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Hero />
      <div className="container">
        <h1 className="text-3xl text-blue-800 text-center font-bold mt-10 mb-5">
          Dental Appointment Booking
        </h1>
        <BookingForm />
      </div>
    </main>
  );
}
