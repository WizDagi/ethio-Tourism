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

export const HomePage = () => {
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
