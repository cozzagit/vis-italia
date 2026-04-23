import { FileCheck } from 'lucide-react';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export default function ValidazioneScaffalature() {
  return (
    <ServicePageTemplate
      icon={FileCheck}
      overline="UNI 11636"
      title="Validazione scaffalature"
      intro="Verifica di conformità completa delle scaffalature metalliche secondo la UNI 11636, con analisi documentale, verifica dell'installazione e produzione della documentazione tecnica di validazione."
      sections={[
        {
          heading: 'Cos\'è la validazione',
          content: 'La validazione è il processo di verifica complessiva della conformità di una scaffalatura metallica. A differenza della semplice ispezione periodica, analizza l\'intero sistema: documentazione tecnica, progetto strutturale, installazione, stato d\'uso e coerenza con le condizioni operative reali.',
        },
        {
          heading: 'Quando serve la validazione',
          content: 'La validazione è necessaria per scaffalature esistenti prive di documentazione completa, dopo modifiche significative all\'impianto, in caso di cambio di destinazione d\'uso, oppure quando si vuole dimostrare formalmente la conformità dell\'installazione.',
        },
        {
          heading: 'A chi è rivolto il servizio',
          content: 'A datori di lavoro, responsabili di magazzino e RSPP che necessitano di verificare e documentare la conformità dei propri impianti di stoccaggio, in particolare per scaffalature datate o prive di documentazione originale.',
        },
        {
          heading: 'Cosa viene verificato',
          content: 'Il processo prevede: verifica della documentazione tecnica disponibile, rilievo delle condizioni reali dell\'impianto, confronto con le specifiche del fabbricante, analisi delle condizioni d\'uso e verifica della conformità ai requisiti normativi.',
        },
        {
          heading: 'Documenti richiesti e prodotti',
          content: 'Richiediamo la documentazione disponibile: calcoli strutturali, dichiarazioni di conformità, istruzioni di montaggio. Al termine produciamo il documento di validazione che attesta la conformità, le condizioni d\'uso ammesse e le eventuali non conformità.',
        },
        {
          heading: 'Differenza tra validazione e ispezione periodica',
          content: 'L\'ispezione periodica (UNI EN 15635) è un controllo ricorrente sullo stato fisico dei componenti. La validazione è una verifica una tantum più ampia che analizza documentazione, progetto, installazione e coerenza complessiva del sistema.',
        },
      ]}
      benefits={[
        'Documentazione di conformità completa',
        'Chiarezza sulle condizioni d\'uso ammesse',
        'Copertura documentale per il datore di lavoro',
        'Identificazione delle non conformità',
        'Base per pianificare interventi correttivi',
        'Valutazione indipendente e qualificata',
      ]}
      cta="Richiedi una validazione"
    />
  );
}