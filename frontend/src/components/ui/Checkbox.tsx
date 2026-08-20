export default function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex items-center gap-3 py-1.5 cursor-pointer group">
      <span
        className={`size-5 rounded-md border-2 grid place-items-center transition-all ${
          checked ? "bg-primary border-primary" : "border-border group-hover:border-primary/60"
        }`}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="size-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M2 6l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <span className="text-[14px] text-body group-hover:text-heading transition">{label}</span>
    </label>
  )
}
