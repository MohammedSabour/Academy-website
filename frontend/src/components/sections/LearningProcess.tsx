import { motion } from 'framer-motion';
import { Clipboard, Award, BookOpen, GraduationCap } from 'lucide-react';
import { fadeUp } from '../../animations/variants';

export default function LearningProcess() {
  const steps = [
    { icon: Clipboard, title: "Placement Test", desc: "Take a free evaluation so we know exactly where to start." },
    { icon: BookOpen, title: "Choose Course", desc: "Pick your language, level and preferred schedule." },
    { icon: GraduationCap, title: "Learn With Experts", desc: "Interactive classes with certified native-level teachers." },
    { icon: Award, title: "Receive Certificate", desc: "Complete your course and prepare for official exams." },
  ];
  return (
    <section className="py-28 relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg,#6C4EF6,#8A6EFF)" }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,.15), transparent 40%)" }} />
      <div className="relative mx-auto max-w-350 px-6 lg:px-12 text-center">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="font-display font-bold text-white leading-[1.1]" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
          Your Language Journey<br />in Four Simple Steps
        </motion.h2>
        <p className="mt-4 text-white/85 max-w-xl mx-auto">A clear path from your first placement test to an internationally recognized certificate.</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1 }}
              className="relative rounded-[28px] p-7 text-left bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-[1.05] hover:bg-white/15">
              <div className="size-14 rounded-2xl bg-white text-primary grid place-items-center shadow-lg">
                <s.icon size={26} />
              </div>
              <div className="mt-5 text-[13px] font-bold text-white/70">STEP {i + 1}</div>
              <h3 className="mt-1 font-display font-bold text-white text-[22px]">{s.title}</h3>
              <p className="mt-2 text-[14px] text-white/80 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
