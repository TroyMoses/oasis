export default function Hero() {
  return (
    <section className="relative h-[400px] bg-cover bg-center flex items-center bg-gray-300"
    style={{
      backgroundImage: `url('/Whitening.png')`,
    }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Testimonials
          </h1>
          <p className="text-xl opacity-90">
            See what our patients say about their experience with us
          </p>
        </div>
      </div>
    </section>
  );
}
