import { Activity } from 'lucide-react';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export default function VulnerabilitaSismica() {
  return (
    <ServicePageTemplate
      icon={Activity}
      overline="Linee guida ministeriali 2023"
      title="Vulnerabilità sismica delle scaffalature"
      intro="Analisi e valutazione della vulnerabilità sismica delle scaffalature metalliche secondo le linee guida ministeriali 2023, con identificazione delle criticità e definizione delle strategie di intervento."
      sections={[
        {
          heading: 'Le linee guida ministeriali 2023',
          content: 'Le nuove linee guida ministeriali rappresentano il riferimento più aggiornato per la valutazione della vulnerabilità sismica delle scaffalature metalliche in Italia. Definiscono un percorso strutturato: dai controlli preliminari alla valutazione approfondita.',
        },
        {
          heading: 'Controlli preliminari',
          content: 'Il percorso parte da un controllo preliminare che verifica le condizioni generali dell\'impianto, la corrispondenza con il progetto originale, lo stato dei componenti e l\'assenza di criticità evidenti che possano compromettere il comportamento sismico.',
        },
        {
          heading: 'Valutazione delle scaffalature esistenti',
          content: 'Sulla base dei controlli preliminari, si procede alla valutazione della vulnerabilità sismica vera e propria. Questa analisi tiene conto delle caratteristiche costruttive, delle condizioni d\'uso, della zona sismica e della classificazione del sito.',
        },
        {
          heading: 'Criticità più frequenti',
          content: 'Le criticità più comuni includono: assenza di controventi sismici, ancoraggio insufficiente a pavimento, connessioni non dimensionate per azioni sismiche, altezze eccessive senza adeguato controventamento, componenti danneggiati che riducono la resistenza.',
        },
        {
          heading: 'Interventi e strategie di adeguamento',
          content: 'In base ai risultati, si possono definire interventi di miglioramento sismico (riduzione parziale della vulnerabilità con costi contenuti) o di adeguamento sismico (raggiungimento dei requisiti previsti per le nuove installazioni).',
        },
        {
          heading: 'Quando approfondire',
          content: 'È necessario approfondire la valutazione quando l\'impianto è situato in zone ad alta sismicità, ha altezze rilevanti, è accessibile al pubblico, presenta criticità emerse dai controlli preliminari o quando il committente necessita di una valutazione formale.',
        },
      ]}
      benefits={[
        'Consapevolezza del livello di rischio sismico',
        'Conformità alle linee guida ministeriali 2023',
        'Piano di intervento chiaro e prioritizzato',
        'Documentazione tecnica per il datore di lavoro',
        'Ottimizzazione dei costi di adeguamento',
        'Supporto nella scelta delle strategie di intervento',
      ]}
      cta="Richiedi una valutazione sismica"
    />
  );
}