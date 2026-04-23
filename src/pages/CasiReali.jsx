import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import CTABanner from '../components/shared/CTABanner';

const staticCases = [
  {
    id: 'static-1',
    title: 'Montanti deformati da urti ripetuti',
    category: 'Urti da carrello',
    problem: 'Montanti delle scaffalature con deformazioni significative causate da impatti ripetuti di carrelli elevatori, in assenza di protezioni adeguate.',
    risk: 'Riduzione della capacità portante della struttura, possibile cedimento parziale o totale del fronte di scaffalatura con rischio per gli operatori.',
    solution: 'Ispezione completa con classificazione dei danni secondo UNI EN 15635. Sostituzione dei montanti danneggiati oltre la tolleranza. Installazione di protezioni paracolpi e barriere antiurto.',
    benefit: 'Ripristino della piena capacità portante, riduzione del rischio di incidenti e prevenzione di danni futuri grazie alle protezioni installate.',
  },
  {
    id: 'static-2',
    title: 'Assenza totale di cartelli di portata',
    category: 'Cartelli di portata',
    problem: 'Magazzino con decine di campate di scaffalature prive di cartelli di portata. Gli operatori caricavano le scaffalature senza conoscere i limiti ammessi.',
    risk: 'Sovraccarico sistematico delle scaffalature con rischio concreto di cedimento strutturale. Non conformità grave ai sensi della UNI EN 15635.',
    solution: 'Recupero della documentazione tecnica originale, verifica delle condizioni reali di carico e produzione dei cartelli di portata conformi.',
    benefit: 'Piena conformità normativa, consapevolezza degli operatori sui limiti di carico, riduzione del rischio di sovraccarico.',
  },
  {
    id: 'static-3',
    title: 'Scaffalature senza documentazione tecnica',
    category: 'Problemi documentali',
    problem: 'Impianto di scaffalature installato da oltre 15 anni senza documentazione tecnica: nessun calcolo strutturale, nessuna dichiarazione di conformità, nessuna istruzione di montaggio.',
    risk: 'Impossibilità di dimostrare la conformità dell\'impianto. Responsabilità del datore di lavoro in caso di incidente.',
    solution: 'Validazione completa secondo UNI 11636 con verifica delle condizioni reali, analisi strutturale e produzione della documentazione tecnica.',
    benefit: 'Documentazione completa e conforme, chiarezza sulle condizioni di utilizzo ammesse, copertura documentale per il datore di lavoro.',
  },
  {
    id: 'static-4',
    title: 'Verticalità fuori tolleranza',
    category: 'Verticalità fuori tolleranza',
    problem: 'Scaffalature con inclinazione fuori dai limiti ammessi dalla normativa, causata da carichi eccentrici e assestamenti nel tempo.',
    risk: 'Compromissione della stabilità strutturale con possibilità di ribaltamento. La verticalità è un parametro critico controllato durante le ispezioni.',
    solution: 'Misurazione strumentale delle verticalità, scarico temporaneo delle scaffalature interessate e intervento di ripristino o sostituzione.',
    benefit: 'Scaffalature riallineate entro le tolleranze ammesse, stabilità strutturale garantita, documentazione dell\'intervento.',
  },
  {
    id: 'static-5',
    title: 'Scaffalature in zona sismica senza valutazione',
    category: 'Criticità sismiche',
    problem: 'Magazzino con scaffalature di grande altezza in zona sismica 2, mai sottoposte a valutazione della vulnerabilità sismica.',
    risk: 'In caso di evento sismico, le scaffalature potrebbero subire danni significativi o collassare. Mancata conformità alle linee guida ministeriali 2023.',
    solution: 'Valutazione della vulnerabilità sismica secondo le linee guida ministeriali, identificazione delle criticità e definizione degli interventi prioritari.',
    benefit: 'Consapevolezza del livello di rischio, piano di intervento chiaro e documentato, avvio del percorso di adeguamento sismico.',
  },
];

export default function CasiReali() {
  const { data: dynamicCases = [] } = useQuery({
    queryKey: ['case-studies'],
    queryFn: () => base44.entities.CaseStudy.filter({ published: true }, '-created_date', 50),
  });

  const allCases = [...dynamicCases, ...(dynamicCases.length === 0 ? staticCases : [])];

  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">Casi reali</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-4">Problemi reali, soluzioni concrete</h1>
            <p className="text-lg text-primary-foreground/80">
              Esempi pratici di criticità riscontrate nei magazzini e delle soluzioni adottate per risolverle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {allCases.map((c) => (
              <div key={c.id} className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{c.category}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{c.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" /> Problema
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
                    <h4 className="text-sm font-semibold text-foreground mb-1.5 mt-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive" /> Rischio
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.risk}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1.5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Soluzione
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.solution}</p>
                    <h4 className="text-sm font-semibold text-foreground mb-1.5 mt-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Beneficio
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.benefit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Riconosci queste criticità nel tuo magazzino?" description="Richiedi un sopralluogo tecnico per verificare lo stato delle tue scaffalature." />
    </>
  );
}