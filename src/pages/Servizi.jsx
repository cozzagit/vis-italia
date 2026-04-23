import { ClipboardCheck, FileCheck, Wrench, Activity, LayoutGrid, Truck, Building2, ShoppingBag, UserCheck, ClipboardList } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import ServiceCard from '../components/shared/ServiceCard';
import CTABanner from '../components/shared/CTABanner';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Ispezioni scaffalature UNI EN 15635',
    description: 'Controllo periodico delle scaffalature con persona tecnicamente competente, classificazione dei danni e report dettagliato per la conformità normativa.',
    path: '/servizi/ispezioni-scaffalature',
  },
  {
    icon: FileCheck,
    title: 'Validazione scaffalature UNI 11636',
    description: 'Verifica di conformità completa per scaffalature nuove, esistenti o modificate, con documentazione tecnica dettagliata.',
    path: '/servizi/validazione-scaffalature',
  },
  {
    icon: Wrench,
    title: 'Manutenzione scaffalature UNI 11731',
    description: 'Criteri tecnici per la valutazione dei danni, la gestione dei componenti danneggiati e il corretto ripristino.',
    path: '/servizi/manutenzione-scaffalature',
  },
  {
    icon: UserCheck,
    title: 'PRSES Esterno in outsourcing',
    description: 'PRSES qualificata in outsourcing: controlli frequenti, consulenza ai responsabili interni e risposta rapida in caso di danni.',
    path: '/servizi/prses-esterno',
  },
  {
    icon: ClipboardList,
    title: 'Assistenza post-ispezione',
    description: 'Ti affianchiamo dopo l\'ispezione: raccolta offerte di ripristino, confronto fornitori, selezione delle soluzioni e degli accessori migliori.',
    path: '/servizi/assistenza-post-ispezione',
  },
  {
    icon: Activity,
    title: 'Vulnerabilità sismica scaffalature',
    description: 'Analisi e valutazione delle scaffalature rispetto alle linee guida ministeriali 2023 sulla vulnerabilità sismica.',
    path: '/servizi/vulnerabilita-sismica',
  },
  {
    icon: LayoutGrid,
    title: 'Studi di layout di magazzino',
    description: 'Ottimizzazione degli spazi, progettazione layout, miglioramento dei flussi di movimentazione e delle aree operative.',
    path: '/servizi/studi-layout-magazzino',
  },
  {
    icon: Truck,
    title: 'Consulenza logistica interna',
    description: 'Analisi dei flussi, organizzazione delle aree operative, riduzione criticità e aumento dell\'efficienza operativa.',
    path: '/servizi/consulenza-logistica',
  },
  {
    icon: Building2,
    title: 'Facility management e supporto tecnico',
    description: 'Verifica offerte fornitori, supporto nella scelta, coordinamento montaggi, direzione lavori e documentazione tecnica.',
    path: '/servizi/facility-management',
  },
  {
    icon: ShoppingBag,
    title: 'Vendita accessori per scaffalature',
    description: 'Reti orizzontali, cartelli di portata, protezioni montanti, barriere antiurto, gancetti di sicurezza e accessori.',
    path: '/servizi/accessori-scaffalature',
  },
];

export default function Servizi() {
  return (
    <>
      <section className="bg-primary py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">I nostri servizi</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-6">
              Sicurezza completa per scaffalature e magazzini
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Un ciclo completo di servizi tecnici: dall'ispezione alla manutenzione, dalla conformità normativa all'ottimizzazione operativa. 
              Ogni servizio è progettato per risolvere problemi concreti con soluzioni misurabili.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.path} {...s} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}