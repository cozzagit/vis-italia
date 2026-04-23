import { ClipboardList } from 'lucide-react';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export default function AssistenzaPostIspezione() {
  return (
    <ServicePageTemplate
      icon={ClipboardList}
      overline="Supporto operativo"
      title="Assistenza post-ispezione"
      intro="Non ci fermiamo al report. Affianchiamo il cliente in tutta la fase successiva all'ispezione: contatto con i fornitori per i preventivi di ripristino, selezione delle migliori soluzioni e scelta degli accessori più adatti a prevenire nuovi danni."
      sections={[
        {
          heading: 'Il problema che risolviamo',
          content: 'Dopo un\'ispezione, il cliente si trova spesso con un elenco di criticità da risolvere ma senza le competenze tecniche per valutare le offerte dei fornitori, scegliere la soluzione migliore o capire quali accessori possano prevenire i danni futuri. Noi colmiamo questo gap.',
        },
        {
          heading: 'Contatto con i fornitori e raccolta offerte',
          content: 'Gestiamo direttamente il contatto con i fornitori di scaffalature e accessori per richiedere i preventivi di ripristino. Forniamo loro le specifiche tecniche corrette, in modo che le offerte siano comparabili, complete e conformi ai requisiti normativi.',
        },
        {
          heading: 'Analisi e confronto delle offerte',
          content: 'Analizziamo le offerte ricevute con criteri tecnici oggettivi: conformità ai requisiti normativi, qualità dei componenti proposti, completezza dell\'intervento, modalità di esecuzione e rapporto qualità-prezzo. Presentiamo al cliente una comparazione chiara e una raccomandazione motivata.',
        },
        {
          heading: 'Scelta delle migliori soluzioni di ripristino',
          content: 'Non tutte le soluzioni proposte dai fornitori sono equivalenti. Verifichiamo che i componenti sostitutivi siano originali o conformi, che l\'intervento rispetti i criteri della UNI 11731 e che il risultato finale garantisca il ripristino delle condizioni di sicurezza originali.',
        },
        {
          heading: 'Selezione degli accessori preventivi',
          content: 'Dopo aver analizzato le cause dei danni riscontrati, consigliamo gli accessori più adatti a prevenirne il ripetersi: protezioni montanti, barriere antiurto, guide a pavimento, reti di sicurezza, cartelli di portata. La scelta è sempre orientata alla massima efficacia con il minor investimento possibile.',
        },
        {
          heading: 'Aggiornamento e ottimizzazione del magazzino',
          content: 'In questa fase, valutiamo anche eventuali opportunità di miglioramento complessivo: piccole ottimizzazioni di layout, aggiornamento dei cartelli, sostituzione di componenti obsoleti o adeguamento delle configurazioni di carico. Un\'occasione per rendere il magazzino più sicuro ed efficiente.',
        },
        {
          heading: 'Supervisione dell\'intervento di ripristino',
          content: 'Su richiesta, affianchiamo il cliente anche durante l\'esecuzione degli interventi, verificando che il montaggio dei nuovi componenti avvenga correttamente e che il risultato sia conforme al progetto originale e ai requisiti normativi.',
        },
      ]}
      benefits={[
        'Supporto tecnico nella fase più complessa',
        'Confronto offerte con criteri oggettivi',
        'Garanzia di ripristini conformi alla normativa',
        'Scelta degli accessori più efficaci',
        'Risparmio di tempo e riduzione degli errori',
        'Un unico interlocutore per tutto il processo',
        'Magazzino più sicuro e prevenzione dei danni futuri',
        'Documentazione degli interventi eseguiti',
      ]}
      cta="Richiedi assistenza post-ispezione"
    />
  );
}