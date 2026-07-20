import {
  FAQSection,
  FeaturedPrograms,
  HeroSection,
  InsightsPreview,
  LearningPath,
  MentorPreview,
  MetricsBand,
  NewsletterCTA,
  OutcomesSection,
  PageFrame,
  TestimonialsSection,
} from "../components/site/MarketingSections";

export function HomePage() {
  return (
    <PageFrame>
      <HeroSection />
      <MetricsBand />
      <FeaturedPrograms />
      <LearningPath />
      <MentorPreview />
      <OutcomesSection />
      <TestimonialsSection />
      <InsightsPreview />
      <FAQSection />
      <NewsletterCTA />
    </PageFrame>
  );
}
