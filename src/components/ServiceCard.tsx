import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  const delayClass = delay > 0 ? `animate-fade-in animate-delay-${delay}` : "";
  
  return (
    <div className={`group card-interactive ${delayClass}`}>
      <div className="icon-container-lg icon-container-accent mb-6">
        <Icon className="w-7 h-7 text-accent icon-rotate-hover" />
      </div>
      <h3 className="heading-3 mb-3">{title}</h3>
      <p className="body text-muted-foreground">{description}</p>
    </div>
  );
};
