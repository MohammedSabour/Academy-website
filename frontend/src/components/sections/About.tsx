import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from '../../animations/variants';
import classroom from "../../assets/classroom.jpg";
import {Star, Check} from "lucide-react";

export default function About() {
  const whyItems = [
    { title: "Experienced Certified Teachers", desc: "Instructors with international certifications and years of classroom experience." },
    { title: "Small Class Sizes", desc: "Maximum attention with 8–12 students per class for real progress." },
    { title: "Interactive Learning", desc: "Games, projects and conversation from day one — not just textbooks." },
    { title: "Flexible Schedule", desc: "Morning, evening and weekend classes that fit your lifestyle." },
    { title: "International Certificates", desc: "Official preparation for IELTS, TOEFL, TOEIC, DELF, DALF and TCF." },
    { title: "Career Opportunities", desc: "Language skills that open doors to global universities and employers." },
  ];
  const reduce = useReducedMotion();
  return (
     <section id="about" className="py-28 bg-white">
      <div className="mx-auto max-w-350 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-16 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          className="relative">
          <img src={classroom} alt="Modern PolyGlo classroom" width={620} height={720} loading="lazy"
            className="w-full h-140 object-cover rounded-[36px] shadow-[0_20px_60px_rgba(27,22,63,.12)]" />
          <motion.div
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl w-60"
          >
            <div className="flex gap-0.5 text-warning">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-warning" />)}
            </div>
            <div className="mt-2 font-bold text-heading">Rated 4.9/5</div>
            <div className="text-[13px] text-muted">by 1,200+ students</div>
          </motion.div>
          <div className="absolute -top-4 -right-4 size-24 rounded-full bg-secondary/20 -z-10" />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.div variants={fadeUp} className="text-[13px] font-bold uppercase tracking-[0.25em] text-primary">
            Why choose PolyGlo
          </motion.div>
          <motion.h2 variants={fadeUp} className="mt-3 font-display font-bold text-heading leading-[1.1]"
            style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
            Learning designed for real-world success.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-[17px] text-body leading-[1.75] max-w-140">
            We combine experienced instructors, internationally recognized programs, interactive
            learning methods and personalized coaching to help students achieve their language
            goals faster.
          </motion.p>
          <motion.ul variants={stagger} className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {whyItems.map((w) => (
              <motion.li key={w.title} variants={fadeUp} className="flex gap-3 items-start transition-transform duration-300 hover:translate-x-2">
                <span className="size-9 rounded-full bg-primary/10 grid place-items-center shrink-0 mt-0.5">
                  <Check size={16} className="text-primary" strokeWidth={3} />
                </span>
                <div>
                  <div className="font-display font-bold text-heading text-[16px]">{w.title}</div>
                  <div className="text-[14px] text-body mt-1 leading-relaxed">{w.desc}</div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}