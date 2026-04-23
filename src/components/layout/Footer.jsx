import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import VisLogo from '../shared/VisLogo';

const serviceLinks = [
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
];

const companyLinks = [
  { label: 'Chi siamo', path: '/chi-siamo' },
  { label: 'Formazione', path: '/formazione' },
  { label: 'Normativa', path: '/normativa' },
  { label: 'Blog', path: '/blog' },
  { label: 'Casi reali', path: '/casi-reali' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contatti', path: '/contatti' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
            <VisLogo className="h-14" light />
          </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Partner tecnico indipendente per la sicurezza dei magazzini e delle scaffalature industriali. 
              Ispezioni, validazioni, consulenza normativa e operativa.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Servizi</h4>
            <ul className="space-y-2">
              {serviceLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Azienda</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-accent">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span className="text-sm opacity-80">Via Dante Alighieri, 24<br />22040 Lurago d'Erba (CO)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <div className="text-sm opacity-80 space-y-0.5">
                  <a href="tel:+390312248831" className="block hover:opacity-100 transition-opacity">+39 031 2248831</a>
                  <a href="tel:+393440845474" className="block hover:opacity-100 transition-opacity">+39 344 0845474</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <div className="text-sm opacity-80 space-y-0.5">
                  <a href="mailto:info@vis-italia.it" className="block hover:opacity-100 transition-opacity">info@vis-italia.it</a>
                  <a href="mailto:ufficio.tecnico@vis-italia.it" className="block hover:opacity-100 transition-opacity">ufficio.tecnico@vis-italia.it</a>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/contatti" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">
                Richiedi sopralluogo
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} VIS ITALIA di Cristian Gagliardi – P.IVA 03633890136 – Tutti i diritti riservati
          </p>
          <div className="flex gap-4 text-xs opacity-60">
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}