import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShoppingBag, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTABanner from '../../components/shared/CTABanner';

const categories = [
  {
    title: 'Reti orizzontali',
    description: 'Reti di sicurezza da posizionare sui livelli delle scaffalature per impedire la caduta di materiale, proteggendo gli operatori sottostanti.',
    benefits: ['Prevenzione caduta oggetti', 'Conformità normativa', 'Installazione rapida'],
  },
  {
    title: 'Cartelli di portata',
    description: 'Cartelli conformi alla UNI EN 15635 che indicano i limiti di carico per ogni livello e per la campata complessiva.',
    benefits: ['Obbligo normativo UNI EN 15635', 'Personalizzati per ogni impianto', 'Resistenti e leggibili'],
  },
  {
    title: 'Protezioni montanti e spalle',
    description: 'Protezioni in acciaio progettate per assorbire gli urti dei carrelli elevatori, proteggendo i montanti delle scaffalature da danni strutturali.',
    benefits: ['Riduzione danni da urto', 'Protezione strutturale', 'Facilità di sostituzione'],
  },
  {
    title: 'Barriere antiurto',
    description: 'Barriere di protezione per delimitare le zone di transito, proteggere le testate delle scaffalature e separare le aree pedonali da quelle carrabili.',
    benefits: ['Separazione percorsi', 'Alta visibilità', 'Robuste e durevoli'],
  },
  {
    title: 'Gancetti di sicurezza',
    description: 'Gancetti per il bloccaggio dei correnti alle spalle, che impediscono lo sganciamento accidentale durante le operazioni di carico e scarico.',
    benefits: ['Prevenzione sganciamento', 'Installazione semplice', 'Costo contenuto'],
  },
  {
    title: 'Paracolpi',
    description: 'Elementi di protezione per angoli, pilastri e strutture fisse, che assorbono gli urti e prevengono danni a persone e strutture.',
    benefits: ['Protezione strutture fisse', 'Alta visibilità', 'Assorbimento urti'],
  },
  {
    title: 'Protezioni varie',
    description: 'Soluzioni di protezione specifiche per esigenze particolari: protezioni per tubazioni, protezioni angolari, guide a pavimento.',
    benefits: ['Soluzioni personalizzate', 'Adattabili a ogni esigenza', 'Materiali certificati'],
  },
  {
    title: 'Accessori di completamento',
    description: 'Accessori per il completamento e la messa in sicurezza delle scaffalature: piastre di base, tasselli, distanziali, pannelli di fondo.',
    benefits: ['Completamento impianti', 'Componenti certificati', 'Disponibilità immediata'],
  },
];

export default function AccessoriScaffalature() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/servizi" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Tutti i servizi
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <ShoppingBag className="h-6 w-6 text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider text-accent">Vendita accessori</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight mb-6">
            Accessori per scaffalature
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-3xl">
            Fornitura di accessori di sicurezza e completamento per scaffalature industriali: protezioni, cartelli, reti, 
            barriere e componenti per garantire la conformità e la sicurezza del tuo impianto di stoccaggio.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <h3 className="font-bold text-foreground">{cat.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cat.description}</p>
                <div className="space-y-1.5">
                  {cat.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-muted rounded-xl p-6 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-foreground mb-3">Fornitura su misura</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ogni magazzino ha esigenze specifiche. Forniamo accessori su misura per il tuo impianto, 
              con consulenza nella scelta e supporto nell'installazione.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contatti">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                  Richiedi un'offerta <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contatti">
                <Button size="lg" variant="outline" className="gap-2">
                  Richiedi informazioni
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Hai bisogno di accessori per le tue scaffalature?" description="Contattaci per un preventivo personalizzato. Fornitura rapida in tutta Italia." />
    </>
  );
}