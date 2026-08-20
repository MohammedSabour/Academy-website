import { useState } from 'react'
import { motion, AnimatePresence} from "framer-motion";
import { fadeUp } from '../../animations/variants';
import {ChevronDown} from 'lucide-react'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "How do I register?", a: "Click Enroll Now, choose your course and schedule, and complete the online form. Our team confirms your seat within 24 hours." },
    { q: "Can I study online?", a: "Yes. Every course is available in-person, online or hybrid — you can switch modes at any time." },
    { q: "How long does each course last?", a: "Standard levels run 8–12 weeks. Certification prep programs run 10–16 weeks depending on the exam." },
    { q: "Do you prepare students for IELTS?", a: "Absolutely. We offer official preparation for IELTS, TOEFL, TOEIC, DELF, DALF and TCF with certified instructors." },
    { q: "Can beginners join?", a: "Of course. Most students start at A1. A free placement test helps us match you with the right class." },
    ];
  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-225 px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="font-display font-bold text-heading" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-[17px] text-body">Everything you need to know before joining PolyGlo.</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <motion.div key={f.q} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(27,22,63,.05)] overflow-hidden">
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={active}
                >
                  <span className="font-display font-semibold text-heading text-[17px]">{f.q}</span>
                  <span className={"size-9 rounded-full grid place-items-center transition-all duration-300 " + (active ? "bg-primary text-white rotate-180" : "bg-[#f4f4fa] text-heading")}>
                    <ChevronDown size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-body leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}
