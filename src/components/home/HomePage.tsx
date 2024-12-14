import React from 'react';
import { HeroSection } from './HeroSection';
import { FeatureSection } from './FeatureSection';
import { StatsSection } from './StatsSection';
import { TestimonialSection } from './TestimonialSection';
import { FeaturedCourses } from './FeaturedCourses';
import { FAQSection } from './FAQSection';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <FeaturedCourses />
      <StatsSection />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
}