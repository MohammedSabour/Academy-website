import {SlidersHorizontal} from "lucide-react";
import FilterSection from './FilterSection'
import Checkbox from '../../components/ui/Checkbox'
import type {Filters} from '../../types/filters'


export default function FiltersPanel({filters, setFilters, onReset, onApply,}: {filters: Filters; setFilters: (f: Filters) => void; onReset: () => void; onApply?: () => void;}) {
  
  const LANGUAGES = ["English","French","German","Spanish","Arabic"];
  const LEVELS = ["A1.1","A2.1","B1.1","B2.1","C1.1","A1.2","A2.2","B1.2","B2.2","C1.2"];
  // const SCHEDULES = ["Morning","Afternoon","Evening"];
  // const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat"];
  // const DAY_LABELS = { Mon:"Monday", Tue:"Tuesday", Wed:"Wednesday", Thu:"Thursday", Fri:"Friday", Sat:"Saturday" };
  const toggle = (key: "languages" | "levels" | "schedules" | "days", value: string) => {
    const arr = filters[key];
    setFilters({ ...filters, [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] });
  };

  return (
    <div className="bg-white rounded-[28px] shadow-soft border border-border p-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="size-9 rounded-xl bg-[#eee9ff] grid place-items-center text-primary">
          <SlidersHorizontal size={16} />
        </div>
        <div>
          <div className="font-display font-bold text-heading text-[17px]">Filters</div>
          <div className="text-[12px] text-muted">Refine your search</div>
        </div>
      </div>

      <FilterSection title="Language">
        {LANGUAGES.map((l) => (
          <Checkbox key={l} label={l} checked={filters.languages.includes(l)} onChange={() => toggle("languages", l)} />
        ))}
      </FilterSection>

      <FilterSection title="Level">
        <div className="grid grid-cols-3 gap-2">
          {LEVELS.map((l) => {
            const active = filters.levels.includes(l);
            return (
              <button
                key={l}
                onClick={() => toggle("levels", l)}
                className={`h-9 rounded-xl text-[13px] font-semibold transition ${
                  active ? "bg-primary text-white shadow-[0_8px_20px_rgba(108,78,246,.28)]" : "bg-[#f4f4fa] text-heading hover:bg-[#eee9ff]"
                }`}
              >
                {l}
              </button>
            );
          })}
        </div>
      </FilterSection>

      {/* <FilterSection title="Schedule">
        {SCHEDULES.map((s) => (
          <Checkbox key={s} label={s} checked={filters.schedules.includes(s)} onChange={() => toggle("schedules", s)} />
        ))}
      </FilterSection> */}

      {/* <FilterSection title="Days">
        <div className="flex flex-wrap gap-2">
          {DAYS.map((d) => {
            const active = filters.days.includes(d);
            return (
              <button
                key={d}
                onClick={() => toggle("days", d)}
                className={`px-3 h-9 rounded-full text-[13px] font-semibold transition ${
                  active ? "bg-primary text-white" : "bg-[#f4f4fa] text-heading hover:bg-[#eee9ff]"
                }`}
                title={DAY_LABELS[d]}
              >
                {d}
              </button>
            );
          })}
        </div>
      </FilterSection> */}

      <div className="pt-5 flex flex-col gap-2">
        <button
          onClick={onApply}
          className="h-12 rounded-2xl bg-primary text-white font-semibold text-[14px] shadow-[0_12px_28px_rgba(108,78,246,.28)] hover:bg-primary-hover hover:scale-[1.02] transition-all"
        >
          Apply Filters
        </button>
        <button
          onClick={onReset}
          className="h-11 rounded-2xl border border-border text-heading text-[13px] font-medium hover:border-primary hover:text-primary transition"
        >
          Reset Filters
        </button>
      </div>
    </div>
  )
}