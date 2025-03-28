export default function Hero() {
    return (
      <section className="relative h-[400px] bg-cover bg-center flex items-center bg-gray-300"
      style={{
        backgroundImage: `url('/5.jpg')`,
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl opacity-90">
              Follow the steps and make an appointment now.
            </p>
          </div>
        </div>
      </section>
    );
  }
  