import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import CTABanner from '../components/shared/CTABanner';

export default function BlogArticle() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = window.location.pathname.split('/blog/')[1];

  const { data: articles = [], isLoading } = useQuery({
    queryKey: ['article', slug],
    queryFn: () => base44.entities.Article.filter({ slug, published: true }),
  });

  const article = articles[0];

  const { data: related = [] } = useQuery({
    queryKey: ['related-articles', article?.category],
    queryFn: () => base44.entities.Article.filter({ category: article.category, published: true }, '-publish_date', 4),
    enabled: !!article?.category,
  });

  const relatedFiltered = related.filter((a) => a.id !== article?.id).slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-muted border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Articolo non trovato</h2>
          <Link to="/blog" className="text-accent font-medium hover:underline">← Torna al blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/70 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Tutti gli articoli
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">{article.category}</span>
            <span className="text-xs text-primary-foreground/60 flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {article.publish_date}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground tracking-tight mb-4">{article.title}</h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">{article.summary}</p>
          <div className="flex items-center gap-2 mt-6 text-sm text-primary-foreground/60">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.cover_image && (
            <div className="aspect-video rounded-xl overflow-hidden mb-10">
              <img src={article.cover_image} alt={article.title} className="w-full h-full object-cover" />
            </div>
          )}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-accent" dangerouslySetInnerHTML={{ __html: article.content }} />

          {article.tags?.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-border">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs bg-muted text-muted-foreground rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {relatedFiltered.length > 0 && (
        <section className="py-12 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Articoli correlati</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedFiltered.map((a) => (
                <Link key={a.id} to={`/blog/${a.slug}`} className="group">
                  <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">{a.category}</span>
                    <h3 className="font-semibold text-foreground mt-2 group-hover:text-accent transition-colors line-clamp-2">{a.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{a.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner title="Hai bisogno di assistenza tecnica?" description="Contattaci per un sopralluogo o una consulenza dedicata sulle tue scaffalature." />
    </>
  );
}