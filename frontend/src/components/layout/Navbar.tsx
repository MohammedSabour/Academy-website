import { NavLink } from 'react-router-dom'; 
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <header className='fixed top-6 left-0 px-6 w-full z-50'>
      <nav className='mx-16 flex justify-between items-center'>
        <a 
          href="/" 
          className="font-logo font-extrabold text-[20px] text-heading">
          Poly
          <span className="text-primary">Glo</span>
          <span className='text-secondary'>.</span>
        </a> 

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-12 font-mono'>
          <HashLink smooth to="/#home" className='tracking-widest'>Home</HashLink>
          <HashLink smooth to="/#about" className='tracking-widest'>About Us</HashLink>
          <HashLink smooth to="/#courses" className="tracking-widest">Programs</HashLink>
          <HashLink smooth to="/#certifications" className='tracking-widest'>Cerifications</HashLink>
          <HashLink smooth to="/#contact" className='tracking-widest'>Contact Us</HashLink>
        </div>
        <div className='flex space-x-6 font-mono'>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/Login">Get started</NavLink>
        </div>
      </nav>
    </header>
  )
}