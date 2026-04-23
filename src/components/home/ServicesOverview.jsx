import { ClipboardCheck, FileCheck, Wrench, Activity, LayoutGrid, Truck, Building2, ShoppingBag } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import ServiceCard from '../shared/ServiceCard';

const services = [
  {
    icon: ClipboardCheck,
    title: 'Ispezioni UNI EN 15635',
    description: 'Controllo periodico delle scaffalature con classificazione dei danni e report dettagliato.',
    path: '/servizi/ispezioni-scaffalature',
  },
  {
    icon: FileCheck,
    title: 'Validazione UNI 11636',
    description: 'Verifica di conformità completa per scaffalature nuove, esistenti o modificate.',
    path: '/servizi/validazione-scaffalature',
  },
  {
    icon: Wrench,
    title: 'Manutenzione UNI 11731',
    description: 'Criteri tecnici per la valutazione dei danni e il corretto ripristino dei componenti.',
    path: '/servizi/manutenzione-scaffalature',
  },
  {
    icon: Activity,
    title: 'Vulnerabilità sismica',
    description: 'Analisi e valutazione delle scaffalature rispetto alle linee guida ministeriali 2023.',
    path: '/servizi/vulnerabilita-sismica',
  },
  {
    icon: LayoutGrid,
    title: 'Studi di layout',
    description: 'Ottimizzazione degli spazi, progettazione layout e miglioramento dei flussi operativi.',
    path: '/servizi/studi-layout-magazzino',
  },
  {
    icon: Truck,
    title: 'Consulenza logistica',
    description: 'Analisi flussi, organizzazione aree operative e riduzione delle criticità interne.',
    path: '/servizi/consulenza-logistica',
  },
  {
    icon: Building2,
    title: 'Facility management',
    description: 'Supporto tecnico nella scelta dei fornitori, direzione lavori e coordinamento montaggi.',
    path: '/servizi/facility-management',
  },
  {
    icon: ShoppingBag,
    title: 'Accessori scaffalature',
    description: 'Reti, protezioni, cartelli di portata, barriere antiurto e accessori di sicurezza.',
    path: '/servizi/accessori-scaffalature',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 sm:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="I nostri servizi"
          title="Sicurezza completa per le tue scaffalature"
          description="Un ciclo completo di servizi: dall'ispezione alla manutenzione, dalla conformità normativa all'ottimizzazione operativa."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.path} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}