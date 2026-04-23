import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import VisLogo from '../shared/VisLogo';
import { Button } from '@/components/ui/button';

const services = [
  { label: 'Ispezioni UNI EN 15635', path: '/servizi/ispezioni-scaffalature' },
  { label: 'Validazione UNI 11636', path: '/servizi/validazione-scaffalature' },
  { label: 'Manutenzione UNI 11731', path: '/servizi/manutenzione-scaffalature' },
  { label: 'PRSES Esterno', path: '/servizi/prses-esterno' },
  { label: 'Assistenza post-ispezione', path: '/servizi/assistenza-post-ispezione' },
  { label: 'Vulnerabilità sismica', path: '/servizi/vulnerabilita-sismica' },
  { label: 'Studi di layout', path: '/servizi/studi-layout-magazzino' },
  { label: 'Consulenza logistica', path: '/servizi/consulenza-logistica' },
  { label: 'Facility management', path: '/servizi/facility-management' },
  { label: 'Accessori scaffalature', path: '/servizi/accessori-scaffalature' },
  { label: 'Corsi di formazione', path: '/formazione' },
];

const navLinks = [
  { label: 'Chi siamo', path: '/chi-siamo' },
  { label: 'Contatti', path: '/contatti' },
];

const resourceLinks = [
  { label: 'Normativa', path: '/normativa' },
  { label: 'Blog', path: '/blog' },
  { label: 'Casi reali', path: '/casi-reali' },
  { label: 'Casi studio', path: '/casi-studio' },
  { label: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-xs">
          <span className="hidden sm:block">Sicurezza scaffalature e magazzini · Partner tecnico indipendente</span>
          <div className="flex items-center gap-4">
            <a href="tel:+390312248831" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              <span>+39 031 2248831</span>
            </a>
            <Link to="/contatti" className="hover:text-accent transition-colors font-medium">
              Richiedi sopralluogo →
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <VisLogo className="h-12" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive('/servizi') ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
                Servizi <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-72 bg-card border border-border rounded-lg shadow-xl p-2 animate-in fade-in-0 zoom-in-95">
                  <Link to="/servizi" className="block px-3 py-2 text-sm font-medium text-accent hover:bg-muted rounded-md transition-colors">
                    Tutti i servizi →
                  </Link>
                  <div className="h-px bg-border my-1" />
                  {services.map(s => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="block px-3 py-2 text-sm text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.path) ? 'text-accent' : 'text-foreground hover:text-accent'}`}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${resourceLinks.some(r => isActive(r.path)) ? 'text-accent' : 'text-foreground hover:text-accent'}`}>
                Risorse <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 w-52 bg-card border border-border rounded-lg shadow-xl p-2 animate-in fade-in-0 zoom-in-95">
                  {resourceLinks.map(r => (
                    <Link
                      key={r.path}
                      to={r.path}
                      className="block px-3 py-2 text-sm text-foreground hover:text-accent hover:bg-muted rounded-md transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contatti">
              <Button size="sm" className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90">
                Richiedi consulenza
              </Button>
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link to="/servizi" className="block px-3 py-2.5 text-sm font-medium text-accent" onClick={() => setMobileOpen(false)}>
              Tutti i servizi
            </Link>
            <Link to="/formazione" className="block px-6 py-2 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
              Corsi di formazione
            </Link>
            {services.map(s => (
              <Link key={s.path} to={s.path} className="block px-6 py-2 text-sm text-foreground" onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} className="block px-3 py-2.5 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-border my-1" />
            {resourceLinks.map(link => (
              <Link key={link.path} to={link.path} className="block px-3 py-2.5 text-sm text-foreground" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contatti" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Richiedi consulenza
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}