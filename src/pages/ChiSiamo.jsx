import { Shield, Target, Eye, Handshake, Award, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import CTABanner from '../components/shared/CTABanner';

const values = [
  { icon: Shield, title: 'Sicurezza', desc: 'La tutela delle persone e delle attrezzature è la nostra priorità assoluta.' },
  { icon: Eye, title: 'Indipendenza', desc: 'Non rappresentiamo produttori. Le nostre valutazioni sono imparziali e oggettive.' },
  { icon: Target, title: 'Concretezza', desc: 'Soluzioni operative, attuabili e misurabili. Non consulenza fine a sé stessa.' },
  { icon: Award, title: 'Competenza', desc: 'Formazione continua, conoscenza normativa aggiornata e centinaia di ispezioni all\'attivo.' },
  { icon: Handshake, title: 'Vicinanza', desc: 'Affianchiamo il cliente in ogni fase, dal sopralluogo alla risoluzione delle criticità.' },
  { icon: CheckCircle, title: 'Conformità', desc: 'Lavoriamo nel pieno rispetto della normativa tecnica italiana ed europea.' },
];

const specializations = [
  'Ispezioni e controlli periodici scaffalature',
  'Validazione impianti di stoccaggio',
  'Vulnerabilità sismica scaffalature metalliche',
  'Consulenza normativa (UNI EN 15635, UNI 11636, UNI 11731)',
  'Studi di layout e ottimizzazione magazzini',
  'Facility management e supporto tecnico operativo',
];

export default function ChiSiamo() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">Chi siamo</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-6">
              Il partner tecnico per la sicurezza del tuo magazzino
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              VIS ITALIA nasce dall'esperienza diretta sul campo: anni di lavoro nei magazzini, a contatto con scaffalature, operatori, 
              responsabili della sicurezza e normativa tecnica. Conosciamo i problemi reali perché li abbiamo visti, analizzati e risolti.
            </p>
          </div>
        </div>
      </section>

      {/* Storia */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-accent">La nostra storia</span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Dall'esperienza sul campo alla consulenza specializzata</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  VIS ITALIA nasce dalla volontà di portare competenza tecnica reale nel mondo della sicurezza delle scaffalature industriali. 
                  Non siamo un'agenzia generica: siamo specialisti che hanno maturato la propria esperienza direttamente nei magazzini, 
                  vivendo quotidianamente le problematiche di chi gestisce impianti di stoccaggio.
                </p>
                <p>
                  Abbiamo scelto un approccio fondato sull'indipendenza: non vendiamo scaffalature, non rappresentiamo produttori. 
                  Questo ci consente di offrire valutazioni imparziali, orientate esclusivamente alla sicurezza e alla conformità normativa.
                </p>
                <p>
                  Nel tempo abbiamo ampliato il nostro raggio d'azione, affiancando ai servizi di ispezione anche la validazione, 
                  la consulenza sismica, gli studi di layout, il facility management e la vendita di accessori di sicurezza per scaffalature.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-semibold text-foreground mb-4">La nostra missione</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Aiutare le aziende italiane a gestire i propri impianti di stoccaggio in modo sicuro, conforme e efficiente. 
                Dalla prima ispezione alla manutenzione programmata, dalla conformità documentale all'ottimizzazione operativa: 
                il nostro obiettivo è essere il riferimento tecnico del cliente per tutto il ciclo di vita delle scaffalature.
              </p>
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <p className="text-sm font-medium text-accent italic">
                  "La sicurezza di un magazzino non si improvvisa: si misura, si documenta, si mantiene nel tempo."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-20 sm:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader overline="I nostri valori" title="Cosa ci guida ogni giorno" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-6">
                <v.icon className="h-6 w-6 text-accent mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializzazioni */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-accent">Aree di specializzazione</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">Competenze verticali, approccio integrato</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {specializations.map((s) => (
                <div key={s} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Vuoi conoscerci meglio?" description="Contattaci per un incontro conoscitivo o per richiedere un sopralluogo tecnico." />
    </>
  );
}