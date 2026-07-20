import { useMemo, useState } from "react";
import {
  InsightCard,
  NewsletterCTA,
  PageFrame,
  SectionIntro,
} from "../components/site/MarketingSections";
import { Button } from "../components/ui/button";
import { insights } from "../data/siteContent";

export function InsightsPage() {
  const categories = ["All", ...Array.from(new Set(insights.map((post) => post.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights = useMemo(
    () =>
      activeCategory === "All"
        ? insights
        : insights.filter((post) => post.category === activeCategory),
    [activeCategory]
  );

  return (
    <PageFrame>
      <section className="surface-grid bg-white py-14 lg:py-16">
        <div className="container">
          <SectionIntro
            eyebrow="Insights"
            title="Useful field notes for growing careers."
            copy="Short, practical essays from mentors on portfolios, campaigns, dashboards, interviews, and better learning habits."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "dark" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredInsights.map((post) => (
            <InsightCard key={post.title} post={post} />
          ))}
        </div>
      </section>
      <NewsletterCTA />
    </PageFrame>
  );
}
