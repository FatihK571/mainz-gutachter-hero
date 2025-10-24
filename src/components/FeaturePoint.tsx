import { LucideIcon } from "lucide-react";

interface FeaturePointProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeaturePoint = ({ icon: Icon, title, description }: FeaturePointProps) => (
  <div className="flex gap-4 items-start group">
    <div className="icon-container-md icon-container-accent flex-shrink-0">
      <Icon className="w-6 h-6 text-accent icon-rotate-hover" />
    </div>
    <div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="body-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);
