import { Button } from "@/components/ui/button";
import { Phone, Shield, FileCheck } from "lucide-react";
import heroImage from "@/assets/hero-gutachter.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
                Kfz-Gutachter Mainz
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Unfall gehabt?{" "}
              <span className="text-primary">Wir klären das für Sie!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Als unabhängige Sachverständige stehen wir Ihnen mit Expertise und 
              Neutralität zur Seite. Professionelle Unfallgutachten für Ihren 
              gerechten Schadensersatz.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-foreground">
                <Shield className="w-5 h-5 text-accent" />
                <span className="font-medium">Unabhängig & neutral</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <FileCheck className="w-5 h-5 text-accent" />
                <span className="font-medium">Gerichtlich anerkannt</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Phone className="w-5 h-5 text-accent" />
                <span className="font-medium">Schnelle Bearbeitung</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="text-base font-semibold"
              >
                Jetzt Beratung anfordern
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-base font-semibold border-2"
              >
                Kostenlos anrufen
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Vertrauen Sie auf unsere Erfahrung:
              </p>
              <div className="flex gap-8 text-foreground">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Gutachten/Jahr</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24h</div>
                  <div className="text-sm text-muted-foreground">Vor-Ort-Service</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in lg:animate-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]">
              <img 
                src={heroImage} 
                alt="Professioneller Kfz-Gutachter bei der Fahrzeugbegutachtung in Mainz"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-[var(--shadow-lg)] border border-border max-w-xs hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">100% Unabhängig</div>
                  <div className="text-sm text-muted-foreground">Keine Werkstattbindung</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
