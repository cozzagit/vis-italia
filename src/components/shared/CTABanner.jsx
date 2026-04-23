import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTABanner({ 
  title = "Vuoi mettere in sicurezza il tuo magazzino?",
  description = "Richiedi un sopralluogo tecnico o una consulenza dedicata. Ti rispondiamo entro 24 ore.",
  primaryLabel = "Richiedi un sopralluogo",
  secondaryLabel = "Chiama ora"
}) {
  return (
    <section className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">{title}</h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/contatti">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                {primaryLabel} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:+390000000000">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground gap-2">
                <Phone className="h-4 w-4" /> {secondaryLabel}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}