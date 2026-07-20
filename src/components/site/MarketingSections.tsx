import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiMail,
  FiSearch,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import type { Mentor, Program } from "../../data/siteContent";
import {
  brand,
  faqs,
  gallery,
  insights,
  learningPath,
  mentors,
  metrics,
  outcomes,
  programs,
  testimonials,
} from "../../data/siteContent";
import { cn } from "../../lib/utils";
import { Badge } from "../ui/badge";
import { Button, buttonStyles } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl",
        align === "center" ? "text-center" : "mx-0 text-left"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-bold uppercase",
            tone === "dark" ? "text-emerald-200" : "text-emerald-700"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
          tone === "dark" ? "text-white" : "text-slate-950"
        )}
      >
        {title}
      </h2>
      {copy && (
        <p
          className={cn(
            "mt-4 text-base leading-7",
            tone === "dark" ? "text-slate-300" : "text-slate-600"
          )}
        >
          {copy}
        </p>
      )}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="surface-grid overflow-hidden border-b border-slate-200 bg-white">
      <div className="container grid gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="mb-6 flex flex-wrap gap-2">
            {["Spring cohort open", "Mentor-led", "Project-based"].map((item) => (
              <Badge key={item} variant={item === "Spring cohort open" ? "success" : "muted"}>
                {item}
              </Badge>
            ))}
          </div>

          <p className="text-sm font-bold uppercase text-emerald-700">
            {brand.name} career studio
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Build a portfolio employers can actually trust.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            MonksHub pairs focused online courses with weekly mentor reviews,
            live studios, and career-ready projects for designers, developers,
            marketers, and operators.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/courses" className={buttonStyles({ size: "lg" })}>
              Explore courses
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link
              to="/mentors"
              className={buttonStyles({ variant: "outline", size: "lg" })}
            >
              Meet mentors
            </Link>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {metrics.slice(0, 3).map((metric) => (
              <div key={metric.label} className="rounded-lg border border-slate-200 bg-white p-4">
                <p className="text-2xl font-black text-slate-950">{metric.value}</p>
                <p className="mt-1 text-sm text-slate-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-lg border border-slate-200 bg-stone-50 p-3 shadow-soft">
            <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
              <img
                src={programs[0].image}
                alt="Frontend student project preview"
                className="h-72 w-full rounded-md object-cover sm:h-full"
              />
              <div className="grid gap-3">
                <img
                  src={gallery.cover}
                  alt="Learner reviewing course material"
                  className="h-40 w-full rounded-md object-cover"
                />
                <div className="rounded-md bg-slate-950 p-5 text-white">
                  <div className="flex items-center justify-between">
                    <Badge variant="success">Next live studio</Badge>
                    <FiUsers aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold">Portfolio critique</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    34 learners joining with design, code, analytics, and launch
                    briefs ready for review.
                  </p>
                  <div className="mt-5 flex -space-x-3">
                    {mentors.slice(0, 4).map((mentor) => (
                      <img
                        key={mentor.id}
                        src={mentor.image}
                        alt={mentor.name}
                        className="h-10 w-10 rounded-full border-2 border-slate-950 object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function MetricsBand() {
  return (
    <section className="bg-stone-50 py-10">
      <div className="container grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className={cn("rounded-lg p-5", metric.tone)}>
            <p className="text-3xl font-black text-slate-950">{metric.value}</p>
            <p className="mt-1 text-sm font-medium text-slate-700">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeaturedPrograms() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            align="left"
            eyebrow="Course catalog"
            title="Focused paths with outcomes you can show."
            copy="Each program is designed around a real deliverable, mentor review rhythm, and the practical skills hiring teams ask about."
          />
          <Link
            to="/courses"
            className={buttonStyles({ variant: "outline", className: "shrink-0" })}
          >
            View catalog
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {programs.slice(0, 3).map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProgramCard({
  program,
  index = 0,
}: {
  program: Program;
  index?: number;
}) {
  return (
    <motion.article
      variants={sectionMotion}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className={cn(
        "overflow-hidden rounded-lg border bg-white shadow-sm transition-shadow hover:shadow-soft",
        program.accent
      )}
    >
      <img src={program.image} alt="" className="h-52 w-full object-cover" />
      <div className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="success">{program.category}</Badge>
          <span className="text-sm font-bold text-slate-950">{program.price}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold leading-tight text-slate-950">
          {program.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{program.summary}</p>
        <div className="mt-5 grid gap-2 text-sm text-slate-600">
          <span className="flex items-center gap-2">
            <FiClock className="text-emerald-700" aria-hidden="true" />
            {program.duration}
          </span>
          <span className="flex items-center gap-2">
            <FiBookOpen className="text-emerald-700" aria-hidden="true" />
            {program.lessons} lessons
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {program.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function LearningPath() {
  return (
    <section className="bg-stone-50 py-16 lg:py-20">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionIntro
          align="left"
          eyebrow="How it works"
          title="A learning rhythm built for real progress."
          copy="MonksHub keeps the work small enough to finish and serious enough to matter. The result is momentum learners can feel every week."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {learningPath.map((step, index) => (
            <Card key={step.title}>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-slate-600">{step.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OutcomesSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container">
        <SectionIntro
          eyebrow="Learner outcomes"
          title="Not just lessons. Proof of ability."
          copy="Every MonksHub path produces visible work, sharper language, and practical confidence for the next opportunity."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <article key={outcome.title} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <img src={outcome.image} alt="" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-950">{outcome.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{outcome.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MentorPreview() {
  return (
    <section className="bg-slate-950 py-16 text-white lg:py-20">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            align="left"
            tone="dark"
            eyebrow="Mentor network"
            title="Learn from people who review work for a living."
            copy="Our mentors are practitioners. They help learners make better tradeoffs, present work clearly, and build habits that last."
          />
          <Link
            to="/mentors"
            className={buttonStyles({ variant: "secondary", className: "shrink-0" })}
          >
            View mentors
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.slice(0, 3).map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} dark />
          ))}
        </div>
      </div>
    </section>
  );
}

export function MentorCard({ mentor, dark = false }: { mentor: Mentor; dark?: boolean }) {
  return (
    <Link
      to={`/mentor/${mentor.id}`}
      className={cn(
        "group block overflow-hidden rounded-lg border transition hover:-translate-y-1",
        dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white shadow-sm"
      )}
    >
      <img src={mentor.image} alt={mentor.name} className="h-64 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className={cn("text-xl font-bold", dark ? "text-white" : "text-slate-950")}>
              {mentor.name}
            </h3>
            <p className={cn("mt-1 text-sm", dark ? "text-slate-300" : "text-slate-600")}>
              {mentor.role}
            </p>
          </div>
          <span className="flex items-center gap-1 rounded-md bg-amber-100 px-2 py-1 text-xs font-bold text-amber-800">
            <FiStar aria-hidden="true" />
            {mentor.rating}
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {mentor.skills.map((skill) => (
            <Badge key={skill} variant={dark ? "default" : "muted"}>
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-stone-50 py-16 lg:py-20">
      <div className="container">
        <SectionIntro
          eyebrow="Student stories"
          title="Learners leave with better work and better words for it."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
                  <FiCheckCircle aria-hidden="true" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-slate-700">"{item.text}"</p>
                <div className="mt-6">
                  <p className="font-bold text-slate-950">{item.name}</p>
                  <p className="text-sm text-slate-600">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightsPreview() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            align="left"
            eyebrow="Career insights"
            title="Practical notes from the mentor desk."
          />
          <Link to="/blogs" className={buttonStyles({ variant: "outline" })}>
            Read insights
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {insights.slice(0, 3).map((post) => (
            <InsightCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function InsightCard({
  post,
}: {
  post: (typeof insights)[number];
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <img src={post.image} alt="" className="h-52 w-full object-cover" />
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
          <Badge variant="rose">{post.category}</Badge>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold leading-tight text-slate-950">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{post.summary}</p>
        <p className="mt-5 text-sm font-semibold text-slate-700">{post.author}</p>
      </div>
    </article>
  );
}

export function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-stone-50 py-16 lg:py-20">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionIntro
          align="left"
          eyebrow="FAQ"
          title="Answers before you enroll."
          copy="A few practical details about schedule, feedback, outcomes, and team training."
        />
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-lg border border-slate-200 bg-white">
              <button
                type="button"
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-slate-950"
              >
                {faq.question}
                <span className="text-xl text-emerald-700">{active === index ? "-" : "+"}</span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: active === index ? "auto" : 0 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NewsletterCTA() {
  return (
    <section className="bg-emerald-700 py-14 text-white">
      <div className="container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase text-emerald-100">Weekly career briefing</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Get course drops, mentor notes, and portfolio prompts.
          </h2>
        </div>
        <form
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="relative flex-1">
            <FiMail
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <Input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="pl-10"
            />
          </div>
          <Button variant="dark" type="submit">
            Join list
          </Button>
        </form>
      </div>
    </section>
  );
}

export function CatalogTools({
  categories,
  activeCategory,
  onCategoryChange,
  search,
  onSearchChange,
}: {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "dark" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <label className="relative block">
          <span className="sr-only">Search courses</span>
          <FiSearch
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search courses, skills, mentors"
            className="pl-10"
          />
        </label>
      </div>
    </div>
  );
}
