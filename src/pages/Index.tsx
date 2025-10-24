import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Phone, Shield, FileCheck, ClipboardList, BadgeEuro, FileText, Award, MapPin, Scale, Clock, MessageCircle, PhoneCall, Car, FileCheck2, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-gutachter.jpg";
import founderImage from "@/assets/founder-portrait.jpg";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { FeaturePoint } from "@/components/FeaturePoint";
import { TestimonialCard } from "@/components/TestimonialCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--hero-gradient-start))] to-[hsl(var(--hero-gradient-end))]">
      <Header />
      
      {/* Hero Section */}
      <section id="main-content" className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="section-container" style={{ paddingTop: 'var(--hero-spacing-y)', paddingBottom: 'var(--hero-spacing-y)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-8 hero-content-animate">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border-2 border-accent/30 shadow-[var(--shadow-sm)] w-fit">
                  <Award className="w-4 h-4 text-accent" aria-hidden="true" />
                  <span className="text-sm font-bold text-accent tracking-wide">
                    Kfz-Gutachter Mainz
                  </span>
                </div>
                
                {/* Headline */}
                <h1 id="hero-heading" className="hero-headline text-foreground">
                  Unfall gehabt?{" "}
                  <span className="text-accent">Wir klären das für Sie!</span>
                </h1>
                
                {/* Subheadline */}
                <p className="hero-subheadline">
                  Als unabhängige Sachverständige stehen wir Ihnen mit Expertise und 
                  Neutralität zur Seite. Professionelle Unfallgutachten für Ihren 
                  gerechten Schadensersatz.
                </p>

                {/* Features */}
                <ul className="flex flex-wrap gap-6 pt-2" role="list">
                  <li className="flex items-center gap-2.5 text-foreground">
                    <Shield className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium text-sm md:text-base">Unabhängig & neutral</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-foreground">
                    <FileCheck className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium text-sm md:text-base">Gerichtlich anerkannt</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-foreground">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium text-sm md:text-base">Schnelle Bearbeitung</span>
                  </li>
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    variant="hero" 
                    size="lg"
                    className="shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)]"
                    aria-label="Kostenlose Beratung für Ihr Kfz-Gutachten anfordern"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Jetzt Beratung anfordern
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                    className="border-2 group"
                  >
                    <a href="tel:+4961231234567" aria-label="Rufen Sie uns kostenlos an: 06123 123 4567">
                      <PhoneCall className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                      Kostenlos anrufen
                    </a>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="pt-8 hero-stats-animate" role="region" aria-labelledby="trust-heading">
                  <h2 id="trust-heading" className="sr-only">Unsere Leistungsdaten</h2>
                  <div className="grid grid-cols-3 gap-6 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
                    <dl className="text-center">
                      <dt className="hero-stat-value">500+</dt>
                      <dd className="hero-stat-label">Gutachten pro Jahr</dd>
                    </dl>
                    <dl className="text-center">
                      <dt className="hero-stat-value">24h</dt>
                      <dd className="hero-stat-label">Vor-Ort-Service</dd>
                    </dl>
                    <dl className="text-center">
                      <dt className="hero-stat-value">15+</dt>
                      <dd className="hero-stat-label">Jahre Erfahrung</dd>
                    </dl>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative hero-image-animate">
                <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-xl)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 z-10" />
                  <img 
                    src={heroImage} 
                    alt="Professioneller Kfz-Gutachter bei der Fahrzeugbegutachtung in Mainz"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-[var(--shadow-lg)] border border-border max-w-xs hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">100% Unabhängig</div>
                      <div className="text-sm text-muted-foreground">Keine Werkstattbindung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="section bg-background" aria-labelledby="services-heading">
        <div className="section-container">
        <div className="section-content">
        <div className="section-header">
          <h2 id="services-heading" className="heading-2 text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Professionelle Sachverständigen-Dienstleistungen für Ihre Ansprüche
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ServiceCard 
            icon={ClipboardList}
            title="Unfallgutachten"
            description="Detaillierte Schadensanalyse und gerichtsfeste Dokumentation für Ihren Versicherungsfall."
          />
          <ServiceCard 
            icon={BadgeEuro}
            title="Fahrzeugbewertung"
            description="Präzise Wertermittlung für Kauf, Verkauf oder Versicherungszwecke Ihres Fahrzeugs."
            delay={100}
          />
          <ServiceCard 
            icon={FileText}
            title="Versicherungsansprüche"
            description="Kompetente Unterstützung bei der Durchsetzung Ihrer Schadensersatzansprüche."
            delay={200}
          />
        </div>
        </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section id="warum-wir" className="section bg-gradient-to-br from-accent/10 via-background to-accent/5 border-t border-accent/20" aria-labelledby="credibility-heading">
        <div className="section-container">
          <div className="section-content">
            <div className="section-header">
              <h2 id="credibility-heading" className="heading-2 text-foreground mb-6">
                Warum Sie uns wählen sollten
              </h2>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Als unabhängige Sachverständige vereinen wir Expertise mit persönlichem Service. 
                Neutralität, Schnelligkeit und Fachkompetenz sind unsere Grundpfeiler – damit Sie 
                zu Ihrem Recht kommen. Wir stehen Ihnen mit Rat und Tat zur Seite.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12" role="list">
              <li>
                <FeaturePoint 
                  icon={Award}
                  title="Langjährige Erfahrung"
                  description="Über 15 Jahre Expertise in Unfallgutachten und Fahrzeugbewertung"
                />
              </li>
              <li>
                <FeaturePoint 
                  icon={MapPin}
                  title="Mainz & Umgebung"
                  description="Vor-Ort-Service in der gesamten Region – schnell und unkompliziert"
                />
              </li>
              <li>
                <FeaturePoint 
                  icon={Scale}
                  title="Vollkommen unabhängig"
                  description="Neutral und ohne Werkstattbindung – nur Ihr Interesse zählt"
                />
              </li>
              <li>
                <FeaturePoint 
                  icon={Clock}
                  title="Schnelle Bearbeitung"
                  description="24-Stunden-Service und zügige Gutachtenerstellung"
                />
              </li>
              <li>
                <FeaturePoint 
                  icon={MessageCircle}
                  title="Persönlich erreichbar"
                  description="Direkter Kontakt zu Ihrem Sachverständigen – ohne Umwege"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section id="ablauf" className="section bg-background" aria-labelledby="process-heading">
        <div className="section-container">
        <div className="section-content">
          <div className="section-header">
            <h2 id="process-heading" className="heading-2 text-foreground mb-4">
              So einfach geht's
            </h2>
            <p className="body-lg text-muted-foreground">
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
          <div className="text-center mt-12 md:mt-16">
            <Button 
              variant="hero" 
              size="lg"
              className="text-base font-semibold"
              aria-label="Jetzt Termin vereinbaren"
            >
              Jetzt Termin vereinbaren
            </Button>
          </div>
        </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="ueber-uns" className="section bg-gradient-to-br from-primary-light/20 via-background to-primary-light/5 border-t border-border/50" aria-labelledby="about-heading">
        <div className="section-container">
          <div className="section-content">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Image Left */}
              <div className="order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-shadow duration-300">
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
                  <h2 id="about-heading" className="heading-2 text-foreground mt-2 mb-4">
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

                  <p className="body text-muted-foreground">
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
      <section id="referenzen" className="section bg-gradient-to-br from-primary-light/30 via-primary-light/10 to-background" aria-labelledby="testimonials-heading">
        <div className="section-container">
          <div className="section-content">
            <div className="section-header">
              <h2 id="testimonials-heading" className="heading-2 text-foreground mb-4">
                Das sagen unsere Kunden
              </h2>
              <p className="body-lg text-muted-foreground">
                Echte Erfahrungen von Menschen, denen wir helfen durften
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <TestimonialCard 
                quote="Schnell und professionell – hat mir sehr geholfen nach meinem Unfall."
                name="Sandra Müller"
                location="Mainz"
              />
              <TestimonialCard 
                quote="Unabhängige Beratung ohne Druck – genau das, was ich nach dem Unfall brauchte."
                name="Thomas Weber"
                location="Wiesbaden"
                delay={100}
              />
              <TestimonialCard 
                quote="Kompetent, fair und persönlich – ich würde jederzeit wieder hier hingehen."
                name="Anna Schmidt"
                location="Frankfurt"
                delay={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="section bg-background border-t border-border/50" aria-labelledby="contact-heading">
        <div className="section-container">
          <div className="section-content">
            <div className="section-header">
              <h2 id="contact-heading" className="heading-2 text-foreground mb-4">
                Kontakt & Standort
              </h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
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
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group focus-ring"
                      aria-label="Rufen Sie uns an unter +49 6131 123 45 67"
                    >
                      <div className="icon-container-md icon-container-accent flex-shrink-0">
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
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group focus-ring"
                      aria-label="Senden Sie uns eine E-Mail an info@kfz-gutachter-mainz.de"
                    >
                      <div className="icon-container-md icon-container-accent flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">E-Mail</p>
                        <p className="text-muted-foreground">info@kfz-gutachter-mainz.de</p>
                      </div>
                    </a>

                    {/* Address */}
                    <div className="flex items-start gap-4 p-4 rounded-lg">
                      <div className="icon-container-md icon-container-accent flex-shrink-0">
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
                <div className="card">
                  <h3 className="heading-3 text-foreground mb-6">
                    Nachricht senden
                  </h3>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground relative">
        {/* Gradient transition before footer */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"></div>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Column 1: Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Kfz-Gutachter Mainz
              </h3>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Musterstraße 123<br />55122 Mainz</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+4961311234567" className="hover:text-primary-foreground transition-colors">
                    +49 (0) 6131 123 45 67
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:info@kfz-gutachter-mainz.de" className="hover:text-primary-foreground transition-colors">
                    info@kfz-gutachter-mainz.de
                  </a>
                </p>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors focus-ring"
                  aria-label="Besuchen Sie uns auf Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors focus-ring"
                  aria-label="Folgen Sie uns auf Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg flex items-center justify-center transition-colors focus-ring"
                  aria-label="Verbinden Sie sich mit uns auf LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Schnellzugriff
              </h3>
              <nav aria-label="Schnellzugriff">
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#hero" className="hover:text-primary-foreground transition-colors">
                    Startseite
                  </a>
                </li>
                <li>
                  <a href="#leistungen" className="hover:text-primary-foreground transition-colors">
                    Leistungen
                  </a>
                </li>
                <li>
                  <a href="#ueber-uns" className="hover:text-primary-foreground transition-colors">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="#kontakt" className="hover:text-primary-foreground transition-colors">
                    Kontakt
                  </a>
                </li>
              </ul>
              </nav>
            </div>

            {/* Column 3: Legal Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Rechtliches
              </h3>
              <nav aria-label="Rechtliche Links">
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="/impressum" className="hover:text-primary-foreground transition-colors">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="hover:text-primary-foreground transition-colors">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a href="/agb" className="hover:text-primary-foreground transition-colors">
                    AGB
                  </a>
                </li>
              </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Kfz-Gutachter Mainz. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
