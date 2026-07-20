import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import {
  CatalogTools,
  PageFrame,
  ProgramCard,
  SectionIntro,
} from "../components/site/MarketingSections";
import { buttonStyles } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { programs } from "../data/siteContent";

export function CoursesPage() {
  const categories = ["All", ...Array.from(new Set(programs.map((course) => course.category)))];
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPrograms = useMemo(() => {
    const query = search.trim().toLowerCase();

    return programs.filter((program) => {
      const categoryMatch = activeCategory === "All" || program.category === activeCategory;
      const queryMatch =
        !query ||
        [program.title, program.summary, program.mentor, ...program.tags]
          .join(" ")
          .toLowerCase()
          .includes(query);

      return categoryMatch && queryMatch;
    });
  }, [activeCategory, search]);

  return (
    <PageFrame>
      <section className="surface-grid bg-white py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <SectionIntro
              align="left"
              eyebrow="Courses"
              title="Pick a path with a concrete finish line."
              copy="Browse mentor-led programs built around real deliverables, focused feedback, and skills that can be shown in interviews or team reviews."
            />
            <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <Badge variant="success">Next cohort starts soon</Badge>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Unsure where to begin? Tell us your target role and we will map
                a practical course sequence.
              </p>
              <Link
                to="/contact"
                className={buttonStyles({ variant: "dark", className: "mt-5 w-full" })}
              >
                Get course guidance
                <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-10">
            <CatalogTools
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              search={search}
              onSearchChange={setSearch}
            />
          </div>
        </div>
      </section>

      <section className="bg-stone-50 py-16">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
          {filteredPrograms.length === 0 && (
            <div className="rounded-lg border border-slate-200 bg-white p-10 text-center">
              <h2 className="text-xl font-bold text-slate-950">No matching courses found.</h2>
              <p className="mt-2 text-slate-600">Try a broader search or switch categories.</p>
            </div>
          )}
        </div>
      </section>
    </PageFrame>
  );
}
