import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, FileCheck } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Warum wir", href: "#warum-wir" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  e.preventDefault();
  const targetId = href.replace('#', '');
  const element = document.getElementById(targetId);
  
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const Header = () => {
  const activeSection = useActiveSection();
  const { scrollDirection, scrollY } = useScrollDirection();

  // Determine header visibility and shadow intensity
  const isHidden = scrollDirection === 'down' && scrollY > 100;
  const shadowClass = scrollY < 50 ? 'shadow-sm' : scrollY < 200 ? 'shadow-md' : 'shadow-lg';

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary 
                   focus:text-primary-foreground focus:rounded-md focus:font-semibold"
      >
        Zum Hauptinhalt springen
      </a>
      
      <header 
        className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 lg:bg-background/80 lg:backdrop-blur-md ${shadowClass} transition-all duration-300 ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-14 md:h-16 items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-2 font-bold text-base md:text-lg text-foreground hover:text-primary transition-colors focus-ring rounded-md px-2 py-1"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <FileCheck className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              <span className="hidden xs:inline sm:inline">Gutachter Jabarov</span>
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6" aria-label="Hauptnavigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`nav-link nav-link-underline ${
                      isActive ? 'nav-link-active nav-link-active-underline' : ''
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
            
            {/* CTA + Mobile Trigger */}
            <div className="flex items-center gap-2 md:gap-4">
              <Button 
                variant="hero" 
                size="sm" 
                className="hidden sm:inline-flex text-sm"
                asChild
              >
                <a href="#kontakt" onClick={(e) => handleSmoothScroll(e, '#kontakt')}>
                  <Phone className="w-4 h-4" />
                  <span className="hidden md:inline">Kontakt</span>
                </a>
              </Button>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden"
                    aria-label="Menü öffnen"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                
                <SheetContent side="right" className="w-[min(85vw,320px)] sm:max-w-[400px] overflow-x-hidden">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  
                  <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile Navigation">
                    {navItems.map((item) => {
                      const isActive = activeSection === item.href.replace('#', '');
                      return (
                        <SheetClose asChild key={item.href}>
                          <a 
                            href={item.href} 
                            className={`mobile-menu-link ${isActive ? 'text-primary' : ''}`}
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {item.label}
                          </a>
                        </SheetClose>
                      );
                    })}
                  </nav>
                  
                  <div className="mt-8 pt-8 border-t border-border">
                    <SheetClose asChild>
                      <Button variant="hero" className="w-full" size="lg" asChild>
                        <a href="#kontakt" onClick={(e) => handleSmoothScroll(e, '#kontakt')}>
                          <Phone className="w-4 h-4" />
                          Jetzt Kontakt aufnehmen
                        </a>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
