export const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
};
export const stagger: any = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};