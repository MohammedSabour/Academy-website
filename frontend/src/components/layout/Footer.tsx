import {GraduationCap, MapPin, Phone, Mail, Clock3} from 'lucide-react'
import { FacebookOutlinedRounded, InstagramOutlinedRounded, LinkedinOutlinedRounded, YoutubeOutlinedRounded } from "@lineiconshq/react-lineicons";

export default function Footer() {
  return (
     <footer id="contact" className="bg-[#1B163F] text-white/80 pt-24 pb-10">
      <div className="mx-auto max-w-350 px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="size-11 rounded-2xl bg-primary grid place-items-center">
                <GraduationCap className="text-white" size={22} />
              </div>
              <div className="font-logo font-extrabold text-white text-[20px]">
                Poly<span className="text-primary-glow">Glo</span>
              </div>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed">
              A modern language academy helping students speak with confidence and earn
              internationally recognized certifications.
            </p>
            <div className="mt-6 flex gap-3">
              {[FacebookOutlinedRounded, InstagramOutlinedRounded, LinkedinOutlinedRounded, YoutubeOutlinedRounded].map((Icon, i) => (
                <a key={i} href="#" aria-label="social"
                  className="size-10 rounded-full bg-white/10 grid place-items-center hover:bg-primary transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-[16px]">Quick Links</h4>
            <ul className="space-y-3 text-[14px]">
              {["Home", "Courses", "Teachers", "Blog", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-[16px]">Courses</h4>
            <ul className="space-y-3 text-[14px]">
              {["English", "French", "German", "Spanish", "Arabic"].map((l) => (
                <li key={l}><a href="#" className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-5 text-[16px]">Contact</h4>
            <ul className="space-y-3 text-[14px]">
              <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-primary-glow" /> 12 Boulevard des Langues, Algiers</li>
              <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-primary-glow" /> +213 555 123 456</li>
              <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-primary-glow" /> hello@polyglo.academy</li>
              <li className="flex gap-2"><Clock3 size={16} className="mt-0.5 shrink-0 text-primary-glow" /> Sat – Thu, 9:00 – 21:00</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[13px] text-white/60">
          <div>© 2026 PolyGlo Language Academy. All Rights Reserved.</div>
          <div className="flex gap-6"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a></div>
        </div>
      </div>
    </footer>
  )
}
