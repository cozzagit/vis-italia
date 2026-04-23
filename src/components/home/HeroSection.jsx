import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Ispezioni certificate UNI EN 15635',
  'Validazione scaffalature UNI 11636',
  'Vulnerabilità sismica',
];

export default function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <Shield className="h-4 w-4" />
            Partner tecnico indipendente
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight mb-6">
            Sicurezza scaffalature
            <span className="block text-accent mt-1">e magazzini industriali</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed mb-8">
            Ispezioni, validazioni, consulenza normativa e operativa per mettere in sicurezza 
            i tuoi impianti di stoccaggio e regolarizzare la documentazione.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-3 mb-10">
            {highlights.map((h) => (
              <span key={h} className="flex items-center gap-1.5 text-sm text-primary-foreground/70">
                <CheckCircle className="h-4 w-4 text-accent" />
                {h}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/contatti">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2 text-base px-8 h-12">
                Richiedi un sopralluogo <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/servizi">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground gap-2 text-base px-8 h-12">
                Scopri i servizi
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-primary-foreground/40" />
      </div>
    </section>
  );
}