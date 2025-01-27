export default function Hero() {
  return (
    <section
      className="relative h-[400px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url('/2.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl ml-20 font-bold text-white">
          Contact Us
        </h1>
        <h1 className="text-md md:text-xl lg:text-2xl ml-20 mt-4 text-white">
          Get in touch with us
        </h1>
      </div>
    </section>
  );
}
