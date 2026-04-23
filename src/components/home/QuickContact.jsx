import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const info = [
  { icon: Phone, label: 'Telefono', value: 'Chiama ora', href: 'tel:+390000000000' },
  { icon: Mail, label: 'Email', value: 'info@vis-italia.it', href: 'mailto:info@vis-italia.it' },
  { icon: MapPin, label: 'Sede', value: 'Italia', href: null },
  { icon: Clock, label: 'Risposta', value: 'Entro 24 ore', href: null },
];

export default function QuickContact() {
  return (
    <section className="py-20 sm:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 text-accent">Contatti rapidi</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">Parliamo del tuo magazzino</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contattaci per un sopralluogo, una consulenza o semplicemente per un confronto tecnico. 
            Rispondiamo a tutte le richieste entro 24 ore.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {info.map((item) => {
            const content = (
              <div className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/50 hover:shadow-md transition-all">
                <div className="h-11 w-11 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</span>
                <span className="font-medium text-foreground text-sm">{item.value}</span>
              </div>
            );
            return item.href ? (
              <a key={item.label} href={item.href}>{content}</a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link to="/contatti" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">
            Compila il form di contatto →
          </Link>
        </div>
      </div>
    </section>
  );
}