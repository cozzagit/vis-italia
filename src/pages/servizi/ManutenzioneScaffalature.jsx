import { Wrench } from 'lucide-react';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export default function ManutenzioneScaffalature() {
  return (
    <ServicePageTemplate
      icon={Wrench}
      overline="UNI 11731"
      title="Specifiche tecniche e manutenzione scaffalature"
      intro="Consulenza tecnica per la corretta valutazione dei danni ai componenti e la gestione degli interventi di manutenzione secondo i criteri della UNI 11731."
      sections={[
        {
          heading: 'Il problema che risolviamo',
          content: 'Dopo un\'ispezione, i danni rilevati devono essere gestiti correttamente. Riparazioni improvvisate o l\'uso di componenti non conformi possono compromettere la sicurezza dell\'intero impianto. Serve un approccio tecnico rigoroso.',
        },
        {
          heading: 'Criteri per valutare danni e ripristini',
          content: 'La UNI 11731 fornisce parametri oggettivi per misurare le deformazioni dei componenti e stabilire se rientrano nelle tolleranze ammesse. Questo permette di distinguere tra danni che richiedono monitoraggio, intervento programmato o azione immediata.',
        },
        {
          heading: 'Gestione dei componenti danneggiati',
          content: 'Per ogni componente danneggiato valutiamo se è possibile mantenerlo in servizio con monitoraggio, se necessita di riparazione conforme o se va sostituito. La scelta dipende dalla tipologia e gravità del danno.',
        },
        {
          heading: 'Riparazione, sostituzione, manutenzione',
          content: 'Le riparazioni devono garantire il ripristino delle prestazioni strutturali originali. I componenti sostitutivi devono essere originali o equivalenti certificati. Ogni intervento viene documentato per garantire la tracciabilità.',
        },
        {
          heading: 'Importanza del corretto ripristino',
          content: 'Un ripristino non conforme può ridurre significativamente la capacità portante della scaffalatura, creando una situazione di rischio non evidente. Il rispetto dei criteri della UNI 11731 è essenziale per mantenere le condizioni di sicurezza.',
        },
      ]}
      benefits={[
        'Interventi conformi alla normativa',
        'Mantenimento della capacità portante',
        'Tracciabilità degli interventi',
        'Riduzione del rischio residuo',
        'Allungamento della vita utile delle scaffalature',
        'Documentazione tecnica completa',
      ]}
      cta="Richiedi una consulenza"
    />
  );
}