import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTABanner from '../shared/CTABanner';

export default function ServicePageTemplate({ icon: Icon, overline, title, intro, sections, benefits, cta }) {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/servizi" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Tutti i servizi
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {Icon && <Icon className="h-6 w-6 text-accent" />}
            <span className="text-xs font-bold uppercase tracking-wider text-accent">{overline}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight mb-6">{title}</h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-3xl">{intro}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-foreground mb-3">{s.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>

          {benefits && benefits.length > 0 && (
            <div className="mt-12 bg-muted rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground mb-5">Vantaggi per il cliente</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link to="/contatti">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                {cta || 'Richiedi informazioni'} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}