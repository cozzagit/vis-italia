import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CTABanner from '../../components/shared/CTABanner';

const normsData = {
  'uni-en-15635': {
    code: 'UNI EN 15635',
    title: 'Utilizzo e manutenzione delle attrezzature di immagazzinamento',
    intro: 'La UNI EN 15635 è la norma europea di riferimento per la gestione in sicurezza delle scaffalature metalliche durante il loro ciclo di vita operativo.',
    sections: [
      {
        heading: 'Cosa disciplina',
        content: 'La norma definisce i requisiti per l\'utilizzo sicuro e la manutenzione delle scaffalature metalliche, stabilendo le responsabilità del datore di lavoro, le modalità di ispezione e i criteri per la classificazione dei danni.',
      },
      {
        heading: 'A chi si applica',
        content: 'Si applica a tutte le aziende che utilizzano scaffalature metalliche per lo stoccaggio di merci: magazzini, centri logistici, industrie, grande distribuzione e qualsiasi realtà che impieghi sistemi di stoccaggio industriale.',
      },
      {
        heading: 'Ispezione periodica',
        content: 'La norma prevede tre livelli di controllo: controlli visivi immediati da parte degli operatori, ispezioni interne regolari da parte di personale formato e ispezione da parte di persona tecnicamente competente almeno una volta all\'anno.',
      },
      {
        heading: 'Classificazione dei danni',
        content: 'I danni rilevati durante le ispezioni vengono classificati in tre livelli: verde (danno minore, monitoraggio), ambra (danno significativo, intervento programmato entro 4 settimane) e rosso (danno grave, scarico e segregazione immediata del componente).',
      },
      {
        heading: 'Cartelli di portata',
        content: 'La norma impone la presenza di cartelli di portata visibili e leggibili su ogni campata, che indichino chiaramente i limiti di carico ammessi per livello e per campata complessiva.',
      },
    ],
    relatedService: { label: 'Ispezioni scaffalature', path: '/servizi/ispezioni-scaffalature' },
  },
  'uni-11636': {
    code: 'UNI 11636',
    title: 'Validazione delle scaffalature metalliche',
    intro: 'La UNI 11636 è la norma italiana che definisce il processo di validazione delle scaffalature metalliche, ovvero la verifica di conformità complessiva dell\'impianto.',
    sections: [
      {
        heading: 'Cosa disciplina',
        content: 'La norma stabilisce le procedure per verificare la conformità delle scaffalature metalliche esistenti, nuove o modificate, attraverso un processo strutturato che analizza documentazione, progetto, installazione e condizioni d\'uso.',
      },
      {
        heading: 'A chi si applica',
        content: 'Si applica ai titolari di scaffalature che necessitano di dimostrare la conformità dei propri impianti, in particolare per scaffalature prive di documentazione completa, dopo modifiche o cambi d\'uso.',
      },
      {
        heading: 'Il processo di validazione',
        content: 'La validazione prevede il rilievo delle condizioni reali dell\'impianto, la verifica della documentazione tecnica, il confronto con i requisiti normativi e la produzione di un documento finale che attesta la conformità o le non conformità.',
      },
      {
        heading: 'Documentazione prodotta',
        content: 'Al termine della validazione viene prodotto un documento tecnico che include: descrizione dell\'impianto, condizioni di utilizzo ammesse, non conformità rilevate, azioni correttive necessarie e dichiarazione di validazione.',
      },
      {
        heading: 'Differenza con l\'ispezione periodica',
        content: 'L\'ispezione periodica (UNI EN 15635) è un controllo ricorrente sullo stato fisico dei componenti. La validazione è una verifica una tantum più approfondita che analizza l\'intero sistema: documentazione, progetto, installazione e coerenza con le condizioni operative.',
      },
    ],
    relatedService: { label: 'Validazione scaffalature', path: '/servizi/validazione-scaffalature' },
  },
  'uni-11731': {
    code: 'UNI 11731',
    title: 'Specifiche tecniche e manutenzione scaffalature metalliche',
    intro: 'La UNI 11731 fornisce i criteri tecnici per la valutazione dei danni ai componenti delle scaffalature e per la corretta gestione degli interventi di manutenzione.',
    sections: [
      {
        heading: 'Cosa disciplina',
        content: 'La norma definisce i criteri per valutare la gravità dei danni ai componenti delle scaffalature metalliche e le modalità corrette di intervento: riparazione, sostituzione o messa fuori servizio.',
      },
      {
        heading: 'A chi si applica',
        content: 'Si applica a tutti i soggetti coinvolti nella manutenzione delle scaffalature: datori di lavoro, responsabili di magazzino, tecnici incaricati delle ispezioni e delle riparazioni.',
      },
      {
        heading: 'Valutazione dei danni',
        content: 'La norma fornisce parametri oggettivi per misurare le deformazioni dei componenti e stabilire se rientrano nelle tolleranze ammesse o se richiedono intervento di ripristino.',
      },
      {
        heading: 'Gestione dei ripristini',
        content: 'Ogni intervento di manutenzione deve rispettare criteri precisi: i componenti sostituiti devono essere originali o equivalenti certificati, le riparazioni devono garantire il mantenimento delle prestazioni strutturali originali.',
      },
      {
        heading: 'Importanza del corretto ripristino',
        content: 'Un ripristino non conforme può compromettere la sicurezza dell\'intero impianto. L\'uso di componenti non originali o riparazioni improvvisate può ridurre significativamente la capacità portante della scaffalatura.',
      },
    ],
    relatedService: { label: 'Manutenzione scaffalature', path: '/servizi/manutenzione-scaffalature' },
  },
  'dlgs-81-08': {
    code: 'D.Lgs. 81/08',
    title: 'Testo Unico sulla Sicurezza sul Lavoro',
    intro: 'Il D.Lgs. 81/08 è il quadro normativo generale che disciplina la tutela della salute e sicurezza nei luoghi di lavoro in Italia.',
    sections: [
      {
        heading: 'Cosa disciplina',
        content: 'Il decreto stabilisce gli obblighi del datore di lavoro in materia di valutazione dei rischi, misure di prevenzione e protezione, formazione dei lavoratori e gestione delle attrezzature di lavoro, incluse le scaffalature.',
      },
      {
        heading: 'Rilevanza per le scaffalature',
        content: 'Le scaffalature rientrano tra le attrezzature di lavoro soggette agli obblighi del decreto. Il datore di lavoro è tenuto a garantirne la sicurezza attraverso una corretta installazione, manutenzione e utilizzo conforme alle istruzioni del fabbricante.',
      },
      {
        heading: 'Obblighi del datore di lavoro',
        content: 'Il datore di lavoro deve: valutare i rischi connessi all\'uso delle scaffalature, garantire la manutenzione regolare, formare il personale sull\'utilizzo corretto, conservare la documentazione tecnica e intervenire tempestivamente in caso di non conformità.',
      },
      {
        heading: 'Responsabilità',
        content: 'In caso di incidente, il datore di lavoro può essere chiamato a rispondere civilmente e penalmente se non ha adottato le misure di prevenzione previste dalla normativa, incluse le ispezioni periodiche delle scaffalature.',
      },
    ],
    relatedService: { label: 'Ispezioni scaffalature', path: '/servizi/ispezioni-scaffalature' },
  },
  'linee-guida-sismiche-2023': {
    code: 'Linee Guida Ministeriali 2023',
    title: 'Scaffalature metalliche e vulnerabilità sismica',
    intro: 'Le linee guida ministeriali del 2023 rappresentano il riferimento più recente per la valutazione della vulnerabilità sismica delle scaffalature metalliche in Italia.',
    sections: [
      {
        heading: 'Cosa disciplinano',
        content: 'Le linee guida forniscono indicazioni per la valutazione della vulnerabilità sismica delle scaffalature metalliche esistenti, definendo controlli preliminari, criteri di analisi e possibili strategie di adeguamento.',
      },
      {
        heading: 'A chi si applicano',
        content: 'Si rivolgono ai titolari di scaffalature metalliche situate in zone sismiche, con particolare attenzione agli impianti di grande altezza, quelli aperti al pubblico e quelli con funzione di supporto ad altre strutture.',
      },
      {
        heading: 'Controlli preliminari',
        content: 'Il percorso di valutazione parte da un controllo preliminare che verifica le condizioni generali dell\'impianto, la corrispondenza con il progetto originale e l\'assenza di criticità evidenti.',
      },
      {
        heading: 'Valutazione della vulnerabilità',
        content: 'Sulla base dei controlli preliminari, si procede alla valutazione vera e propria della vulnerabilità sismica, che può richiedere analisi strutturali specifiche in funzione della complessità dell\'impianto.',
      },
      {
        heading: 'Strategie di intervento',
        content: 'In base ai risultati della valutazione, possono essere necessari interventi di miglioramento sismico (riduzione parziale della vulnerabilità) o di adeguamento sismico (raggiungimento dei requisiti delle nuove installazioni).',
      },
    ],
    relatedService: { label: 'Vulnerabilità sismica', path: '/servizi/vulnerabilita-sismica' },
  },
};

export default function NormativaDetail() {
  const { slug } = useParams();
  const norm = normsData[slug];

  if (!norm) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Pagina non trovata</h2>
          <Link to="/normativa" className="text-accent font-medium hover:underline">← Torna all'area normativa</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/normativa" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Area normativa
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-6 w-6 text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider text-accent">{norm.code}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight mb-4">{norm.title}</h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">{norm.intro}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {norm.sections.map((s, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-foreground mb-3">{s.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-xl">
            <p className="text-sm text-muted-foreground mb-4">
              I contenuti di questa pagina hanno finalità informativa. Per la consultazione integrale della norma si rimanda agli enti normatori competenti.
            </p>
            <Link to={norm.relatedService.path}>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
                {norm.relatedService.label} <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}