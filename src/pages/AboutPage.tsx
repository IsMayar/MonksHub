import { FiCheckCircle } from "react-icons/fi";
import {
  LearningPath,
  MetricsBand,
  PageFrame,
  SectionIntro,
} from "../components/site/MarketingSections";
import { Badge } from "../components/ui/badge";
import { gallery, learningPath } from "../data/siteContent";

export function AboutPage() {
  return (
    <PageFrame>
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge variant="success">About MonksHub</Badge>
            <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              A career studio for learners who want proof, not just progress bars.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              MonksHub was shaped around a simple idea: people learn faster when
              they build realistic work, receive clear human feedback, and know
              how to explain what they made. The platform combines online
              lessons, live studios, mentor review, and career practice into one
              focused learning rhythm.
            </p>
          </div>
          <img
            src={gallery.about}
            alt="MonksHub learners collaborating"
            className="h-[520px] w-full rounded-lg object-cover"
          />
        </div>
      </section>

      <MetricsBand />

      <section className="bg-stone-50 py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionIntro
            align="left"
            eyebrow="What we believe"
            title="Good online education should feel personal and concrete."
            copy="Our courses are intentionally smaller than giant content libraries. The point is to finish meaningful work and know what to do next."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Feedback beats passive watching.",
              "Projects should mirror real constraints.",
              "Career support belongs inside the course.",
              "Learners need momentum, not overwhelm.",
            ].map((principle) => (
              <div key={principle} className="rounded-lg border border-slate-200 bg-white p-5">
                <FiCheckCircle className="text-emerald-700" aria-hidden="true" />
                <p className="mt-4 font-semibold text-slate-950">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LearningPath />

      <section className="bg-white py-16">
        <div className="container">
          <SectionIntro
            eyebrow="Inside a cohort"
            title="The same rhythm, adapted to every skill path."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {learningPath.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <span className="text-sm font-bold text-emerald-700">
                  Week {index + 1}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
