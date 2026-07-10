import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import {getCourses} from '../api/courseService'
import useFetch from '../hooks/useFetch'
import { motion, AnimatePresence } from "framer-motion";
import {fadeUp, stagger} from '../animations/variants'
import Navbar from '../components/layout/Navbar'
import CourseCard from '../features/courses/CourseCard';
import FiltersPanel from '../features/courses/FiltersPanel';
import {
  Search,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  BookOpen,
  ArrowRight,
  Home as HomeIcon,
  Filter,
} from "lucide-react";
import type { Course } from '../types/course';
import type { Filters } from '../types/filters';

export default function CoursesCatalog() {
  const { data: COURSES, loading, error } = useFetch(getCourses);
  const DEFAULT_FILTERS: Filters = {
    languages: [], levels: [], schedules: [], days: [], maxPrice: 30000, search: "", sort: "Newest",
  };
  
  // Page
  const PAGE_SIZE = 6;

  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    let arr = COURSES.filter((c : Course) => {
      if (filters.languages.length && !filters.languages.includes(c.language.name)) return false;
      if (filters.levels.length && !filters.levels.includes(c.level.code)) return false;
      if (c.price > filters.maxPrice) return false;
      if (q) {
        const hay = `${c.name} ${c.language.name} ${c.teacher.first_name} ${c.level.code}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    
    switch (filters.sort) {
      case "Alphabetical": arr = [...arr].sort((a : Course, b : Course) => a.name.localeCompare(b.name)); break;
      case "Price (Low → High)": arr = [...arr].sort((a : Course, b : Course) => a.price - b.price); break;
      case "Price (High → Low)": arr = [...arr].sort((a : Course, b : Course) => b.price - a.price); break;
    }
    return arr;
  }, [COURSES,filters]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const resetFilters = () => { setFilters(DEFAULT_FILTERS); setPage(1); };
  
  if  (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <main className="min-h-screen bg-background text-body">
      <Navbar />
      
      <section className="relative pt-20 pb-16 lg:pb-20 overflow-hidden">
        <div className='py-8' 
          style={{
            background: "radial-gradient(circle at top left, rgba(108,78,246,.08), transparent 45%), radial-gradient(circle at bottom right, rgba(255,140,66,.08), transparent 40%), #F7F8FC",
          }}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,#efeaff_0%,transparent_55%),radial-gradient(ellipse_at_top_right,#ffe6d2_0%,transparent_50%),linear-gradient(to_bottom,#fcfcfe,#f7f8fc)]" />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex absolute right-10 top-32 size-22 rounded-3xl bg-white shadow-[0_20px_50px_rgba(108,78,246,.18)] items-center justify-center rotate-6"
        >
          <span className="text-[33px]">🌍</span>
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden lg:flex absolute right-44 top-56 size-14 rounded-2xl bg-primary text-white items-center justify-center shadow-[0_15px_35px_rgba(108,78,246,.35)] -rotate-6"
        >
          <BookOpen size={21} />
        </motion.div>

        <div className="mx-auto max-w-350 px-6 lg:px-12">
          <motion.nav
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-[13px] text-muted"
          >
            <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition">
              <HomeIcon size={14} /> Home
            </Link>
            <ChevronRight size={13} />
            <span className="text-heading font-medium">Courses</span>
          </motion.nav>

          <motion.div
            initial="hidden" animate="show" variants={stagger}
            className="mt-6 max-w-4xl"
          >
            <motion.h1 variants={fadeUp} className="mt-5 font-display font-extrabold text-heading text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.05]">
              Find Your Perfect <span className="bg-linear-to-r from-primary to-primary-glow bg-clip-text text-transparent">Language Course</span>
            </motion.h1>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 max-w-3xl"
          >
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted" size={17} />
              <input
                type="text"
                value={filters.search}
                onChange={(e) => { setFilters({ ...filters, search: e.target.value }); setPage(1); }}
                placeholder="Search courses..."
                className="w-full h-14 pl-16 pr-40 rounded-[24px] bg-white border border-border shadow-[0_12px_35px_rgba(27,22,63,.06)] text-[15px] text-heading placeholder:text-muted focus:outline-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(108,78,246,.12)] transition-all"
              />
              <button className="hidden sm:inline-flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-2 h-10 px-6 rounded-[18px] bg-primary text-white font-semibold text-[14px] shadow-[0_10px_25px_rgba(108,78,246,.28)] hover:bg-primary-hover hover:scale-[1.03] transition-all">
                Search <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
      
      {/* Filter Side bar */}
      <section className="pb-28">
        <div className="mx-auto max-w-350 px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">

          {/* Sidebar desktop */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <FiltersPanel filters={filters} setFilters={setFilters} onReset={resetFilters} onApply={() => setPage(1)} />
            </div>
          </aside>

          {/* Right column */}
          <div>
            {/* Toolbar */}
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 mb-6">
              <div className="min-w-0 flex items-center gap-3">
                <button
                  onClick={() => setDrawerOpen(true)}
                  className="lg:hidden inline-flex items-center gap-2 h-11 px-4 rounded-2xl bg-white border border-border shadow-sm text-[13px] font-semibold text-heading hover:border-primary hover:text-primary transition"
                >
                  <Filter size={15} /> Filters
                </button>
                <p className="text-[14px] text-body truncate">
                  Showing <span className="font-semibold text-heading">{filtered.length}</span> {filtered.length === 1 ? "course" : "courses"}
                </p>
              </div>

              {/* Sort */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="inline-flex items-center gap-2 h-11 px-4 rounded-2xl bg-white border border-border shadow-sm text-[13.5px] font-medium text-heading hover:border-primary transition"
                >
                  <span className="text-muted">Sort:</span> {filters.sort}
                  <ChevronDown size={15} className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {sortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                      className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-border p-2 z-20"
                    >
                      {["Newest","Alphabetical","Starting Soon","Price (Low → High)","Price (High → Low)"].map((s) => (
                        <button
                          key={s}
                          onClick={() => { setFilters({ ...filters, sort: s }); setSortOpen(false); }}
                          className={`w-full text-left px-4 py-2.5 rounded-xl text-[13.5px] transition ${
                            filters.sort === s ? "bg-[#eee9ff] text-primary font-semibold" : "text-body hover:bg-[#f4f4fa] hover:text-heading"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Grid */}
            {pageItems.length > 0 ? (
              <motion.div
                key={currentPage + filters.search + filters.sort + filters.languages.join() + filters.levels.join() + filters.schedules.join() + filters.days.join() + filters.maxPrice}
                initial="hidden" animate="show" variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {pageItems.map((c: Course) => <CourseCard key={c.id} c={c} />)}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[28px] border border-border shadow-soft p-14 text-center"
              >
                <div className="mx-auto size-24 rounded-3xl bg-[#eee9ff] grid place-items-center text-primary text-4xl">
                  🔍
                </div>
                <h3 className="mt-6 font-display font-bold text-heading text-[22px]">No courses match your search.</h3>
                <p className="mt-2 text-body text-[14.5px] max-w-md mx-auto">
                  Try adjusting your filters or clearing them to explore all our language programs.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-6 inline-flex items-center gap-2 h-12 px-6 rounded-2xl bg-primary text-white font-semibold text-[14px] shadow-[0_12px_28px_rgba(108,78,246,.28)] hover:bg-primary-hover hover:scale-[1.03] transition-all"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}

            {/* Pagination */}
            {pageItems.length > 0 && totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="inline-flex items-center gap-1 h-11 px-4 rounded-2xl bg-white border border-border text-[13.5px] font-medium text-heading hover:border-primary hover:text-primary transition disabled:opacity-40 disabled:pointer-events-none"
                >
                  <ChevronLeft size={15} /> Previous
                </button>
                {Array.from({ length: totalPages }).map((_, i) => {
                  const n = i + 1;
                  const active = n === currentPage;
                  return (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`size-11 rounded-2xl text-[14px] font-semibold transition ${
                        active
                          ? "bg-linear-to-br from-primary to-primary-glow text-white shadow-[0_10px_25px_rgba(108,78,246,.35)]"
                          : "bg-white border border-border text-heading hover:border-primary hover:text-primary"
                      }`}
                    >
                      {n}
                    </button>
                  );
                })}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center gap-1 h-11 px-4 rounded-2xl bg-white border border-border text-[13.5px] font-medium text-heading hover:border-primary hover:text-primary transition disabled:opacity-40 disabled:pointer-events-none"
                >
                  Next <ChevronRight size={15} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-heading/40 z-80 lg:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 left-0 h-full w-85 max-w-[90vw] bg-background z-90 p-5 overflow-y-auto lg:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-display font-extrabold text-heading text-[18px]">Filters</div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="size-10 rounded-2xl bg-white border border-border grid place-items-center hover:text-primary hover:border-primary transition"
                >
                  <X size={18} />
                </button>
              </div>
              <FiltersPanel
                filters={filters}
                setFilters={setFilters}
                onReset={() => { resetFilters(); setDrawerOpen(false); }}
                onApply={() => { setPage(1); setDrawerOpen(false); }}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}