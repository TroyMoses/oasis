export default function Hero() {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('/banner1.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl ml-20 font-bold text-white">
          Our Services
        </h1>
      </div>
    </section>
  );
}
