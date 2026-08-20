export default function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-5 border-b border-border last:border-0">
      <h4 className="font-display font-semibold text-heading text-[15px] mb-3">{title}</h4>
      {children}
    </div>
  )
}
