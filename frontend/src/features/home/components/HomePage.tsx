import { HeroSlider } from '../../destinations/components/HeroSlider';
import { DestinationGrid } from '../../destinations/components/DestinationGrid';
import { WhyEthiopia } from './WhyEthiopia';
import { ExperiencesSection } from './ExperiencesSection';
import { TravelTipsSection } from './TravelTipsSection';
import { NewsletterSection } from './NewsletterSection';
import { TripQuizSection } from './TripQuizSection';
import { TestimonialsSection } from './TestimonialsSection';
import { GalleryMarqueeSection } from './GalleryMarqueeSection';
import { FloatingActionMenu } from './FloatingActionMenu';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <main className="w-full min-h-screen bg-background relative">
      <FloatingActionMenu />
      <HeroSlider />
      <TripQuizSection />
      <WhyEthiopia />
      <GalleryMarqueeSection />
      <DestinationGrid />
      <ExperiencesSection />
      <TestimonialsSection />
      <TravelTipsSection />
      <NewsletterSection />
    </main>
  );
};
