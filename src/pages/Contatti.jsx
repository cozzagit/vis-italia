import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { base44 } from '@/api/base44Client';

const requestTypes = [
  'Ispezione scaffalature',
  'Validazione scaffalature',
  'Vulnerabilità sismica',
  'Accessori scaffalature',
  'Consulenza layout',
  'Consulenza logistica',
  'Facility management',
  'Altro',
];

const contactInfo = [
  { icon: Phone, label: 'Telefono', value: '+39 031 2248831', href: 'tel:+390312248831' },
  { icon: Phone, label: 'Cellulare', value: '+39 344 0845474', href: 'tel:+393440845474' },
  { icon: Mail, label: 'Email', value: 'info@vis-italia.it', href: 'mailto:info@vis-italia.it' },
  { icon: Mail, label: 'Ufficio tecnico', value: 'ufficio.tecnico@vis-italia.it', href: 'mailto:ufficio.tecnico@vis-italia.it' },
  { icon: MapPin, label: 'Sede', value: "Via Dante Alighieri, 24 – 22040 Lurago d'Erba (CO)", href: null },
  { icon: Clock, label: 'Rispondiamo', value: 'Entro 24 ore lavorative', href: null },
];

export default function Contatti() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', request_type: '', message: '', privacy_accepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ContactRequest.create(form);
    await base44.integrations.Core.SendEmail({
      to: 'info@vis-italia.it',
      subject: `Nuova richiesta: ${form.request_type} - ${form.name}`,
      body: `Nome: ${form.name}\nAzienda: ${form.company}\nEmail: ${form.email}\nTelefono: ${form.phone}\nTipo: ${form.request_type}\n\nMessaggio:\n${form.message}`,
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-background">
        <div className="text-center max-w-md px-4">
          <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Richiesta inviata</h2>
          <p className="text-muted-foreground mb-2">Grazie per averci contattato. Ti risponderemo entro 24 ore lavorative.</p>
          <p className="text-sm text-muted-foreground">Controlla anche la cartella spam se non ricevi risposta.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-accent">Contatti</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground tracking-tight mb-4">Parliamo del tuo magazzino</h1>
            <p className="text-lg text-primary-foreground/80">
              Compila il form per richiedere un sopralluogo, una consulenza o un preventivo. 
              Ti rispondiamo entro 24 ore lavorative.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Nome e cognome *</label>
                    <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Mario Rossi" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Azienda</label>
                    <Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Nome azienda" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="email@azienda.it" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Telefono</label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+39 000 000 0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Tipo di richiesta *</label>
                  <Select required onValueChange={(v) => setForm({ ...form, request_type: v })}>
                    <SelectTrigger><SelectValue placeholder="Seleziona il tipo di richiesta" /></SelectTrigger>
                    <SelectContent>
                      {requestTypes.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Messaggio *</label>
                  <Textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Descrivi la tua esigenza..." />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="privacy"
                    checked={form.privacy_accepted}
                    onCheckedChange={(c) => setForm({ ...form, privacy_accepted: !!c })}
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    Acconsento al trattamento dei miei dati personali ai sensi del GDPR per rispondere alla mia richiesta. *
                  </label>
                </div>
                <Button type="submit" size="lg" disabled={loading || !form.privacy_accepted} className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                  {loading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Invio in corso...</> : 'Invia richiesta'}
                </Button>
                <p className="text-xs text-muted-foreground">
                  Ti risponderemo entro 24 ore lavorative. I tuoi dati non saranno condivisi con terzi.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <span className="block text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-foreground hover:text-accent transition-colors">{item.value}</a>
                      ) : (
                        <span className="font-medium text-foreground">{item.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5">
                <p className="text-sm text-foreground leading-relaxed">
                  <strong>Nota:</strong> Se hai un'urgenza relativa alla sicurezza delle tue scaffalature, 
                  contattaci telefonicamente per una risposta prioritaria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}