import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import Courses from '../components/sections/Courses'

export default function Home() {
  return (
     <div className='h-full'
      style={{
        background:
          "radial-gradient(circle at top left, rgba(108,78,246,.08), transparent 45%), radial-gradient(circle at bottom right, rgba(255,140,66,.08), transparent 40%), #F7F8FC",
      }}
    >
      <Navbar/>
      <Hero/>
      <Courses/>
      <Footer/>
    </div>
  )
}
