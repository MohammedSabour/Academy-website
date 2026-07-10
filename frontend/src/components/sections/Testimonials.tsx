import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student4 from "@/assets/student-4.jpg";

export default function Testimonials() {
  const testimonials = [
    { name: "Amina R.", country: "Algeria", img: student2, quote: "The teachers helped me improve from B1 to C1 in less than a year. I passed IELTS with 7.5.", cert: "IELTS 7.5" },
    { name: "Karim H.", country: "Algeria", img: student1, quote: "Small classes and real conversations. I finally speak English without hesitation.", cert: "TOEFL 105" },
    { name: "Sarah D.", country: "Algeria", img: student4, quote: "PolyGlo made French fun. The DELF preparation was exactly what I needed.", cert: "DELF B2" },
  ];

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="teachers" className="py-28 bg-white">
      <div className="mx-auto max-w-350 px-6 lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-bold text-heading" style={{ fontSize: "clamp(30px, 4vw, 48px)" }}>
            What Our Students Say
          </h2>
          <p className="mt-3 text-[17px] text-body">More than 1,200 students have trusted PolyGlo.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <motion.article key={t.name} variants={fadeUp} initial="hidden" whileInView="show"
              viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1 }}
              className={"rounded-4xl p-8 transition-all duration-300 hover:scale-[1.03] " +
                (idx === i ? "bg-primary text-white shadow-[0_20px_50px_rgba(108,78,246,.35)]" : "bg-background text-body")}>
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} className={idx === i ? "fill-white text-white" : "fill-warning text-warning"} />)}
              </div>
              <p className={"text-[16px] leading-relaxed " + (idx === i ? "text-white" : "text-body")}>
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} width={52} height={52} loading="lazy" className="size-13 rounded-full object-cover" style={{ width: 52, height: 52 }} />
                <div>
                  <div className={"font-display font-bold " + (idx === i ? "text-white" : "text-heading")}>{t.name}</div>
                  <div className={"text-[13px] " + (idx === i ? "text-white/80" : "text-muted")}>{t.country} · {t.cert}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={"Testimonial " + (i + 1)}
              className={"h-2 rounded-full transition-all " + (idx === i ? "w-8 bg-primary" : "w-2 bg-border")} />
          ))}
        </div>
      </div>
    </section>
  )
}
