import { Truck } from 'lucide-react';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export default function ConsulenzaLogistica() {
  return (
    <ServicePageTemplate
      icon={Truck}
      overline="Consulenza operativa"
      title="Consulenza logistica interna"
      intro="Analisi dei flussi operativi, organizzazione delle aree di lavoro e miglioramento dei processi interni per aumentare l'efficienza e ridurre le criticità del magazzino."
      sections={[
        {
          heading: 'Il problema che risolviamo',
          content: 'Molti magazzini funzionano con processi consolidati ma mai ottimizzati: flussi sovrapposti, aree mal organizzate, criticità ricorrenti che generano perdite di tempo, errori e rischi per la sicurezza.',
        },
        {
          heading: 'A chi è rivolto',
          content: 'Responsabili logistici, di magazzino, operations manager e imprenditori che vogliono migliorare l\'efficienza operativa senza necessariamente investire in nuove tecnologie o impianti.',
        },
        {
          heading: 'Analisi dei flussi',
          content: 'Mappiamo i flussi reali di merce, informazioni e persone all\'interno del magazzino. Identifichiamo le inefficienze, i punti di congestione e le operazioni a basso valore aggiunto.',
        },
        {
          heading: 'Organizzazione delle aree operative',
          content: 'Proponiamo una riorganizzazione delle aree funzionali: ricevimento, stoccaggio, preparazione ordini, spedizione, controllo qualità. Ogni area viene dimensionata in base ai volumi reali.',
        },
        {
          heading: 'Miglioramento dei processi',
          content: 'Interveniamo sui processi operativi per semplificarli, standardizzarli e renderli più sicuri: procedure di carico/scarico, gestione delle ubicazioni, politiche di rotazione della merce.',
        },
        {
          heading: 'Riduzione delle criticità',
          content: 'Affrontiamo le criticità ricorrenti: colli di bottiglia, errori di picking, danni alle merci, tempi di attesa, problemi di sicurezza. Per ognuna proponiamo soluzioni concrete e misurabili.',
        },
      ]}
      benefits={[
        'Aumento dell\'efficienza operativa',
        'Riduzione degli errori e dei tempi',
        'Migliore organizzazione degli spazi',
        'Processi standardizzati e replicabili',
        'Riduzione delle criticità ricorrenti',
        'Maggiore sicurezza per gli operatori',
      ]}
      cta="Richiedi una consulenza logistica"
    />
  );
}