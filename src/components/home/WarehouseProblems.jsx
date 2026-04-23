import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionHeader from '../shared/SectionHeader';

const problems = [
  {
    title: 'Montanti deformati o ammaccati',
    description: 'Gli urti da carrello sono la causa più frequente di danno strutturale alle scaffalature.',
  },
  {
    title: 'Assenza di cartelli di portata',
    description: 'Senza cartelli chiari, gli operatori non conoscono i limiti di carico, aumentando il rischio di crolli.',
  },
  {
    title: 'Scaffalature non validate',
    description: 'Impianti installati senza documentazione tecnica né verifica di conformità alla normativa vigente.',
  },
  {
    title: 'Verticalità fuori tolleranza',
    description: 'Scaffalature inclinate oltre i limiti ammessi, con compromissione della stabilità strutturale.',
  },
  {
    title: 'Componenti non originali',
    description: 'Uso di ricambi generici o incompatibili che riducono la capacità portante dell\'impianto.',
  },
  {
    title: 'Nessuna valutazione sismica',
    description: 'Scaffalature mai sottoposte a verifica rispetto alle nuove linee guida ministeriali 2023.',
  },
];

export default function WarehouseProblems() {
  return (
    <section className="py-20 sm:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Problemi tipici"
          title="Lo stato reale dei magazzini italiani"
          description="Queste sono le criticità che riscontriamo più spesso durante le nostre ispezioni. Quante ne riconosci nel tuo magazzino?"
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p) => (
            <div key={p.title} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 backdrop-blur-sm">
              <AlertTriangle className="h-5 w-5 text-accent mb-3" />
              <h3 className="font-semibold text-primary-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contatti">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Richiedi una verifica gratuita
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}