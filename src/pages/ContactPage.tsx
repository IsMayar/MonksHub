import { useState } from "react";
import { FiMail, FiMapPin, FiMessageCircle, FiPhone } from "react-icons/fi";
import { PageFrame, SectionIntro } from "../components/site/MarketingSections";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input, Textarea } from "../components/ui/input";
import { brand, contactTopics } from "../data/siteContent";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageFrame>
      <section className="surface-grid bg-white py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionIntro
              align="left"
              eyebrow="Contact"
              title="Tell us where you want your skills to go next."
              copy="Ask about course fit, team training, mentor applications, partnerships, or building a custom cohort for your organization."
            />
            <div className="mt-8 grid gap-4">
              <ContactItem icon={<FiMail />} title="Email" body={brand.email} />
              <ContactItem icon={<FiPhone />} title="Phone" body={brand.phone} />
              <ContactItem icon={<FiMapPin />} title="Location" body={brand.location} />
            </div>
          </div>

          <Card>
            <CardHeader>
              <Badge variant="success">Response within 1 business day</Badge>
              <CardTitle>Start a conversation</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="rounded-lg bg-emerald-50 p-6">
                  <h2 className="text-xl font-bold text-emerald-900">Message received.</h2>
                  <p className="mt-2 text-sm leading-6 text-emerald-800">
                    Thanks for reaching out. This frontend demo captured the
                    interaction state, and a real build would connect this form
                    to your CRM or inbox.
                  </p>
                </div>
              ) : (
                <form
                  className="grid gap-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      Name
                      <Input required placeholder="Your name" />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-slate-700">
                      Email
                      <Input required type="email" placeholder="you@example.com" />
                    </label>
                  </div>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Topic
                    <select
                      className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                      defaultValue={contactTopics[0]}
                    >
                      {contactTopics.map((topic) => (
                        <option key={topic}>{topic}</option>
                      ))}
                    </select>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-slate-700">
                    Message
                    <Textarea required placeholder="Share your goal, timeline, or team size." />
                  </label>
                  <Button type="submit">
                    Send message
                    <FiMessageCircle aria-hidden="true" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </PageFrame>
  );
}

function ContactItem({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
        {icon}
      </span>
      <div>
        <p className="font-bold text-slate-950">{title}</p>
        <p className="text-sm text-slate-600">{body}</p>
      </div>
    </div>
  );
}
