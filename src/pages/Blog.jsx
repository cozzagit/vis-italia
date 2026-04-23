import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { articles as allArticles } from '@/lib/content';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const categories = ['Tutti', 'Normativa', 'Sicurezza magazzino', 'Scaffalature', 'Vulnerabilità sismica', 'Layout e logistica', 'Manutenzione e ripristino', 'Casi pratici'];

export default function Blog() {
  const [category, setCategory] = useState('Tutti');
  const [search, setSearch] = useState('');

  const isLoading = false;
  const articles = category === 'Tutti' ? allArticles : allArticles.filter((a) => a.category === category);

  const filtered = articles.filter((a) =>
    search === '' || a.title.toLowerCase().includes(search.toLowerCase()) || a.summary?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">Blog</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-4">Approfondimenti tecnici</h1>
            <p className="text-lg text-primary-foreground/80">
              Articoli, guide e aggiornamenti normativi sulla sicurezza delle scaffalature e dei magazzini.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cerca articoli..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Button
                  key={c}
                  variant={category === c ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setCategory(c)}
                  className={category === c ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}
                >
                  {c}
                </Button>
              ))}
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-4 border-muted border-t-accent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">
                {articles.length === 0 ? 'Nessun articolo pubblicato al momento.' : 'Nessun risultato per la ricerca.'}
              </p>
              <Link to="/contatti" className="text-accent font-medium hover:underline">
                Contattaci per informazioni →
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a) => (
                <Link key={a.id} to={`/blog/${a.slug}`} className="group">
                  <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all">
                    {a.cover_image && (
                      <div className="aspect-video bg-muted overflow-hidden">
                        <img src={a.cover_image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-wider text-accent">{a.category}</span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {a.publish_date}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">{a.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{a.summary}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                        Leggi <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}