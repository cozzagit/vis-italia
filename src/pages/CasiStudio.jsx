import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, AlertTriangle, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTABanner from '../components/shared/CTABanner';

const cases = [
  {
    id: 1,
    category: 'Urti da carrello',
    title: 'Montanti deformati da impatti ripetuti di carrelli elevatori',
    location: 'Magazzino logistico, Lombardia',
    problem: 'Durante un\'ispezione UNI EN 15635, sono stati rilevati numerosi montanti con deformazioni superiori alle tolleranze ammesse, causate da impatti ripetuti di carrelli elevatori nel corso degli anni. L\'azienda non disponeva di alcuna protezione antiurto e i danni non erano mai stati documentati.',
    intervention: 'Classificazione di tutti i danni secondo il sistema verde/ambra/rosso. Sostituzione immediata dei 6 montanti classificati "rosso" con scarico preventivo delle campate interessate. Installazione di protezioni paracolpi su tutti i montanti più esposti e posizionamento di guide a pavimento nei corridoi di transito.',
    result: 'Ripristino della piena capacità portante dell\'impianto. Zero danni strutturali nei successivi 12 mesi di monitoraggio. Il cliente ha adottato un piano di controllo periodico trimestrale.',
    before: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    ],
    after: [
      'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=800&q=80',
      'https://images.unsplash.com/photo-1565793979627-4b9f44fc7dfe?w=800&q=80',
    ],
  },
  {
    id: 2,
    category: 'Problemi documentali',
    title: 'Scaffalature senza documentazione tecnica da 20 anni',
    location: 'Deposito industriale, Veneto',
    problem: 'Un\'azienda manifatturiera con un impianto di scaffalature installato oltre 20 anni prima si trovava priva di qualsiasi documentazione tecnica: nessun calcolo strutturale, nessuna dichiarazione di conformità, nessun cartello di portata. Il datore di lavoro era esposto a piena responsabilità in caso di incidente.',
    intervention: 'Validazione completa dell\'impianto secondo UNI 11636 con rilievo delle condizioni reali, verifica delle capacità portanti, analisi della configurazione di installazione e produzione di tutta la documentazione tecnica mancante. Realizzazione e installazione dei cartelli di portata per ogni campata.',
    result: 'L\'azienda dispone oggi di documentazione tecnica completa e conforme. I limiti di carico sono chiaramente indicati su ogni campata. Il datore di lavoro è tutelato dal punto di vista della responsabilità civile e penale.',
    before: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&q=80',
    ],
    after: [
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
    ],
  },
  {
    id: 3,
    category: 'Cartelli di portata',
    title: 'Assenza di cartelli di portata in magazzino GDO',
    location: 'Centro distribuzione, Piemonte',
    problem: 'Un centro di distribuzione della grande distribuzione organizzata operava con scaffalature prive di cartelli di portata. Gli operatori caricavano i livelli in base all\'esperienza visiva, senza conoscere i limiti strutturali dell\'impianto. L\'organo di vigilanza aveva già segnalato la non conformità.',
    intervention: 'Recupero della documentazione tecnica originale dai produttori delle scaffalature. Verifica delle configurazioni reali di carico rispetto al progetto originale. Produzione di cartelli di portata personalizzati per ogni tipologia di campata e installazione su tutti i livelli.',
    result: 'Risoluzione della non conformità evidenziata dall\'organo di vigilanza. Gli operatori conoscono ora esattamente i limiti di carico per ogni livello. Eliminato il rischio di sovraccarico accidentale.',
    before: [
      'https://images.unsplash.com/photo-1579532537902-1e50099867b4?w=800&q=80',
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80',
    ],
    after: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    ],
  },
  {
    id: 4,
    category: 'Verticalità fuori tolleranza',
    title: 'Scaffalature inclinate oltre i limiti normativi',
    location: 'Magazzino e-commerce, Emilia-Romagna',
    problem: 'In un magazzino ad alta movimentazione, alcune campate presentavano inclinazioni superiori ai limiti ammessi dalla normativa, causate da assestamenti del pavimento industriale e da carichi eccentrici applicati nel corso degli anni. Il problema era visibile ad occhio nudo ma non era mai stato misurato né documentato.',
    intervention: 'Rilievo strumentale delle verticalità su tutto l\'impianto con documentazione fotografica e numerica. Scarico preventivo delle campate fuori tolleranza, intervento di ripristino con riallineamento dei montanti e verifica della piastra di base. Nuova misurazione finale a verifica del ripristino.',
    result: 'Tutte le campate rientrano nelle tolleranze normative. L\'azienda ha implementato un programma di controllo periodico delle verticalità. Il magazzino ha ripreso la piena operatività in sicurezza.',
    before: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
      'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80',
    ],
    after: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    ],
  },
];

