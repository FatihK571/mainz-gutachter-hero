import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/Header";
import { Phone, Shield, FileCheck, ClipboardList, BadgeEuro, FileText, Award, MapPin, Scale, Clock, MessageCircle, PhoneCall, Car, FileCheck2, Mail, Facebook, Instagram, Linkedin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-gutachter.jpg";
import founderImage from "@/assets/founder-portrait.jpg";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { FeaturePoint } from "@/components/FeaturePoint";
import { TestimonialCard } from "@/components/TestimonialCard";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote: "Schnell und professionell – hat mir sehr geholfen nach meinem Unfall. Die Abwicklung war unkompliziert und transparent.",
    name: "Sandra Müller",
    location: "Mainz",
    rating: 5,
  },
  {
    quote: "Unabhängige Beratung ohne Druck – genau das, was ich nach dem Unfall brauchte. Sehr kompetent und fair.",
    name: "Thomas Weber",
    location: "Wiesbaden",
    rating: 5,
  },
  {
    quote: "Kompetent, fair und persönlich – ich würde jederzeit wieder hier hingehen. Top Service!",
    name: "Anna Schmidt",
    location: "Frankfurt",
    rating: 5,
  },
];

const faqItems = [
  {
    id: "faq-1",
    question: "Was kostet ein Unfallgutachten?",
    answer: "Die Kosten für ein Unfallgutachten trägt in der Regel die gegnerische Versicherung, wenn Sie nicht schuldhaft am Unfall beteiligt waren. Bei Teilschuld werden die Kosten anteilig aufgeteilt. Wir beraten Sie gerne kostenlos zu Ihrem individuellen Fall."
  },
  {
    id: "faq-2",
    question: "Wie schnell erhalte ich mein Gutachten?",
    answer: "Nach der Begutachtung vor Ort erstellen wir Ihr detailliertes Gutachten in der Regel innerhalb von 2-3 Werktagen. Bei Eilfällen bieten wir auch einen 24-Stunden-Express-Service an. Sie erhalten das Gutachten digital per E-Mail und auf Wunsch auch in gedruckter Form."
  },
  {
    id: "faq-3",
    question: "Muss ich das Gutachten bei der Werkstatt erstellen lassen?",
    answer: "Nein, Sie sind völlig frei in der Wahl Ihres Gutachters. Als unabhängige Sachverständige sind wir an keine Werkstatt gebunden und vertreten ausschließlich Ihre Interessen. Die gegnerische Versicherung kann Ihnen keine Werkstatt oder keinen Gutachter vorschreiben."
  },
  {
    id: "faq-4",
    question: "Was ist der Unterschied zwischen Kostenvoranschlag und Gutachten?",
    answer: "Ein Kostenvoranschlag wird von einer Werkstatt erstellt und ist bei kleineren Schäden (unter ca. 1.000 €) oft ausreichend. Ein Gutachten ist deutlich detaillierter, gerichtlich verwertbar und wird von einem unabhängigen Sachverständigen erstellt. Bei höheren Schäden ist ein Gutachten empfehlenswert, da es Ihre Position gegenüber der Versicherung deutlich stärkt."
  },
  {
    id: "faq-5",
    question: "Welche Unterlagen benötige ich für die Begutachtung?",
    answer: "Für die Begutachtung benötigen Sie Ihren Unfallbericht (falls vorhanden), die Fahrzeugpapiere und idealerweise Fotos vom Unfallort und den Schäden. Wir helfen Ihnen aber auch, wenn nicht alle Unterlagen vollständig sind – sprechen Sie uns einfach an."
  }
];

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
            <ol 
              className="grid lg:grid-cols-3 gap-8 lg:gap-10 list-none relative"
              role="list"
              aria-label="Drei-Schritte-Prozess"
            >
              {/* Mobile: Connecting dots */}
              <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-0 bottom-0 flex flex-col justify-evenly items-center pointer-events-none" aria-hidden="true">
                <div className="w-2 h-2 rounded-full bg-accent/40" />
                <div className="w-2 h-2 rounded-full bg-accent/40" />
              </div>

              {/* Step 1 */}
              <li 
                className="process-step-card animate-fade-in text-center"
                role="listitem"
                aria-labelledby="step-1-title"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="process-step-icon">
                      <PhoneCall className="w-10 h-10 text-accent" aria-hidden="true" />
                    </div>
                    <div className="process-step-badge" aria-label="Schritt 1">
                      1
                    </div>
                  </div>
                  <h3 id="step-1-title" className="heading-3 text-foreground">
                    Kontakt aufnehmen
                  </h3>
                  <p className="body text-muted-foreground leading-relaxed max-w-md">
                    Rufen Sie uns an oder nutzen Sie unser Kontaktformular für eine erste Beratung.
                  </p>
                </div>
              </li>

              {/* Step 2 */}
              <li 
                className="process-step-card animate-fade-in delay-100 text-center"
                role="listitem"
                aria-labelledby="step-2-title"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="process-step-icon">
                      <Car className="w-10 h-10 text-accent" aria-hidden="true" />
                    </div>
                    <div className="process-step-badge" aria-label="Schritt 2">
                      2
                    </div>
                  </div>
                  <h3 id="step-2-title" className="heading-3 text-foreground">
                    Begutachtung vor Ort
                  </h3>
                  <p className="body text-muted-foreground leading-relaxed max-w-md">
                    Wir kommen zu Ihnen und nehmen eine detaillierte Schadensbegutachtung vor.
                  </p>
                </div>
              </li>

              {/* Step 3 */}
              <li 
                className="process-step-card animate-fade-in delay-200 text-center"
                role="listitem"
                aria-labelledby="step-3-title"
              >
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="process-step-icon">
                      <FileCheck2 className="w-10 h-10 text-accent" aria-hidden="true" />
                    </div>
                    <div className="process-step-badge" aria-label="Schritt 3">
                      3
                    </div>
                  </div>
                  <h3 id="step-3-title" className="heading-3 text-foreground">
                    Gutachten erhalten
                  </h3>
                  <p className="body text-muted-foreground leading-relaxed max-w-md">
                    Sie erhalten Ihr professionelles Gutachten zur Weiterleitung an die Versicherung.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Enhanced CTA */}
          <div className="mt-16 md:mt-20">
            <div className="max-w-3xl mx-auto text-center p-8 md:p-12 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-accent/20">
              <h3 className="heading-2 text-foreground mb-4">
                Bereit für Ihr Gutachten?
              </h3>
              <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Profitieren Sie von über 15 Jahren Erfahrung und unserem 24-Stunden-Service. 
                Kostenlose Erstberatung – unverbindlich und kompetent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  className="shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)]"
                  aria-label="Jetzt unverbindlichen Termin vereinbaren"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  Jetzt Termin vereinbaren
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2"
                  asChild
                >
                  <a href="#kontakt" aria-label="Mehr über unseren Service erfahren">
                    Mehr erfahren
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="ueber-uns" className="section bg-gradient-to-br from-primary-light/20 via-background to-primary-light/5 border-t border-border/50" aria-labelledby="about-heading">
        <div className="section-container">
          <div className="section-content">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Image Left */}
              <div className="order-2 lg:order-1">
                <div className="max-w-md mx-auto lg:max-w-none relative rounded-2xl overflow-hidden border border-border/20 shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-shadow duration-300">
                  <AspectRatio ratio={4 / 5} className="bg-muted">
                    <img 
                      src={founderImage} 
                      alt="Michael Schneider, Kfz-Sachverständiger, in professioneller Arbeitsumgebung mit über 15 Jahren Erfahrung"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>

              {/* Text Right */}
              <div className="order-1 lg:order-2 flex flex-col gap-8">
                <div>
                  <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                    Über uns
                  </span>
                  <h2 id="about-heading" className="heading-2 text-foreground mt-2 mb-4">
                    Ihr Partner für faire Gutachten
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="heading-3 text-foreground mb-2">
                      Michael Schneider
                    </h3>
                    <p className="text-accent font-medium mb-6">
                      Kfz-Sachverständiger & Geschäftsführer
                    </p>
                  </div>

                  <p className="body text-muted-foreground bio-text leading-relaxed">
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

            {/* Mobile/Tablet Carousel */}
            <div className="lg:hidden">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2">
                      <TestimonialCard {...testimonial} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 -translate-x-1/2" />
                <CarouselNext className="right-0 translate-x-1/2" />
              </Carousel>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  {...testimonial}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section bg-gradient-to-br from-primary-light/10 via-background to-primary-light/5 border-t border-border/50" aria-labelledby="faq-heading">
        <div className="section-container">
          <div className="section-content">
            {/* Header */}
            <div className="section-header">
              <h2 id="faq-heading" className="heading-2 text-foreground mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
                Antworten auf die wichtigsten Fragen rund um Kfz-Gutachten und unsere Dienstleistungen
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto mt-12">
              <Accordion 
                type="single" 
                collapsible 
                className="space-y-4"
                aria-label="Häufig gestellte Fragen zum Thema Kfz-Gutachten"
              >
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={item.id}
                    value={item.id}
                    className={cn(
                      "bg-card rounded-lg border border-border px-6 shadow-sm hover:shadow-md transition-shadow",
                      "animate-fade-in",
                      index === 1 && "animate-delay-100",
                      index === 2 && "animate-delay-200",
                      index === 3 && "animate-delay-300",
                      index === 4 && "animate-delay-400"
                    )}
                  >
                    <AccordionTrigger 
                      className="text-foreground hover:no-underline"
                      aria-label={`Frage: ${item.question}`}
                    >
                      <span className="font-semibold text-base md:text-lg pr-4">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pt-2 pb-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* CTA below FAQ */}
            <div className="text-center mt-12">
              <p className="body text-muted-foreground mb-6">
                Haben Sie weitere Fragen? Wir beraten Sie gerne persönlich.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg"
                  asChild
                  className="shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)]"
                >
                  <a href="#kontakt" aria-label="Zum Kontaktformular springen">
                    <MessageCircle className="w-5 h-5" aria-hidden="true" />
                    Jetzt Frage stellen
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  asChild
                  className="border-2"
                >
                  <a href="tel:+4961311234567" aria-label="Telefonisch beraten lassen">
                    <PhoneCall className="w-5 h-5" aria-hidden="true" />
                    +49 (0) 6131 123 45 67
                  </a>
                </Button>
              </div>
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
