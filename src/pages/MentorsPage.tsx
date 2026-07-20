import { FiArrowRight, FiMapPin, FiUsers } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import {
  MentorCard,
  NewsletterCTA,
  PageFrame,
  SectionIntro,
} from "../components/site/MarketingSections";
import { Badge } from "../components/ui/badge";
import { buttonStyles } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { mentors, programs } from "../data/siteContent";

export function MentorsPage() {
  return (
    <PageFrame>
      <section className="surface-grid bg-white py-16 lg:py-20">
        <div className="container">
          <SectionIntro
            eyebrow="Mentors"
            title="Practitioner feedback from people who know the work."
            copy="Meet the product, design, engineering, analytics, and growth mentors who review learner projects and coach career storytelling."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </div>
      </section>
      <NewsletterCTA />
    </PageFrame>
  );
}

export function MentorProfilePage() {
  const { id } = useParams();
  const mentor = mentors.find((item) => item.id === id);
  const relatedPrograms = programs.filter((program) => program.mentor === mentor?.name);

  if (!mentor) {
    return (
      <PageFrame>
        <section className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-slate-950">Mentor not found</h1>
          <Link to="/mentors" className={buttonStyles({ className: "mt-6" })}>
            Back to mentors
          </Link>
        </section>
      </PageFrame>
    );
  }

  return (
    <PageFrame>
      <section className="bg-white py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <img
              src={mentor.image}
              alt={mentor.name}
              className="h-[520px] w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <Badge variant="success">{mentor.company}</Badge>
            <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              {mentor.name}
            </h1>
            <p className="mt-3 text-xl font-semibold text-slate-700">{mentor.role}</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{mentor.bio}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Card>
                <CardContent className="pt-5">
                  <FiUsers className="text-emerald-700" aria-hidden="true" />
                  <p className="mt-3 text-2xl font-black">{mentor.students}</p>
                  <p className="text-sm text-slate-600">learners mentored</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-5">
                  <FiMapPin className="text-emerald-700" aria-hidden="true" />
                  <p className="mt-3 text-base font-bold">{mentor.location}</p>
                  <p className="text-sm text-slate-600">mentor hours</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-5">
                  <p className="text-2xl font-black">{mentor.rating}/5</p>
                  <p className="text-sm text-slate-600">student rating</p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold text-slate-950">Credentials</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  {mentor.credentials.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-950">Mentorship style</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">{mentor.approach}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {mentor.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/contact" className={buttonStyles({ className: "mt-8" })}>
              Request a session
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {relatedPrograms.length > 0 && (
        <section className="bg-stone-50 py-16">
          <div className="container">
            <SectionIntro
              align="left"
              title={`Programs led by ${mentor.name.split(" ")[0]}`}
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {relatedPrograms.map((program) => (
                <article key={program.id} className="rounded-lg border border-slate-200 bg-white p-5">
                  <Badge variant="success">{program.category}</Badge>
                  <h3 className="mt-4 text-xl font-bold text-slate-950">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{program.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageFrame>
  );
}
