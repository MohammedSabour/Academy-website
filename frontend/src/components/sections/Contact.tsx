import { useState } from 'react';
import client from '../../api/axiosClient'
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Globe, Sparkles, ChevronDown, Phone} from 'lucide-react';

export default function Contact() {
  const contactCards = [
    { icon: Mail, title: "info@polyglo-dz.com", subtitle: "Email Address" },
    { icon: Phone, title: "+213 45 41 60 98", subtitle: "Call Us" },
    { icon: MapPin, title: "6 avenue Mohammed Khemisti, Mostaganem, Algeria", subtitle: "Visit Our Academy" },
  ];

  const courseOptions = [
    "English", "French", "German", "Spanish", "Arabic",
    "IELTS Preparation", "TOEFL Preparation", "Kids Programs", "Business English",
  ];

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", course: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const set = (key: string, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.course) e.course = "Please select a course";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e : React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
        setStatus("loading");

        await client.post("/contact/", form);

        setStatus("success");

        setTimeout(() => {
            setStatus("idle");

            setForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                course: "",
                message: "",
            });

            setErrors({});
        }, 3000);

    } catch (error) {
        console.error(error);
        setStatus("idle");
    }
  };

  return (
    <section id="contact" className="bg-background" style={{ paddingTop: 140, paddingBottom: 140 }}>
      <div className="mx-auto" style={{ maxWidth: 1400, paddingLeft: 32, paddingRight: 32 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] gap-12 lg:gap-20 items-start">
          {/* Information column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1]}}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#ECECF4] text-primary font-semibold text-[14px] hover:bg-[#f2eeff] hover:border-primary transition-colors" style={{ padding: "10px 18px" }}>
              <Mail size={16} /> Contact Us
            </span>
            <h2 className="mt-6 font-display font-extrabold text-heading text-[clamp(26px,8vw,54px)]" style={{ lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Let's Start Your{" "}
              <span style={{ background: "linear-gradient(90deg,#6C4EF6,#9A7EFF)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Journey {" "}
              </span>
              Together
            </h2>
            <p className="mt-6 text-[16px] leading-[1.8] text-[#70708A] max-w-130">
              Whether you're interested in learning a new language, preparing for an international certification, or enrolling your child in one of our language programs, our team is here to help. Send us a message and we'll get back to you as soon as possible.
            </p>

            <div className="mt-8 flex flex-col gap-1">
              {contactCards.map((c, i) => (
                <motion.div
                  key={c.subtitle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 * i }}
                  className="group py-2 flex items-start gap-4.5"
                >
                  <div className="size-12 shrink-0 rounded-full bg-[#eee9ff] text-primary grid place-items-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <c.icon size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted font-semibold">{c.subtitle}</div>
                    <div className="mt-1 font-display font-semibold text-heading text-[17px]">{c.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1]}}
            className="relative"
          >
            {/* Decorative floating elements */}
            <motion.div
              aria-hidden
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 size-14 rounded-2xl bg-[#eee9ff] grid place-items-center opacity-20 pointer-events-none"
            >
              <Send size={22} className="text-primary" />
            </motion.div>
            <motion.div
              aria-hidden
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-4 size-12 rounded-full bg-[#ffe8d6] grid place-items-center opacity-20 pointer-events-none"
            >
              <Globe size={20} className="text-secondary" />
            </motion.div>
            <motion.div
              aria-hidden
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -right-8 size-14 rounded-2xl bg-[#dbeafe] grid place-items-center opacity-20 pointer-events-none"
            >
              <MapPin size={22} className="text-accent-blue" />
            </motion.div>
            <motion.div
              aria-hidden
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-24 -left-6 size-10 rounded-full bg-[#dcfce7] grid place-items-center opacity-20 pointer-events-none"
            >
              <Sparkles size={18} className="text-success" />
            </motion.div>

            <form
              onSubmit={submit}
              noValidate
              className="relative bg-white rounded-[24px] lg:rounded-[36px] shadow-[0_20px_50px_rgba(20,20,40,.08)]"
              style={{ padding: "clamp(24px, 4vw, 48px)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-semibold text-heading mb-2">First Name</label>
                  <input  
                    name="firstName"
                    value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)} 
                    className="w-full h-12 rounded-[18px] bg-[#FCFCFE] border px-5 text-[15px] text-heading placeholder:text-[#A3A3B7] outline-none transition-all" 
                    placeholder="John" 
                  />
                  {errors.firstName && <p className="mt-1.5 text-[12px] text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-heading mb-2">Last Name</label>
                  <input
                    name = "lastName"
                    value={form.lastName} 
                    onChange={(e) => set("lastName", e.target.value)} 
                    className="w-full h-12 rounded-[18px] bg-[#FCFCFE] border px-5 text-[15px] text-heading placeholder:text-[#A3A3B7] outline-none transition-all" placeholder="Doe" />
                    {errors.lastName && <p className="mt-1.5 text-[12px] text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mt-4 grid gap-4">
                <div>
                  <label className="block text-[13px] font-semibold text-heading mb-2">Email Address</label>
                  <input 
                    name="email"
                    value={form.email}
                    type="email"
                    onChange={(e) => set("email", e.target.value)} 
                    className="w-full h-12 rounded-[18px] bg-[#FCFCFE] border px-5 text-[15px] text-heading placeholder:text-[#A3A3B7] outline-none transition-all" 
                    placeholder="you@example.com" 
                  />
                  {errors.email && <p className="mt-1.5 text-[12px] text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-heading mb-2">Phone Number</label>
                  <input
                    name = "phone" 
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="w-full h-12 rounded-[18px] bg-[#FCFCFE] border px-5 text-[15px] text-heading placeholder:text-[#A3A3B7] outline-none transition-all" placeholder="+213 ..." />
                    {errors.phone && <p className="mt-1.5 text-[12px] text-red-500">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-heading mb-2">Course of Interest</label>
                  <div className="relative">
                    <select
                      name="course"
                      value={form.course}
                      onChange={(e) => set("course", e.target.value)}
                      className="w-full h-12 rounded-[18px] bg-[#FCFCFE] border px-5 text-[15px] text-heading placeholder:text-[#A3A3B7] outline-none transition-all appearance-none pr-12 cursor-pointer"
                    >
                      <option value="">Select a course...</option>
                      {courseOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <ChevronDown size={18} className="absolute right-5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
                  </div>
                  {errors.course && <p className="mt-1.5 text-[12px] text-red-500">{errors.course}</p>}
                </div>
                <div>
                  <label className="block text-[13px] font-semibold text-heading mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Tell us about your goals..."
                    className="w-full rounded-[18px] bg-[#FCFCFE] border px-5 py-4 text-[15px] text-heading placeholder:text-[#A3A3B7] outline-none transition-all resize-none "
                    style={{ minHeight: 100 }}
                  />
                  {errors.message && <p className="mt-1.5 text-[12px] text-red-500">{errors.message}</p>}
                </div>
              </div>

              <div className="mt-6">
                <motion.button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 h-14 w-full sm:w-55 rounded-[18px] text-white font-semibold text-[15px] shadow-[0_15px_35px_rgba(108,78,246,.35)] hover:shadow-[0_25px_50px_rgba(108,78,246,.45)] transition-all disabled:opacity-90"
                  style={{ background: "linear-gradient(90deg,#6C4EF6,#7E63FF)" }}
                >
                  Send Message
                  <Send size={17} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}