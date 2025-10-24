import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  delay?: number;
}

export const TestimonialCard = ({ quote, name, location, delay = 0 }: TestimonialCardProps) => {
  const delayClass = delay > 0 ? `animate-fade-in animate-delay-${delay}` : "";
  
  return (
    <div className={`card-interactive ${delayClass}`}>
      <div className="flex gap-1 mb-4" role="img" aria-label="5 von 5 Sternen">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
        ))}
      </div>
      <p className="text-foreground leading-relaxed mb-6 italic">"{quote}"</p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="body-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  );
};
