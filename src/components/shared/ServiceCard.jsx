import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ icon: Icon, title, description, path }) {
  return (
    <Link to={path} className="group block">
      <div className="h-full bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
        <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          Scopri di più <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}