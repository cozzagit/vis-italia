import { UserCheck } from 'lucide-react';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export default function PRSESEsterno() {
  return (
    <ServicePageTemplate
      icon={UserCheck}
      overline="Servizio continuativo"
      title="PRSES Esterno – Persona Responsabile Sicurezza Scaffali in outsourcing"
      intro="Mettiamo a disposizione delle aziende una PRSES qualificata e indipendente in outsourcing: controlli periodici più frequenti, consulenza ai responsabili interni e supporto tempestivo in caso di danneggiamenti."
      sections={[
        {
          heading: 'Cos\'è la PRSES e perché affidarla all\'esterno',
          content: 'La UNI EN 15635 prevede che ogni azienda nomini una Persona Responsabile della Sicurezza degli Scaffali (PRSES) adeguatamente formata. Affidarla in outsourcing consente di avere una figura qualificata, indipendente e sempre aggiornata normativamente, senza i costi e le complessità di una gestione interna.',
        },
        {
          heading: 'Controlli periodici con frequenza aumentata',
          content: 'A differenza dell\'ispezione annuale minima prevista dalla norma, il servizio PRSES esterno prevede controlli più frequenti: mensili, bimestrali o trimestrali, in base alle esigenze operative e al livello di traffico del magazzino. Ogni controllo produce una registrazione documentata.',
        },
        {
          heading: 'Consulenza ai responsabili interni',
          content: 'Affianchiamo i responsabili di magazzino e i referenti per la sicurezza dell\'azienda cliente con supporto tecnico continuo: formazione informale on-site, chiarimenti normativi, indicazioni su come gestire le segnalazioni degli operatori e aggiornamenti sulle novità normative.',
        },
        {
          heading: 'Risposta tempestiva in caso di danneggiamento',
          content: 'In caso di urto, danno segnalato o incidente operativo, il cliente può contattarci per un sopralluogo urgente. Valutiamo rapidamente la gravità del danno, classiamo il componente secondo la UNI EN 15635 (verde/ambra/rosso) e indichiamo le azioni immediate da adottare.',
        },
        {
          heading: 'Documentazione e tracciabilità completa',
          content: 'Ogni controllo, ogni segnalazione e ogni intervento vengono documentati in modo strutturato. Il cliente dispone sempre di un registro aggiornato delle condizioni delle scaffalature, utile anche in caso di ispezioni da parte degli organi di vigilanza.',
        },
        {
          heading: 'Un servizio su misura per il tuo magazzino',
          content: 'Il piano di servizio viene definito insieme al cliente in base alle dimensioni del magazzino, al numero di scaffalature, all\'intensità operativa e al livello di rischio. Offriamo piani personalizzati con impegno annuale o pluriennale.',
        },
      ]}
      benefits={[
        'PRSES qualificata sempre disponibile',
        'Controlli più frequenti rispetto al minimo normativo',
        'Risposta rapida in caso di danni improvvisi',
        'Consulenza continua ai responsabili interni',
        'Documentazione completa e aggiornata',
        'Indipendenza e imparzialità di giudizio',
        'Nessun costo di formazione interna',
        'Aggiornamento automatico alle evoluzioni normative',
      ]}
      cta="Richiedi un piano PRSES esterno"
    />
  );
}