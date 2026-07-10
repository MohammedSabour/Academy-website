import { Link } from "react-router-dom";

export default function GhostButton ({ children, className = "", to, ...props } : any) {
  return (
    <Link 
      to={to}
      className={
        "group inline-flex items-center gap-2 rounded-[16px] bg-white border border-border px-7 h-15 font-semibold text-[17px] text-heading " +
        "transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary " +
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 " +
        className}
      {...props}
    >
      {children}
    </Link>
  )
}