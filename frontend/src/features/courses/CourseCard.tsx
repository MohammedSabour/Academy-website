import { motion} from "framer-motion";
import {fadeUp } from '../../animations/variants'
import {GraduationCap, BookOpen, Wallet, ArrowRight} from "lucide-react";
import type {Course} from '../../types/course'

export default function CourseCard({ c }: { c: Course }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group bg-white rounded-[28px] overflow-hidden border border-border shadow-[0_12px_30px_rgba(20,20,40,.05)] hover:shadow-[0_22px_45px_rgba(20,20,40,.1)] transition-shadow flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={c.language.image}
          alt={c.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-full pl-2 pr-3 h-9 flex items-center gap-1.5 text-[13px] font-semibold text-heading shadow-md">
          <span className="text-sm leading-none">{c.code}</span>
          {c.language.name}
        </div>
        <div className="absolute top-4 right-4 bg-primary text-white rounded-full h-9 px-3 flex items-center text-[12px] font-bold shadow-[0_8px_20px_rgba(108,78,246,.35)]">
          {c.level.code}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-heading text-[19px] leading-snug">{c.name}</h3>
        <p className="mt-2 text-[13.5px] text-body leading-relaxed line-clamp-2">{c.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-[13px]">
          <div className="flex items-center gap-2 text-body">
            <GraduationCap size={15} className="text-primary" /> {c.teacher.first_name} {c.teacher.last_name}
          </div>
          <div className="flex items-center gap-2 text-body">
            <BookOpen size={15} className="text-primary" /> Level {c.level.name}
          </div>
          {/* <div className="flex items-center gap-2 text-body">
            <CalendarDays size={15} className="text-primary" /> {c.days.join(" • ")}
          </div>
          <div className="flex items-center gap-2 text-body">
            <Clock3 size={15} className="text-primary" /> {c.time}
          </div> */}
        </div>

        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Wallet size={16} className="text-secondary" />
            <span className="font-display font-bold text-heading text-[14px]">DZD {c.price}</span>
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-2xl bg-primary text-white h-11 px-4 text-[13.5px] font-semibold shadow-[0_10px_22px_rgba(108,78,246,.28)] hover:bg-primary-hover hover:scale-[1.03] transition-all">
            View Details <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}