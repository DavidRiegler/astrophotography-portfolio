import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/Startrails.jpg"
        alt="Stunning Startrails in the night sky"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Capturing the Cosmos</h1>
        <p className="text-xl sm:text-2xl">Astrophotography by David</p>
      </div>
    </section>
  )
}