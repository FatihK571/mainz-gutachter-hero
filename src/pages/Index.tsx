import { Button } from "@/components/ui/button";
import { Phone, Shield, FileCheck, ClipboardList, BadgeEuro, FileText, Award, MapPin, Scale, Clock, MessageCircle, PhoneCall, Car, FileCheck2, Star, Mail } from "lucide-react";
import heroImage from "@/assets/hero-gutachter.jpg";
import founderImage from "@/assets/founder-portrait.jpg";
import { ContactForm } from "@/components/ContactForm";

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

      {/* Services Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionelle Sachverständigen-Dienstleistungen für Ihre Ansprüche
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Unfallgutachten */}
          <div className="group bg-card rounded-xl p-8 border border-border shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
              <ClipboardList className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Unfallgutachten
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Detaillierte Schadensanalyse und gerichtsfeste Dokumentation für Ihren Versicherungsfall.
            </p>
          </div>

          {/* Card 2: Fahrzeugbewertung */}
          <div className="group bg-card rounded-xl p-8 border border-border shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
              <BadgeEuro className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Fahrzeugbewertung
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Präzise Wertermittlung für Kauf, Verkauf oder Versicherungszwecke Ihres Fahrzeugs.
            </p>
          </div>

          {/* Card 3: Versicherungsansprüche */}
          <div className="group bg-card rounded-xl p-8 border border-border shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow duration-300">
            <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/15 transition-colors">
              <FileText className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Versicherungsansprüche
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Kompetente Unterstützung bei der Durchsetzung Ihrer berechtigten Schadensersatzansprüche.
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="bg-primary-light/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Warum Sie uns wählen sollten
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Als unabhängige Sachverständige vereinen wir Expertise mit persönlichem Service. 
                Neutralität, Schnelligkeit und Fachkompetenz sind unsere Grundpfeiler – damit Sie 
                zu Ihrem Recht kommen. Wir stehen Ihnen mit Rat und Tat zur Seite.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Point 1: Erfahrung */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Langjährige Erfahrung</h3>
                  <p className="text-sm text-muted-foreground">
                    Über 15 Jahre Expertise in Unfallgutachten und Fahrzeugbewertung
                  </p>
                </div>
              </div>

              {/* Point 2: Regional */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Mainz & Umgebung</h3>
                  <p className="text-sm text-muted-foreground">
                    Vor-Ort-Service in der gesamten Region – schnell und unkompliziert
                  </p>
                </div>
              </div>

              {/* Point 3: Unabhängig */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Vollkommen unabhängig</h3>
                  <p className="text-sm text-muted-foreground">
                    Neutral und ohne Werkstattbindung – nur Ihr Interesse zählt
                  </p>
                </div>
              </div>

              {/* Point 4: Schnell */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Schnelle Bearbeitung</h3>
                  <p className="text-sm text-muted-foreground">
                    24-Stunden-Service und zügige Gutachtenerstellung
                  </p>
                </div>
              </div>

              {/* Point 5: Persönlich */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Persönlich erreichbar</h3>
                  <p className="text-sm text-muted-foreground">
                    Direkter Kontakt zu Ihrem Sachverständigen – keine Warteschleifen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              So einfach geht's
            </h2>
            <p className="text-lg text-muted-foreground">
              Ihr Weg zum Gutachten in nur drei Schritten
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden lg:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-accent via-accent to-accent">
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[12px] border-l-accent"></div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
              {/* Step 1 */}
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-[var(--shadow-lg)]">
                    <PhoneCall className="w-14 h-14 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Kontakt aufnehmen
                </h3>
                <p className="text-muted-foreground">
                  Rufen Sie uns an oder nutzen Sie unser Kontaktformular für eine erste Beratung.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-[var(--shadow-lg)]">
                    <Car className="w-14 h-14 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Begutachtung vor Ort
                </h3>
                <p className="text-muted-foreground">
                  Wir kommen zu Ihnen und nehmen eine detaillierte Schadensbegutachtung vor.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-[var(--shadow-lg)]">
                    <FileCheck2 className="w-14 h-14 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Gutachten erhalten
                </h3>
                <p className="text-muted-foreground">
                  Sie erhalten Ihr professionelles Gutachten zur Weiterleitung an die Versicherung.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              variant="hero" 
              size="lg"
              className="text-base font-semibold"
            >
              Jetzt Termin vereinbaren
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]">
                  <img 
                    src={founderImage} 
                    alt="Michael Schneider, Kfz-Sachverständiger und Geschäftsführer"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Right */}
              <div className="order-1 lg:order-2 space-y-6">
                <div>
                  <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                    Über uns
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                    Ihr Partner für faire Gutachten
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Michael Schneider
                    </h3>
                    <p className="text-accent font-medium">
                      Kfz-Sachverständiger & Geschäftsführer
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Seit über 15 Jahren bin ich als unabhängiger Kfz-Sachverständiger in Mainz und 
                    Umgebung tätig. Meine Expertise liegt in der präzisen und neutralen Begutachtung 
                    von Fahrzeugschäden. Mir ist es wichtig, dass Sie als Kunde im Mittelpunkt stehen – 
                    ohne Werkstattbindung, ohne versteckte Interessen. Mit persönlicher Beratung und 
                    schneller Bearbeitung unterstütze ich Sie dabei, zu Ihrem Recht zu kommen. 
                    Vertrauen und Transparenz sind die Grundpfeiler meiner Arbeit.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-foreground">Zertifiziert & geprüft</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium text-foreground">15+ Jahre Erfahrung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-primary-light/20 via-background to-primary-light/10 py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Das sagen unsere Kunden
              </h2>
              <p className="text-lg text-muted-foreground">
                Echte Erfahrungen von Menschen, denen wir helfen durften
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-md)] border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "Schnell und professionell – hat mir sehr geholfen nach meinem Unfall."
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">Sandra Müller</p>
                  <p className="text-sm text-muted-foreground">Mainz</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-md)] border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "Unabhängige Beratung ohne Druck – genau das, was ich nach dem Unfall brauchte."
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">Thomas Weber</p>
                  <p className="text-sm text-muted-foreground">Wiesbaden</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-md)] border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "Kompetent, fair und persönlich – ich würde jederzeit wieder hier hingehen."
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">Anna Schmidt</p>
                  <p className="text-sm text-muted-foreground">Frankfurt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Kontakt & Standort
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Rufen Sie uns an oder senden Sie eine Nachricht – wir sind für Sie da 
                und beraten Sie gerne zu Ihrem Anliegen.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left: Contact Info & Map */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Kontaktinformationen
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Phone */}
                    <a 
                      href="tel:+4961311234567"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Telefon</p>
                        <p className="text-muted-foreground">+49 (0) 6131 123 45 67</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a 
                      href="mailto:info@kfz-gutachter-mainz.de"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/15 transition-colors">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">E-Mail</p>
                        <p className="text-muted-foreground">info@kfz-gutachter-mainz.de</p>
                      </div>
                    </a>

                    {/* Address */}
                    <div className="flex items-start gap-4 p-4 rounded-lg">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Adresse</p>
                        <p className="text-muted-foreground">
                          Musterstraße 123<br />
                          55122 Mainz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-xl overflow-hidden border border-border bg-muted/30">
                  <div className="aspect-video flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                      <p className="text-muted-foreground font-medium">
                        Karten-Ansicht
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mainz & Umgebung
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div>
                <div className="bg-card rounded-xl p-8 border border-border shadow-[var(--shadow-sm)]">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Nachricht senden
                  </h3>
                  <ContactForm />
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
