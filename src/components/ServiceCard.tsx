import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  const delayClass = delay === 100 ? "delay-100" : delay === 200 ? "delay-200" : "";
  const animationClass = delay > 0 ? `animate-fade-in ${delayClass}` : "animate-fade-in";
  
  return (
    <article 
      className={`group card-interactive ${animationClass}`}
      tabIndex={0}
      role="article"
      aria-label={`${title}: ${description}`}
    >
      <div className="icon-container-lg icon-container-accent mb-6 flex-shrink-0">
        <Icon className="w-7 h-7 text-accent icon-rotate-hover" aria-hidden="true" />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="heading-3 mb-3">{title}</h3>
        <p className="body text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </article>
  );
};
