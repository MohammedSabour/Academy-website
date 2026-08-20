export default function PrimaryButton({ children, className = "", as: As = "button", ...props }: any) {
  return (
    <As
      className={
        "group inline-flex items-center gap-2 rounded-2xl bg-primary px-7 h-15 text-white font-semibold text-[17px] " +
        "shadow-[0_15px_35px_rgba(108,78,246,.25)] transition-all duration-300 " +
        "hover:bg-(--color-primary-hover) hover:-translate-y-0.5 hover:scale-[1.02] " +
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 " +
        className
      }
      {...props}
    >
      {children}
    </As>
  )
}
