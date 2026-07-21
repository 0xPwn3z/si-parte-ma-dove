import {
  Bath,
  Binoculars,
  Castle,
  Coffee,
  Droplets,
  Heart,
  Landmark,
  Map,
  Mountain,
  Sun,
  Utensils,
} from "@lucide/astro";

type IconComponent = typeof Heart;

export type Destination = {
  slug: "budapest" | "dubrovnik" | "sofia";
  name: string;
  cardLine: string;
  subtitle: string;
  selectedLine: string;
  accent: string;
  coordinates: string;
  why: string[];
  moments: {
    icon: IconComponent;
    title: string;
    text: string;
  }[];
  curiosity: {
    title: string;
    text: string;
  };
  images: {
    hero: string;
    heroAlt: string;
    card: string;
    cardAlt: string;
    gallery: {
      src: string;
      alt: string;
      caption: string;
    }[];
  };
};

const img = (id: string, w = 1800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`;

export const destinations: Destination[] = [
  {
    slug: "budapest",
    name: "Budapest",
    cardLine: "Acqua calda, luci basse, il fiume che divide e unisce.",
    subtitle: "Il Danubio qui non ha fretta, e ci presta la sua.",
    selectedLine: "Allora ci lasciamo portare dal Danubio.",
    accent: "oro sul fiume",
    coordinates: "47.4979° N, 19.0402° E",
    why: [
      "Ho scelto Budapest perché ha una malinconia bella, di quelle che ti fanno camminare più piano. La vedo già: tu con il cappotto sulle spalle, le mani chiuse nelle mie, e il ponte delle Catene che si accende proprio mentre smettiamo di parlare.",
      "Dopo tutti gli esami, le notti corte, i caffè bevuti in piedi, volevo un posto che sapesse festeggiarti piano. Acqua calda, una cenalunga, una passeggiata che non finisce dove doveva finire.",
    ],
    moments: [
      {
        icon: Bath,
        title: "Stare nelle terme",
        text: "Telefono spento nella mano, acqua che fuma, e l'ora che perde importanza.",
      },
      {
        icon: Landmark,
        title: "Attraversare il Danubio",
        text: "A piedi, sul tardi, quando i ponti si accendono uno dopo l'altro.",
      },
      {
        icon: Castle,
        title: "Salire a Buda",
        text: "Pest illuminata sotto di noi, e il prossimo angolo da scegliere insieme.",
      },
      {
        icon: Utensils,
        title: "Cercare una stanza piccola",
        text: "Un tavolo per due, un vino locale, e quella fame allegra che viene dopo una giornata fuori.",
      },
    ],
    curiosity: {
      title: "Sotto la città, l'acqua",
      text: "Budapest galleggia su oltre cento sorgenti termali. Gente che se ne accorgeva millenni fa, prima degli imperi, prima dei ponti. Io la prendo come un invito: c'è sempre stato un posto, qui, per rallentare.",
    },
    images: {
      hero: img("1756413664903-159797c47477", 2000),
      heroAlt: "Il Parlamento di Budapest e il Ponte delle Catene nella luce rosa del tramonto.",
      card: img("1756413664903-159797c47477", 1400),
      cardAlt: "Budapest vista dal Danubio al tramonto.",
      gallery: [
        {
          src: img("1656488675154-70800e4938ce", 1600),
          alt: "Un tram giallo attraversa Budapest in una giornata luminosa.",
          caption: "Un tram giallo, una fermata sbagliata, una risata.",
        },
        {
          src: img("1549877452-9c387954fbc2", 1600),
          alt: "I Bagni Szechenyi di Budapest con acqua termale azzurra.",
          caption: "L'acqua calda come premio.",
        },
        {
          src: img("1557694705-5cac01cf94a5", 1600),
          alt: "Una strada di Budapest illuminata dalle luci della sera.",
          caption: "La sera che arriva senza chiedere permesso.",
        },
      ],
    },
  },
  {
    slug: "dubrovnik",
    name: "Dubrovnik",
    cardLine: "Pietra chiara, mare stretto, luce che taglia i vicoli.",
    subtitle: "Una città costruita per camminare senza meta.",
    selectedLine: "Allora scegliamo la città di pietra e mare.",
    accent: "sale e luce",
    coordinates: "42.6507° N, 18.0944° E",
    why: [
      "Ho scelto Dubrovnik perché è il posto giusto per sparire dentro una città. Vicoli che salgono, gradini consumati, il mare che spunta tra due muri senza preavviso. Si cammina molto, e il pensiero si stacca da solo.",
      "Mi piace l'idea di regalarti qualcosa di scenografico senza che sembri una cartolina: scarpe comode, niente programma, e una pausa ogni volta che la luce diventa troppo bella per continuare a muoversi.",
    ],
    moments: [
      {
        icon: Map,
        title: "Perdere la strada",
        text: "Senza meta, scegliendo i vicoli per come suonano sotto i piedi.",
      },
      {
        icon: Sun,
        title: "Aspettare il tramonto",
        text: "Trovare un muretto alto, sederci, e lasciar cambiare colore al mare.",
      },
      {
        icon: Droplets,
        title: "Sentire il mare",
        text: "Anche quando non si vede: è lì, sotto la pietra, che tiene il passo.",
      },
      {
        icon: Coffee,
        title: "Colazione lunga",
        text: "Un caffè, qualcosa di caldo, e nessun posto dove dover essere.",
      },
    ],
    curiosity: {
      title: "Una città murata, per due",
      text: "Le mura di Dubrovnik abbracciano il centro per quasi due chilometri. Mi piace pensarle così: fuori il mondo intero, dentro un fine settimana che riguarda soltanto noi.",
    },
    images: {
      hero: img("1714236315411-3a0dcaf091e0", 2000),
      heroAlt: "Un vicolo verticale di Dubrovnik con tetti rossi e montagna sullo sfondo.",
      card: img("1714236315411-3a0dcaf091e0", 1400),
      cardAlt: "Un vicolo stretto e antico nel centro di Dubrovnik.",
      gallery: [
        {
          src: img("1575540291670-8d3b26f7d327", 1600),
          alt: "La costa rocciosa e il mare azzurro di Dubrovnik.",
          caption: "Il mare che appare tra la pietra.",
        },
        {
          src: img("1645203231925-185059ccf815", 1600),
          alt: "Tramonto arancione sul mare vicino Dubrovnik.",
          caption: "Una sera da non riempire di parole.",
        },
        {
          src: img("1750624580601-38c1f151d0e5", 1600),
          alt: "Tetti rossi di Dubrovnik visti dall'alto.",
          caption: "I tetti come pagine, tutti vicini.",
        },
      ],
    },
  },
  {
    slug: "sofia",
    name: "Sofia",
    cardLine: "Una capitale quieta, con le montagne sullo sfondo.",
    subtitle: "Il genere di posto che non chiede attenzione. La guadagna, piano.",
    selectedLine: "Allora partiamo verso la sorpresa più quieta.",
    accent: "verde e cupole",
    coordinates: "42.6977° N, 23.3219° E",
    why: [
      "Ho scelto Sofia perché non prova a impressionarti. Arrivi, ti sembra una capitale qualunque, e poi a poco a poco ti accorgi che c'è un ritmo diverso: viali larghi, tram gialli, cupole dorate che spuntano tra i palazzi, e una montagna — la Vitosha — che resta lì, vicina, come se potessi andarci a piedi.",
      "Mi piace perché è una scelta nostra, non ovvia. Nessuno ci ha consigliato di andarci. È il posto dove festeggiare la tua laurea senza dover mostrare niente a nessuno: camminare, fermarsi, assaggiare qualcosa che non conosciamo, e lasciare che la città ci racconti chi è.",
    ],
    moments: [
      {
        icon: Landmark,
        title: "Una piazza grande",
        text: "Le cupole della Aleksandr Nevski che cambiano colore secondo l'ora.",
      },
      {
        icon: Mountain,
        title: "La Vitosha vicina",
        text: "Una capitale con una montagna a mezz'ora. Andarci, anche solo per un caffè in alto.",
      },
      {
        icon: Binoculars,
        title: "Cortili e dettagli",
        text: "Insegne vecchie, scale di marmo, finestre che non si aspettano di essere guardate.",
      },
      {
        icon: Utensils,
        title: "Un piatto sconosciuto",
        text: "Sceglierlo solo per il nome che non sappiamo pronunciare. E vedere se ci resta dentro.",
      },
    ],
    curiosity: {
      title: "Strati sovrapposti",
      text: "Sotto i piedi di Sofia ci sono quasi duemila anni: romani, bizantini, ottomani, sovietici, e adesso noi. Camminando sopra tutto questo, mi è venuto in mente che certe cose — quelle che contano — si capiscono solo a strati, col tempo.",
    },
    images: {
      hero: img("1761157995926-15243368b7f1", 2000),
      heroAlt: "Un tram giallo passa a Sofia sotto lampioni eleganti.",
      card: img("1761157995926-15243368b7f1", 1400),
      cardAlt: "Un tram giallo attraversa Sofia al sole.",
      gallery: [
        {
          src: img("1627716803589-4406fa5fb256", 1600),
          alt: "Un viale affollato di Sofia con la cattedrale sullo sfondo.",
          caption: "Una città che si muove senza alzare la voce.",
        },
        {
          src: img("1753529179550-c6aff1b76e6e", 1600),
          alt: "La cattedrale Alexander Nevsky a Sofia sotto il cielo blu.",
          caption: "Le cupole chiare in piena luce.",
        },
        {
          src: img("1633604781134-a03e6ab7c117", 1600),
          alt: "Una strada di Sofia con alberi e palazzi in prospettiva.",
          caption: "Un posto nuovo da imparare insieme.",
        },
      ],
    },
  },
];

export const getDestination = (slug: string) =>
  destinations.find((destination) => destination.slug === slug);
