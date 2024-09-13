import Header from '@/app/components/Header'
import Hero from '@/app/components/Hero'
import Gallery from '@/app/components/Gallery'
import About from '@/app/components/About'
import Contact from '@/app/components/Contact'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}