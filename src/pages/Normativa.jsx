import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Scale } from 'lucide-react';
import CTABanner from '../components/shared/CTABanner';

const norms = [
  {
    code: 'UNI EN 15635',
    title: 'Utilizzo e manutenzione delle attrezzature di immagazzinamento',
    description: 'La norma europea che definisce gli obblighi di ispezione periodica, la classificazione dei livelli di danno e le responsabilità del datore di lavoro nella gestione delle scaffalature.',
    topics: ['Ispezione periodica', 'Classificazione danni', 'Persona competente', 'Cartelli di portata'],
    path: '/normativa/uni-en-15635',
  },
  {
    code: 'UNI 11636',
    title: 'Validazione delle scaffalature metalliche',
    description: 'La norma italiana che stabilisce i criteri per la verifica di conformità delle scaffalature esistenti, nuove o modificate, attraverso un processo strutturato di validazione.',
    topics: ['Validazione', 'Conformità', 'Documentazione tecnica', 'Verifica installazione'],
    path: '/normativa/uni-11636',
  },
  {
    code: 'UNI 11731',
    title: 'Specifiche tecniche e manutenzione scaffalature',
    description: 'La norma che definisce i criteri tecnici per la valutazione dei danni ai componenti, la gestione dei ripristini e la manutenzione delle scaffalature metalliche.',
    topics: ['Valutazione danni', 'Riparazione', 'Sostituzione', 'Manutenzione programmata'],
    path: '/normativa/uni-11731',
  },
  {
    code: 'D.Lgs. 81/08',
    title: 'Testo Unico sulla Sicurezza sul Lavoro',
    description: 'Il quadro normativo generale in materia di salute e sicurezza nei luoghi di lavoro, che stabilisce gli obblighi del datore di lavoro anche in relazione alle attrezzature di immagazzinamento.',
    topics: ['Obblighi datore di lavoro', 'Valutazione rischi', 'Attrezzature di lavoro', 'Responsabilità'],
    path: '/normativa/dlgs-81-08',
  },
  {
    code: 'Linee Guida 2023',
    title: 'Scaffalature metalliche e vulnerabilità sismica',
    description: 'Le nuove linee guida ministeriali per la valutazione della vulnerabilità sismica delle scaffalature metalliche, con indicazioni su controlli, analisi e interventi.',
    topics: ['Vulnerabilità sismica', 'Controlli preliminari', 'Valutazione', 'Adeguamento'],
    path: '/normativa/linee-guida-sismiche-2023',
  },
];

export default function Normativa() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">Area normativa</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-4">Normativa e riferimenti tecnici</h1>
            <p className="text-lg text-primary-foreground/80">
              Le norme che regolano la sicurezza delle scaffalature e dei magazzini, spiegate in modo chiaro e accessibile 
              per responsabili di magazzino, HSE manager e imprenditori.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-10">
            <div className="flex items-start gap-3">
              <Scale className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Nota importante:</strong> I contenuti di questa sezione hanno finalità informativa e divulgativa. 
                Non sostituiscono la consultazione ufficiale delle norme, acquistabili presso gli enti normatori competenti. 
                Per approfondimenti specifici, rivolgersi a un tecnico qualificato.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {norms.map((n) => (
              <Link key={n.code} to={n.path} className="group block">
                <div className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-accent/50 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-accent">{n.code}</span>
                      <h3 className="text-lg font-bold text-foreground mt-1 mb-2 group-hover:text-accent transition-colors">{n.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{n.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {n.topics.map((t) => (
                          <span key={t} className="text-xs bg-muted text-muted-foreground rounded-full px-3 py-1">{t}</span>
                        ))}
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Hai dubbi sulla conformità del tuo magazzino?" description="I nostri tecnici possono aiutarti a verificare la conformità normativa delle tue scaffalature." />
    </>
  );
}