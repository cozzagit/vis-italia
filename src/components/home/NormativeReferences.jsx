import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const norms = [
  {
    code: 'UNI EN 15635',
    title: 'Utilizzo e manutenzione delle attrezzature di immagazzinamento',
    description: 'Definisce gli obblighi di ispezione periodica e la classificazione dei livelli di danno.',
    path: '/normativa/uni-en-15635',
  },
  {
    code: 'UNI 11636',
    title: 'Validazione delle scaffalature metalliche',
    description: 'Stabilisce i criteri per la verifica di conformità delle scaffalature esistenti e nuove.',
    path: '/normativa/uni-11636',
  },
  {
    code: 'UNI 11731',
    title: 'Specifiche tecniche e manutenzione scaffalature',
    description: 'Criteri per valutare danni, gestire ripristini e mantenere le condizioni di sicurezza.',
    path: '/normativa/uni-11731',
  },
  {
    code: 'D.Lgs. 81/08',
    title: 'Testo Unico sulla Sicurezza sul Lavoro',
    description: 'Il quadro normativo generale in materia di salute e sicurezza nei luoghi di lavoro.',
    path: '/normativa/dlgs-81-08',
  },
  {
    code: 'Linee Guida 2023',
    title: 'Scaffalature metalliche e vulnerabilità sismica',
    description: 'Le nuove linee guida ministeriali per la valutazione sismica delle scaffalature.',
    path: '/normativa/linee-guida-sismiche-2023',
  },
];

export default function NormativeReferences() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Riferimenti normativi"
          title="Le norme che guidano il nostro lavoro"
          description="Operiamo nel pieno rispetto del quadro normativo italiano ed europeo. Conoscere le norme è il primo passo per la sicurezza."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {norms.map((n) => (
            <Link key={n.code} to={n.path} className="group">
              <div className="h-full bg-card border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-5 w-5 text-accent shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{n.code}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm">{n.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{n.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Approfondisci <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}