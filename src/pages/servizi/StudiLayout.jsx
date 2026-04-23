import { LayoutGrid } from 'lucide-react';
import ServicePageTemplate from '../../components/services/ServicePageTemplate';

export default function StudiLayout() {
  return (
    <ServicePageTemplate
      icon={LayoutGrid}
      overline="Layout e progettazione"
      title="Studi di layout di magazzino"
      intro="Ottimizzazione degli spazi, progettazione del layout e miglioramento dei flussi di movimentazione per magazzini nuovi, esistenti o in fase di ampliamento."
      sections={[
        {
          heading: 'Il problema che risolviamo',
          content: 'Un layout inefficiente genera sprechi di spazio, rallenta le operazioni, aumenta i rischi per gli operatori e riduce la produttività. Molti magazzini crescono in modo organico senza una pianificazione strutturata.',
        },
        {
          heading: 'A chi è rivolto',
          content: 'Aziende che devono progettare un nuovo magazzino, ottimizzare uno esistente, gestire un ampliamento o una riorganizzazione. Responsabili logistici, di magazzino e della supply chain.',
        },
        {
          heading: 'Ottimizzazione degli spazi',
          content: 'Analizziamo le dimensioni disponibili, i vincoli strutturali e operativi, le tipologie di merce e i sistemi di stoccaggio più adatti per massimizzare l\'utilizzo dello spazio senza compromettere la sicurezza.',
        },
        {
          heading: 'Flussi di movimentazione',
          content: 'Studiamo i flussi di ingresso, stoccaggio, prelievo e spedizione per identificare colli di bottiglia, percorsi inefficienti e sovrapposizioni operative. L\'obiettivo è un flusso lineare e sicuro.',
        },
        {
          heading: 'Come si svolge',
          content: 'Partiamo dal rilievo dello stato attuale, analizziamo i dati operativi, elaboriamo una o più proposte di layout con planimetrie dettagliate e le presentiamo al cliente con confronto costi-benefici.',
        },
        {
          heading: 'Nuove installazioni e ampliamenti',
          content: 'Per nuovi magazzini o ampliamenti, forniamo il progetto del layout ottimale considerando volumi previsti, tipologia di stoccaggio, mezzi di movimentazione, normativa antincendio e sismica.',
        },
      ]}
      benefits={[
        'Massimizzazione dell\'utilizzo dello spazio',
        'Riduzione dei tempi operativi',
        'Miglioramento della sicurezza',
        'Flussi di movimentazione ottimizzati',
        'Planimetrie dettagliate e professionali',
        'Supporto nelle scelte di investimento',
      ]}
      cta="Richiedi uno studio di layout"
    />
  );
}