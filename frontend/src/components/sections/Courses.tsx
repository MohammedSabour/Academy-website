import {getLanguages} from '../../api/courseService.ts'
import useFetch from '../../hooks/useFetch.ts'
import { motion} from "framer-motion";
import { fadeUp, stagger } from '../../animations/variants.ts';
import { ArrowRight, ChevronLeft, ChevronRight} from "lucide-react";

export default function Courses() {
  const { data: languages, loading, error } = useFetch(getLanguages);
  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <section id="courses" className="py-24 bg-background">
      <div className="mx-auto max-w-350 px-6 lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}
          className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div>
            <h2 className="font-display font-bold text-heading" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
              Our Popular Courses
            </h2>
            <p className="mt-3 text-[17px] text-body">Choose from our wide range of internationally recognized language programs.</p>
          </div>
          <div className="flex gap-3">
            <button aria-label="Previous" className="size-12 rounded-full bg-white shadow-[0_8px_20px_rgba(27,22,63,.08)] grid place-items-center text-heading hover:bg-primary hover:text-white hover:scale-105 transition">
              <ChevronLeft size={20} />
            </button>
            <button aria-label="Next" className="size-12 rounded-full bg-white shadow-[0_8px_20px_rgba(27,22,63,.08)] grid place-items-center text-heading hover:bg-primary hover:text-white hover:scale-105 transition">
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {languages.map((language: {  id: number; name: string; code: string; description: string; image: string; }) => (
            <motion.article key={language.id} variants={fadeUp}
              className={"group rounded-[28px] overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl shadow-[0_15px_40px_rgba(27,22,63,.05)] bg-[#eee9ff]"}>
              <div className="relative h-80 overflow-hidden">
                <span className="absolute top-5 left-5 size-10 rounded-full bg-white grid place-items-center shadow-md text-xs z-10">{language.code}</span>
                <img  src={language.image} alt={language.name} width={400} height={320} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              </div>
              <div className="p-7">
                <h3 className="font-display font-bold text-heading text-[22px] leading-tight">{language.name} Courses</h3>
                <p className="mt-2 text-[14px] text-body">{language.description}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary group/link">
                  Learn More
                  <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}