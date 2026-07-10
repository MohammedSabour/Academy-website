import { motion, useReducedMotion } from "framer-motion";
import {fadeUp, stagger} from '../../animations/variants'
import PrimaryButton from "../ui/PrimaryButton";
import GhostButton from "../ui/GhostButton";
import {
  ArrowRight,
  Globe,
  Star,
  Send,
  Sparkles,
} from "lucide-react";
import heroStudent from "../../assets/hero-student.jpg";
import student1 from "@/assets/student-1.jpg";
import student2 from "../../assets/student-2.jpg";
import student3 from "../../assets/student-3.jpg";
import student4 from "../../assets/student-4.jpg";

export default function Hero() {
  const reduce = useReducedMotion();
  const float: any = reduce
    ? {}
    : { y: [0, -10, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } };
  const floatSlow: any = reduce
    ? {}
    : { y: [0, -8, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } };
    
  return (

    <section id="home" className="relative pt-32 lg:pt-48 pb-16">
      <div className="mx-auto max-w-350 px-6 lg:px-12">
        {/* ------ Main hero card block ------ */}
        <div className='flex justify-between items-center'>
            {/* Left content */}
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.h1
                variants={fadeUp}
                className="font-display font-extrabold text-heading leading-[1.3] tracking-[-0.03em]"
                style={{ fontSize: "clamp(44px, 6vw, 72px)" }}
              >
                Speak Today, <br />
                Lead
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(180deg,#6C4EF6,#9D7CFF)" }}
                >
                  {" "}Tomorrow
                </span>
                <span className="text-secondary ">.</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-6 max-w-140 text-[18px] leading-[1.6] text-body">
                Learn languages with confidence and open doors to unlimited opportunities through
                interactive lessons, certified teachers and internationally recognized programs.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
                <PrimaryButton>
                  Free Placement Test
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </PrimaryButton>
                <GhostButton to="/courses">
                  Explore Courses
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </GhostButton>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3.5">
                    {[student1, student2, student3, student4].map((s, i) => (
                      <img key={i} src={s} alt="" width={44} height={44} loading="lazy"
                        className="size-11 rounded-full object-cover ring-[3px] ring-white" />
                    ))}
                    <div className="size-11 rounded-full bg-warning ring-[3px] ring-white grid place-items-center text-[12px] font-bold text-heading">
                      1.2K+
                    </div>
                  </div>
                  <div className="text-[15px] font-semibold text-heading">Happy Students</div>
                </div>
                <div className="h-10 w-px bg-border hidden sm:block" />
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[#fff4c9] grid place-items-center">
                    <Star size={20} className="fill-warning text-warning" />
                  </div>
                  <div>
                    <div className="font-bold text-heading">5.0/5</div>
                    <div className="text-[13px] text-muted">Google Reviews</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            

            {/* Right hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
              className="hidden md:flex relative aspect-square max-w-120 mx-auto w-full mr-2"
            >
              {/* Blob */}
              <div className="absolute inset-6 rounded-full bg-linear-to-br from-primary to-primary-glow shadow-[0_40px_100px_rgba(108,78,246,.35)]" />
              {/* Dashed circle */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />
              {/* Student image */}
              <div className="absolute inset-0 grid place-items-center">
                <img
                  src={heroStudent}
                  alt="Smiling PolyGlo student holding books"
                  width={520}
                  height={520}
                  className="w-[90%] h-[90%] object-contain drop-shadow-[0_30px_40px_rgba(20,20,40,0.15)]"
                />
              </div>

              {/* Floating card */}
              <motion.div
                animate={reduce ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 bottom-16 bg-white rounded-[20px] shadow-[0_15px_40px_rgba(27,22,63,.12)] p-4 w-42"
              >
                <div className="size-10 rounded-full bg-primary/10 grid place-items-center mb-3">
                  <Globe size={20} className="text-primary" />
                </div>
                <div className="text-[26px] font-extrabold text-heading leading-none">15+</div>
                <div className="text-[13px] text-muted mt-1">Languages<br />To Learn</div>
              </motion.div>
              {/* Paper airplane */}
              <motion.div animate={float} className="absolute top-6 -right-2 text-primary/70">
                <Send size={34} className="rotate-[-25deg]" />
              </motion.div>
              {/* Sparkle */}
              <motion.div animate={floatSlow} className="absolute top-24 left-0 text-secondary/80">
                <Sparkles size={26} />
              </motion.div>
              {/* Small orange dot */}
              <div className="absolute top-12 right-16 size-3 rounded-full bg-secondary" />
              <div className="absolute bottom-24 right-4 size-4 rounded-full border-2 border-primary/40" />
            </motion.div>
          </div>

          {/* <div className=''>
            {/* Feature strip 
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
              className="relative mt-6 p-6 lg:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-4 group">
                    <div className={"size-14 rounded-full grid place-items-center shrink-0 shadow-[0_12px_25px_rgba(0,0,0,.06)] transition-transform duration-300 group-hover:rotate-[10deg] " + f.color}>
                      <f.icon size={24} />
                    </div>
                    <div>
                      <div className="font-display font-bold text-heading text-[17px]">{f.title}</div>
                      <div className="text-[14px] text-[#7d7d96] leading-relaxed mt-0.5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div> */}
        </div>
      </section>
  )
}
