import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Courses from '../components/sections/Courses'
import About from '../components/sections/About'
import Certifications from '../components/sections/Certifications'
import Contact from '../components/sections/Contact'
import FAQ from '../components/sections/FAQ'
import Testimonials from '../components/sections/Testimonials'
import LearningProcess from '../components/sections/LearningProcess'

export default function Home() {
  return (
     <div className='h-full'
      style={{
        background:
          "radial-gradient(circle at top left, rgba(108,78,246,.08), transparent 45%), radial-gradient(circle at bottom right, rgba(255,140,66,.08), transparent 40%), #F7F8FC",
      }}
    >
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Certifications />
      <LearningProcess />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
