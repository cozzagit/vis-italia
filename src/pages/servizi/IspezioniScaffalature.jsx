import { ClipboardCheck } from 'lucide-react';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export default function IspezioniScaffalature() {
  return (
    <ServicePageTemplate
      icon={ClipboardCheck}
      overline="UNI EN 15635"
      title="Ispezioni scaffalature"
      intro="Ispezione periodica delle scaffalature metalliche secondo la UNI EN 15635, con classificazione dei danni, report dettagliato e raccomandazioni operative per il mantenimento delle condizioni di sicurezza."
      sections={[
        {
          heading: 'Il problema che risolviamo',
          content: 'Le scaffalature subiscono danni nel tempo: urti da carrello, sovraccarichi, usura dei componenti. Senza un controllo periodico qualificato, questi danni possono passare inosservati fino a provocare cedimenti strutturali con conseguenze gravi per persone e merci.',
        },
        {
          heading: 'A chi è rivolto il servizio',
          content: 'A tutte le aziende che utilizzano scaffalature metalliche: magazzini, centri logistici, industrie, grande distribuzione, depositi. È rivolto ai datori di lavoro, responsabili di magazzino, HSE manager e responsabili della sicurezza.',
        },
        {
          heading: 'Obblighi e finalità del controllo periodico',
          content: 'La norma UNI EN 15635 prevede un\'ispezione da parte di persona tecnicamente competente almeno una volta all\'anno. Questo controllo è fondamentale per identificare danni, non conformità e situazioni di rischio prima che degenerino.',
        },
        {
          heading: 'Come si svolge l\'ispezione',
          content: 'L\'ispezione prevede un sopralluogo in sito durante il quale vengono controllati tutti i componenti delle scaffalature: montanti, correnti, collegamenti, basi, ancoraggi, distanziali, protezioni. Ogni danno viene classificato secondo il sistema verde-ambra-rosso previsto dalla norma.',
        },
        {
          heading: 'Classificazione dei danni',
          content: 'Verde: danno minore che richiede monitoraggio. Ambra: danno significativo che richiede intervento programmato entro 4 settimane. Rosso: danno grave che richiede scarico immediato del componente e segregazione fino alla riparazione o sostituzione.',
        },
        {
          heading: 'Output: il report finale',
          content: 'Al termine dell\'ispezione viene consegnato un report dettagliato con: elenco dei danni rilevati, classificazione per livello di gravità, foto documentali, raccomandazioni prioritarie e piano di azione suggerito.',
        },
        {
          heading: 'Differenza tra controllo interno e ispezione specialistica',
          content: 'Il controllo interno è una verifica visiva frequente eseguita dal personale di magazzino formato. L\'ispezione specialistica è più approfondita, viene eseguita da un esperto esterno indipendente e produce documentazione formale. Entrambi sono previsti dalla norma.',
        },
      ]}
      benefits={[
        'Conformità alla UNI EN 15635',
        'Identificazione tempestiva dei danni',
        'Report dettagliato con classificazione dei danni',
        'Raccomandazioni operative prioritizzate',
        'Prevenzione di cedimenti e incidenti',
        'Documentazione per il datore di lavoro',
        'Pianificazione degli interventi di manutenzione',
        'Valutazione indipendente e imparziale',
      ]}
      cta="Richiedi un'ispezione"
    />
  );
}