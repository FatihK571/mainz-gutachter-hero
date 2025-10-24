import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export const StarRating = ({ 
  rating, 
  maxRating = 5, 
  size = "md",
  className 
}: StarRatingProps) => {
  const clampedRating = Math.min(Math.max(rating, 0), maxRating);
  
  return (
    <div 
      className={cn("flex gap-1", className)}
      role="img" 
      aria-label={`${clampedRating} von ${maxRating} Sternen`}
    >
      {[...Array(maxRating)].map((_, i) => (
        <Star 
          key={i} 
          className={cn(
            sizeClasses[size],
            i < clampedRating 
              ? "fill-accent text-accent" 
              : "fill-none text-muted-foreground/30"
          )}
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">{clampedRating} von {maxRating} Sternen</span>
    </div>
  );
};
