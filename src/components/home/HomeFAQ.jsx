import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import SectionHeader from '../shared/SectionHeader';

const faqs = [
  {
    q: 'Ogni quanto va fatta l\'ispezione delle scaffalature?',
    a: 'La norma UNI EN 15635 prevede un\'ispezione da parte di persona tecnicamente competente almeno una volta all\'anno, oltre ai controlli visivi più frequenti da parte del personale interno formato.',
  },
  {
    q: 'Chi può eseguire il controllo delle scaffalature?',
    a: 'I controlli devono essere eseguiti da personale formato (ispezioni interne) e, con cadenza almeno annuale, da una persona tecnicamente competente esterna, come previsto dalla UNI EN 15635.',
  },
  {
    q: 'La validazione è diversa dall\'ispezione?',
    a: 'Sì. L\'ispezione periodica (UNI EN 15635) è un controllo ricorrente sullo stato dei componenti. La validazione (UNI 11636) è una verifica di conformità più ampia che analizza documentazione, progetto, installazione e stato d\'uso.',
  },
  {
    q: 'Quando serve una verifica sismica delle scaffalature?',
    a: 'Le linee guida ministeriali 2023 richiedono una valutazione della vulnerabilità sismica per le scaffalature metalliche, in particolare in zone a rischio sismico e per impianti con altezze rilevanti o aperti al pubblico.',
  },
  {
    q: 'Cosa succede se mancano i cartelli di portata?',
    a: 'L\'assenza di cartelli di portata è una non conformità grave. Senza indicazioni chiare, gli operatori non possono rispettare i limiti di carico, aumentando il rischio di sovraccarico e cedimento.',
  },
];

export default function HomeFAQ() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="FAQ"
          title="Domande frequenti"
          description="Le risposte alle domande più comuni sulla sicurezza delle scaffalature."
        />
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30">
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-8">
          <Link to="/faq" className="text-accent font-medium hover:underline">
            Vedi tutte le FAQ →
          </Link>
        </div>
      </div>
    </section>
  );
}