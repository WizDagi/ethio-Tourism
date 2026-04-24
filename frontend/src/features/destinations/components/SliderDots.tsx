import { cn } from '@/lib/utils';

interface SliderDotsProps {
  slides: any[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export const SliderDots = ({ slides, currentIndex, onSelect }: SliderDotsProps) => {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            currentIndex === index ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/80"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
