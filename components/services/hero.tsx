export default function Hero() {
  return (
    <section
      className="relative h-[400px] md:h-[460px] bg-cover bg-center flex items-center"
      style={{
        // backgroundImage: `url('/5.jpg')`,
        backgroundImage: `url('https://cloud.appwrite.io/v1/storage/buckets/67e2a25800133a4087d0/files/67e2c81f001fc3271c3c/view?project=67e2a223000b0eb6c75c&mode=admin')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl ml-20 font-bold text-white">
          Our Services
        </h1>
        <h1 className="text-md md:text-xl lg:text-2xl ml-20 mt-4 text-white">
          Here{"'"}s what we offer at Oasis Dental Clinic
        </h1>
      </div>
    </section>
  );
}
