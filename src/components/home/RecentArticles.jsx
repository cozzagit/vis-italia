import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { articles as allArticles } from '@/lib/content';
import SectionHeader from '../shared/SectionHeader';

export default function RecentArticles() {
  const articles = allArticles.slice(0, 3);

  if (articles.length === 0) {
    return (
      <section className="py-20 sm:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Dal nostro blog"
            title="Approfondimenti tecnici"
            description="Articoli, guide e aggiornamenti normativi sulla sicurezza delle scaffalature e dei magazzini."
          />
          <div className="text-center">
            <p className="text-muted-foreground mb-6">I prossimi articoli saranno disponibili a breve.</p>
            <Link to="/contatti" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
              Contattaci per informazioni <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Dal nostro blog"
          title="Approfondimenti tecnici"
          description="Articoli, guide e aggiornamenti normativi sulla sicurezza delle scaffalature e dei magazzini."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link key={a.id} to={`/blog/${a.slug}`} className="group">
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all">
                {a.cover_image && (
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img src={a.cover_image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">{a.category}</span>
                  <h3 className="font-semibold text-foreground mt-2 mb-2 group-hover:text-accent transition-colors line-clamp-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{a.summary}</p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{a.publish_date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-accent font-medium hover:underline">
            Tutti gli articoli <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}