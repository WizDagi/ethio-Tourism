import { HeroSlider } from '../../destinations/components/HeroSlider';
import { DestinationGrid } from '../../destinations/components/DestinationGrid';
import { WhyEthiopia } from './WhyEthiopia';
import { ExperiencesSection } from './ExperiencesSection';
import { TravelTipsSection } from './TravelTipsSection';
import { NewsletterSection } from './NewsletterSection';

export const HomePage = () => {
  return (
    <main className="w-full min-h-screen bg-background">
      <HeroSlider />
      <WhyEthiopia />
      <DestinationGrid />
      <ExperiencesSection />
      <TravelTipsSection />
      <NewsletterSection />
    </main>
  );
};
