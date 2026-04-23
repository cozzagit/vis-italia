import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CTABanner from '../components/shared/CTABanner';

const faqCategories = [
  {
    title: 'Ispezioni e controlli',
    faqs: [
      {
        q: 'Ogni quanto va fatta l\'ispezione delle scaffalature?',
        a: 'La norma UNI EN 15635 prevede un\'ispezione da parte di persona tecnicamente competente almeno una volta all\'anno. Inoltre, vanno eseguiti controlli visivi regolari da parte del personale interno formato (solitamente settimanali o mensili).',
      },
      {
        q: 'Chi può eseguire il controllo delle scaffalature?',
        a: 'I controlli visivi interni possono essere eseguiti da personale formato. L\'ispezione periodica annuale deve essere affidata a una persona tecnicamente competente, esterna e indipendente, con specifica formazione ed esperienza nel settore.',
      },
      {
        q: 'Qual è la differenza tra controllo interno e ispezione specialistica?',
        a: 'Il controllo interno è una verifica visiva rapida eseguita frequentemente dal personale di magazzino. L\'ispezione specialistica è più approfondita, viene eseguita annualmente da un esperto esterno e produce un report con classificazione dei danni e raccomandazioni.',
      },
    ],
  },
  {
    title: 'Validazione scaffalature',
    faqs: [
      {
        q: 'La validazione è diversa dall\'ispezione?',
        a: 'Sì. L\'ispezione periodica (UNI EN 15635) è un controllo ricorrente sullo stato fisico dei componenti. La validazione (UNI 11636) è una verifica di conformità più ampia che analizza documentazione tecnica, progetto, installazione, stato d\'uso e coerenza con le condizioni operative reali.',
      },
      {
        q: 'Quando serve la validazione delle scaffalature?',
        a: 'La validazione è raccomandata per scaffalature esistenti prive di documentazione completa, dopo modifiche significative all\'impianto, in caso di cambio di destinazione d\'uso, o quando si vuole verificare la conformità complessiva dell\'installazione.',
      },
      {
        q: 'Quali documenti vengono prodotti dalla validazione?',
        a: 'La validazione produce un documento tecnico che attesta la conformità dell\'impianto, le condizioni di utilizzo ammesse, le eventuali non conformità rilevate e le azioni correttive necessarie.',
      },
    ],
  },
  {
    title: 'Vulnerabilità sismica',
    faqs: [
      {
        q: 'Quando serve una verifica sismica delle scaffalature?',
        a: 'Le linee guida ministeriali 2023 richiedono una valutazione della vulnerabilità sismica per le scaffalature metalliche, in particolare in zone a rischio sismico, per impianti con altezze rilevanti, o per scaffalature accessibili al pubblico.',
      },
      {
        q: 'Cosa prevede la valutazione sismica?',
        a: 'Si parte da un controllo preliminare dello stato dell\'impianto, si analizzano le caratteristiche costruttive e le condizioni d\'uso, e si identificano le criticità. In base ai risultati si definiscono eventuali interventi di adeguamento o miglioramento.',
      },
    ],
  },
  {
    title: 'Manutenzione e ripristino',
    faqs: [
      {
        q: 'Posso usare componenti riparati o modificati?',
        a: 'La norma UNI 11731 stabilisce criteri precisi per la valutazione dei danni e la gestione dei ripristini. L\'uso di componenti riparati è possibile solo se conforme a specifiche condizioni tecniche. In molti casi è preferibile la sostituzione con componenti originali.',
      },
      {
        q: 'Cosa succede se mancano i cartelli di portata?',
        a: 'L\'assenza di cartelli di portata è una non conformità grave ai sensi della UNI EN 15635. Senza indicazioni chiare sui limiti di carico, gli operatori non possono rispettare le condizioni d\'uso previste dal progetto, aumentando il rischio di sovraccarico.',
      },
    ],
  },
  {
    title: 'Documentazione e conformità',
    faqs: [
      {
        q: 'Quali documenti servono per dimostrare la conformità delle scaffalature?',
        a: 'I documenti principali includono: calcoli strutturali, dichiarazione di conformità del produttore, istruzioni di montaggio e uso, cartelli di portata, report di ispezione periodica, e documentazione di eventuali modifiche o riparazioni. La validazione UNI 11636 verifica la completezza di questa documentazione.',
      },
      {
        q: 'Cosa rischio se le scaffalature non sono conformi?',
        a: 'I rischi sono molteplici: responsabilità civile e penale in caso di incidenti, sanzioni dall\'organo di vigilanza, blocco dell\'attività, danni a persone e merci. La non conformità rappresenta anche una violazione del D.Lgs. 81/08.',
      },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">FAQ</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-4">Domande frequenti</h1>
            <p className="text-lg text-primary-foreground/80">Le risposte alle domande più comuni sulla sicurezza delle scaffalature e dei magazzini.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map((cat) => (
            <div key={cat.title}>
              <h2 className="text-xl font-bold text-foreground mb-4">{cat.title}</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {cat.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`${cat.title}-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30">
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent py-5 text-sm">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <CTABanner title="Hai altre domande?" description="Contattaci per un confronto tecnico gratuito. Rispondiamo a tutte le richieste entro 24 ore." />
    </>
  );
}