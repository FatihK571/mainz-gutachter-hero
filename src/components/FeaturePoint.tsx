import { LucideIcon } from "lucide-react";

interface FeaturePointProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeaturePoint = ({ icon: Icon, title, description }: FeaturePointProps) => (
  <div className="flex gap-5 items-start group">
    <div className="icon-container-md icon-container-accent flex-shrink-0">
      <Icon className="w-7 h-7 text-accent icon-rotate-hover" aria-hidden="true" />
    </div>
    <div className="flex-1">
      <h3 className="heading-3 mb-2 text-foreground">{title}</h3>
      <p className="body text-muted-foreground leading-relaxed max-w-xs">{description}</p>
    </div>
  </div>
);
