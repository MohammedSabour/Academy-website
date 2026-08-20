import { motion } from "framer-motion";
import { fadeUp, stagger } from '../../animations/variants';
import { ArrowRight } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    { name: "IELTS Academic", desc: "The world's most trusted English test for study and immigration.", duration: "8–12 weeks", color: "from-[#e63946] to-[#c81d25]", tag: "IELTS" },
    { name: "TOEFL iBT", desc: "Internet-based English proficiency exam accepted worldwide.", duration: "10–14 weeks", color: "from-[#1e40af] to-[#1e3a8a]", tag: "TOEFL" },
    { name: "TOEIC", desc: "Measure everyday English in an international workplace context.", duration: "6–10 weeks", color: "from-[#0891b2] to-[#0e7490]", tag: "TOEIC" },
    { name: "DELF", desc: "Official French diploma issued by the French Ministry of Education.", duration: "10–14 weeks", color: "from-[#2563eb] to-[#1d4ed8]", tag: "DELF" },
    { name: "DALF", desc: "Advanced French certification for academic and professional use.", duration: "12–16 weeks", color: "from-[#7c3aed] to-[#6d28d9]", tag: "DALF" },
    { name: "TCF", desc: "General French assessment for immigration and higher education.", duration: "6–10 weeks", color: "from-[#059669] to-[#047857]", tag: "TCF" },
  ];
  
  return (
    <section id="certifications" className="py-28 bg-background">
      <div className="mx-auto max-w-350 px-6 lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[13px] font-bold uppercase tracking-[0.25em] text-primary">Global Recognition</div>
          <h2 className="mt-3 font-display font-bold text-heading" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
            International Certifications
          </h2>
          <p className="mt-4 text-[17px] text-body">
            Prepare for internationally recognized exams with expert instructors and proven learning methods.
          </p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((c) => (
            <motion.article key={c.name} variants={fadeUp}
              className="group bg-white rounded-4xl p-8 shadow-[0_15px_40px_rgba(27,22,63,.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className={"size-16 rounded-2xl grid place-items-center text-white font-bold bg-linear-to-br shadow-lg " + c.color}>
                {c.tag}
              </div>
              <h3 className="mt-6 font-display font-bold text-heading text-[22px]">{c.name}</h3>
              <p className="mt-2 text-[15px] text-body leading-relaxed">{c.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <div className="text-[13px] text-muted">Duration: <span className="text-heading font-semibold">{c.duration}</span></div>
                <a href="#" className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
                  Enroll <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}