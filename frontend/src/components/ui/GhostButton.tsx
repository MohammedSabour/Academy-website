export default function GhostButton({ children, className = "", ...props }: any) {
  return (
    <button
      className={
        "group inline-flex items-center gap-2 rounded-2xl bg-white border border-(--color-border) px-7 h-15 font-semibold text-[17px] text-(--color-heading) " +
        "transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary " +
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  )
}
