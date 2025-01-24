import BookingForm from "@/components/booking/booking-form"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container">
        <h1 className="text-3xl font-bold text-primary/80 mb-8">Dental Appointment Booking</h1>
        <BookingForm />
      </div>
    </main>
  )
}

