import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    badge: 'UNI EN 15635',
    title: 'Corso PRSES',
    subtitle: 'Persona Responsabile della Sicurezza degli Scaffali',
    points: ['Obblighi normativi e responsabilità', 'Classificazione danni verde/ambra/rosso', 'Controlli visivi interni', 'Gestione non conformità'],
  },
  {
    badge: 'Formazione tecnica',
    title: 'Corso scaffalature portapallet',
    subtitle: 'Uso, dimensionamento e funzionalità',
    points: ['Componenti e struttura delle scaffalature', 'Lettura dei cartelli di portata', 'Errori di utilizzo più comuni', 'Regole di caricamento sicuro'],
  },
];

export default function FormazioneSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-accent">Corsi di formazione</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Forma il tuo personale sulla sicurezza
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Corsi pratici e aggiornati per chi lavora con le scaffalature: dalla normativa ai controlli operativi, 
            erogabili direttamente in azienda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {courses.map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 hover:shadow-md transition-all">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-5 w-5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-accent">{c.badge}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{c.subtitle}</p>
              <ul className="space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/formazione">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              Scopri i corsi di formazione <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}