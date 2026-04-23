import { GraduationCap, Users, Clock, CheckCircle, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CTABanner from '../components/shared/CTABanner';

const courses = [
  {
    id: 'prses',
    badge: 'UNI EN 15635',
    title: 'Corso PRSES – Persona Responsabile della Sicurezza degli Scaffali',
    subtitle: 'Formazione obbligatoria per i responsabili interni della sicurezza delle scaffalature',
    description: 'La norma UNI EN 15635 prevede che ogni azienda che utilizzi scaffalature metalliche nomini una Persona Responsabile della Sicurezza degli Scaffali (PRSES) adeguatamente formata. Il corso prepara i partecipanti a svolgere questo ruolo in modo corretto, consapevole e conforme alla normativa vigente.',
    topics: [
      'Quadro normativo: UNI EN 15635, UNI 11636, UNI 11731 e D.Lgs. 81/08',
      'Responsabilità e obblighi della PRSES',
      'Tipologie di scaffalature metalliche e componenti principali',
      'Classificazione dei danni: sistema verde, ambra, rosso',
      'Metodologia di controllo visivo interno',
      'Cartelli di portata: lettura, verifica e obblighi',
      'Gestione delle non conformità e dei componenti danneggiati',
      'Documentazione e registrazione dei controlli',
      'Quando richiedere l\'intervento di un ispettore esterno',
      'Esercitazioni pratiche su casi reali',
    ],
    audience: 'Responsabili di magazzino, preposti, RSPP, HSE manager, addetti alla sicurezza',
    duration: 'Mezza giornata (4 ore) – in aula o in modalità on-site presso il magazzino',
    outcome: 'Attestato di partecipazione. Il partecipante sarà in grado di svolgere i controlli visivi interni previsti dalla UNI EN 15635 e di gestire correttamente le non conformità riscontrate.',
  },
  {
    id: 'scaffalature',
    badge: 'Formazione tecnica',
    title: 'Corso scaffalature portapallet: uso, dimensionamento e funzionalità',
    subtitle: 'Conoscere le scaffalature per usarle in sicurezza e nel rispetto della loro progettazione',
    description: 'Un corso tecnico approfondito per chi lavora quotidianamente con le scaffalature portapallet: operatori, responsabili di magazzino e chiunque voglia comprendere come sono costruite, come funzionano e quali sono le regole fondamentali per un utilizzo sicuro e corretto.',
    topics: [
      'Tipologie di scaffalature portapallet e sistemi di stoccaggio',
      'Componenti principali: montanti, correnti, spalle, basi, ancoraggi',
      'Come si dimensiona una scaffalatura: carichi, interassi, altezze',
      'Lettura dei calcoli strutturali e della documentazione tecnica',
      'Capacità portante: cosa significa e come si verifica',
      'Cartelli di portata: come leggerli e perché rispettarli',
      'Errori di utilizzo più comuni e loro conseguenze',
      'Danni da carrello e impatto sulla struttura',
      'Regole di caricamento sicuro dei pallet',
      'Manutenzione ordinaria e segnalazione delle anomalie',
    ],
    audience: 'Operatori di magazzino, carrellisti, capireparto, responsabili di magazzino, nuovi assunti',
    duration: 'Mezza giornata (4 ore) – in aula o in modalità on-site',
    outcome: 'Attestato di partecipazione. I partecipanti acquisiranno le conoscenze di base per utilizzare le scaffalature in modo sicuro e per riconoscere situazioni di rischio.',
  },
];

export default function Formazione() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">Corsi di formazione</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-4">
              Formazione sulla sicurezza delle scaffalature
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Corsi pratici e aggiornati per formare il personale aziendale sulla sicurezza delle scaffalature, 
              gli obblighi normativi e le corrette modalità di utilizzo e controllo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {courses.map((course, idx) => (
            <div key={course.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-muted px-6 sm:px-8 py-6 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{course.badge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{course.title}</h2>
                <p className="text-muted-foreground font-medium">{course.subtitle}</p>
              </div>

              {/* Body */}
              <div className="px-6 sm:px-8 py-6 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-accent" /> Contenuti del corso
                    </h3>
                    <ul className="space-y-2">
                      {course.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-muted rounded-xl p-5 space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Users className="h-4 w-4 text-accent" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">A chi è rivolto</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{course.audience}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">Durata e modalità</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{course.duration}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="h-4 w-4 text-accent" />
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">Risultato</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{course.outcome}</p>
                    </div>
                  </div>
                  <Link to="/contatti">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Richiedi informazioni
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Formazione in azienda</h2>
          <p className="text-muted-foreground mb-6">
            I corsi possono essere erogati direttamente presso la sede del cliente, con esercitazioni pratiche 
            sulle scaffalature reali del magazzino. Questo approccio on-site rende la formazione più concreta, 
            efficace e immediatamente applicabile.
          </p>
          <Link to="/contatti">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Organizza un corso in azienda
            </Button>
          </Link>
        </div>
      </section>

      <CTABanner
        title="Vuoi formare il tuo personale?"
        description="Contattaci per organizzare un corso su misura per la tua realtà. Rispondiamo entro 24 ore."
        primaryLabel="Richiedi informazioni sul corso"
      />
    </>
  );
}