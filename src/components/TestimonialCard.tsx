import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarRating } from "@/components/StarRating";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating?: number;
  avatarUrl?: string;
  maxQuoteLength?: number;
  delay?: number;
}

const truncateQuote = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace > 0 ? truncated.slice(0, lastSpace) + '...' : truncated + '...';
};

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const TestimonialCard = ({ 
  quote, 
  name, 
  location, 
  rating = 5,
  avatarUrl,
  maxQuoteLength = 180,
  delay = 0 
}: TestimonialCardProps) => {
  const delayClass = delay > 0 ? `animate-fade-in-up animate-delay-${delay}` : "animate-fade-in-up";
  const truncatedQuote = truncateQuote(quote, maxQuoteLength);
  
  return (
    <figure className={`testimonial-card ${delayClass}`}>
      {/* Header with Avatar and Info */}
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={`${name} Profilbild`} />
          <AvatarFallback className="bg-accent/10 text-accent font-semibold">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground truncate">{name}</p>
          <p className="text-sm text-muted-foreground truncate">{location}</p>
        </div>
      </div>

      {/* Star Rating */}
      <StarRating rating={rating} size="sm" className="mb-4" />

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-foreground leading-relaxed italic">
          "{truncatedQuote}"
        </p>
      </blockquote>
    </figure>
  );
};