function BeforeAfterGallery({ before, after }) {
  const [view, setView] = useState('before');
  const [imgIndex, setImgIndex] = useState(0);
  const images = view === 'before' ? before : after;

  const prev = () => setImgIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setImgIndex((i) => (i + 1) % images.length);

  return (
    <div className="space-y-3">
      {/* Toggle */}
      <div className="flex rounded-lg overflow-hidden border border-border w-fit">
        <button
          onClick={() => { setView('before'); setImgIndex(0); }}
          className={`px-4 py-1.5 text-sm font-medium transition-colors ${view === 'before' ? 'bg-destructive/90 text-white' : 'bg-card text-muted-foreground hover:text-foreground'}`}
        >
          Prima
        </button>
        <button
          onClick={() => { setView('after'); setImgIndex(0); }}
          className={`px-4 py-1.5 text-sm font-medium transition-colors ${view === 'after' ? 'bg-accent text-accent-foreground' : 'bg-card text-muted-foreground hover:text-foreground'}`}
        >
          Dopo
        </button>
      </div>

      {/* Main image */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted group">
        <img
          key={images[imgIndex]}
          src={images[imgIndex]}
          alt={view === 'before' ? 'Prima' : 'Dopo'}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        {/* Badge */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${view === 'before' ? 'bg-destructive/90 text-white' : 'bg-accent text-accent-foreground'}`}>
          {view === 'before' ? 'Prima' : 'Dopo'}
        </div>
        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setImgIndex(i)}
              className={`h-14 w-20 rounded-md overflow-hidden border-2 transition-all ${i === imgIndex ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function LightboxModal({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white/70 hover:text-white" onClick={onClose}>
        <X className="h-7 w-7" />
      </button>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white" onClick={(e) => { e.stopPropagation(); prev(); }}>
        <ChevronLeft className="h-8 w-8" />
      </button>
      <img src={images[index]} alt="" className="max-h-[85vh] max-w-full rounded-lg" onClick={(e) => e.stopPropagation()} />
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white" onClick={(e) => { e.stopPropagation(); next(); }}>
        <ChevronRight className="h-8 w-8" />
      </button>
      <div className="absolute bottom-4 text-white/50 text-sm">{index + 1} / {images.length}</div>
    </div>
  );
}

export default function CasiStudio() {
  const [lightbox, setLightbox] = useState(null);

  const allImagesForCase = (c) => [...c.before, ...c.after];

  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">Casi studio</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-4">
              Interventi reali, risultati documentati
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Galleria fotografica e schede tecniche degli interventi effettuati da VIS ITALIA nei magazzini dei nostri clienti. 
              Ogni caso illustra il problema riscontrato, l'intervento eseguito e i risultati ottenuti.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c, idx) => (
            <div key={c.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              {/* Header */}
              <div className="bg-muted border-b border-border px-6 sm:px-8 py-5 flex flex-wrap items-center gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">{c.category}</span>
                  <span className="text-xs text-muted-foreground hidden sm:block">{c.location}</span>
                </div>
                <span className="text-xs font-semibold text-muted-foreground">Caso #{String(idx + 1).padStart(2, '0')}</span>
              </div>

              <div className="px-6 sm:px-8 py-6 grid lg:grid-cols-2 gap-8 items-start">
                {/* Gallery */}
                <BeforeAfterGallery
                  before={c.before}
                  after={c.after}
                />

                {/* Content */}
                <div className="space-y-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">{c.title}</h2>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Problema riscontrato</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6">{c.problem}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Wrench className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Intervento effettuato</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6">{c.intervention}</p>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Risultati per il cliente</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-6">{c.result}</p>
                  </div>

                  <button
                    onClick={() => setLightbox({ images: allImagesForCase(c), index: 0 })}
                    className="inline-flex items-center gap-2 text-sm text-accent font-medium hover:underline"
                  >
                    Vedi tutte le foto <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox && (
        <LightboxModal
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      <CTABanner
        title="Hai riscontrato problemi simili nel tuo magazzino?"
        description="Contattaci per un sopralluogo tecnico. Valutiamo le criticità e ti proponiamo le soluzioni più adatte."
        primaryLabel="Richiedi un sopralluogo"
      />
    </>
  );
}