import { ShieldCheck, Scale, Wrench, Eye, FileCheck, Users } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Indipendenza di giudizio',
    description: 'Non vendiamo scaffalature né rappresentiamo produttori. Le nostre valutazioni sono imparziali e orientate esclusivamente alla sicurezza.',
  },
  {
    icon: Scale,
    title: 'Competenza normativa',
    description: 'Conoscenza approfondita di UNI EN 15635, UNI 11636, UNI 11731, D.Lgs. 81/08 e linee guida ministeriali 2023.',
  },
  {
    icon: Eye,
    title: 'Esperienza sul campo',
    description: 'Centinaia di ispezioni in magazzini di ogni dimensione e settore. Conosciamo i problemi reali, non solo la teoria.',
  },
  {
    icon: Wrench,
    title: 'Approccio operativo',
    description: 'Non ci limitiamo a segnalare le criticità: ti accompagniamo nella risoluzione con soluzioni concrete e attuabili.',
  },
  {
    icon: FileCheck,
    title: 'Documentazione completa',
    description: 'Report dettagliati, classificazione dei danni, raccomandazioni prioritarie e documentazione conforme alle norme.',
  },
  {
    icon: Users,
    title: 'Supporto continuo',
    description: 'Ti affianchiamo nel tempo: dalla prima ispezione alla manutenzione ordinaria, dalla validazione alla gestione sismica.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Perché scegliere noi"
          title="Il partner tecnico per la sicurezza del tuo magazzino"
          description="VIS ITALIA è al fianco di aziende, responsabili di magazzino e professionisti HSE con un approccio tecnico, indipendente e orientato alla conformità."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <r.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}