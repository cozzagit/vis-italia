import { Building2 } from 'lucide-react';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export default function FacilityManagement() {
  return (
    <ServicePageTemplate
      icon={Building2}
      overline="Supporto tecnico"
      title="Facility management e supporto tecnico"
      intro="Affianchiamo il cliente nella gestione tecnica del magazzino: dalla verifica delle offerte alla direzione lavori, dal coordinamento montaggi alla documentazione tecnica."
      sections={[
        {
          heading: 'Il problema che risolviamo',
          content: 'Scegliere il fornitore giusto, verificare la congruenza delle offerte, coordinare i montaggi e gestire la documentazione tecnica richiede competenze specifiche che spesso mancano all\'interno dell\'azienda.',
        },
        {
          heading: 'A chi è rivolto',
          content: 'Aziende che devono acquistare, installare o modificare scaffalature e impianti di stoccaggio. Responsabili di magazzino, uffici tecnici e direzioni che necessitano di supporto nella gestione dei progetti.',
        },
        {
          heading: 'Verifica offerte fornitori',
          content: 'Analizziamo le offerte ricevute dai fornitori di scaffalature, verificando la completezza tecnica, la conformità normativa, la congruenza dei prezzi e la qualità dei materiali proposti.',
        },
        {
          heading: 'Confronto tecnico-commerciale',
          content: 'Mettiamo a confronto le diverse proposte con criteri oggettivi: prestazioni strutturali, conformità normativa, qualità costruttiva, servizio post-vendita e rapporto qualità-prezzo.',
        },
        {
          heading: 'Coordinamento montaggi e direzione lavori',
          content: 'Supervisioniamo le fasi di montaggio per garantire il rispetto del progetto, delle istruzioni del fabbricante e delle condizioni di sicurezza. Gestiamo il cronoprogramma e il coordinamento con le attività del magazzino.',
        },
        {
          heading: 'Documentazione tecnica e sicurezza',
          content: 'Verifichiamo e organizziamo tutta la documentazione tecnica necessaria: calcoli strutturali, dichiarazioni di conformità, istruzioni di montaggio, cartelli di portata, certificati dei materiali.',
        },
      ]}
      benefits={[
        'Scelta consapevole dei fornitori',
        'Risparmio economico grazie al confronto tecnico',
        'Montaggio conforme al progetto',
        'Documentazione completa e organizzata',
        'Riduzione dei rischi di non conformità',
        'Supporto tecnico indipendente',
      ]}
      cta="Richiedi supporto tecnico"
    />
  );
}