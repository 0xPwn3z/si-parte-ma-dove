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
    cardLine: "Una città da attraversare piano, mano nella mano.",
    subtitle: "Dove il Danubio sembra tenere il tempo per noi.",
    selectedLine: "Allora ci lasciamo portare dal Danubio.",
    accent: "oro sul fiume",
    coordinates: "47.4979° N, 19.0402° E",
    why: [
      "Ho scelto Budapest perché ha quella malinconia bella delle città che non hanno fretta. Mi piace immaginarti lì, con il cappotto sulle spalle, mentre una luce dorata cade sui ponti e noi decidiamo di non correre da nessuna parte.",
      "Dopo tutta la strada che hai fatto per arrivare fino alla laurea, volevo un luogo che sapesse festeggiare senza fare rumore: acqua calda, facciate illuminate, cene semplici e una passeggiata più lunga del previsto.",
    ],
    moments: [
      {
        icon: Bath,
        title: "Entrare alle terme",
        text: "Lasciare fuori il telefono e restare un po' nell'acqua calda, come se il tempo si fosse sciolto.",
      },
      {
        icon: Landmark,
        title: "Attraversare il ponte",
        text: "Camminare sul Danubio quando la città comincia ad accendersi.",
      },
      {
        icon: Castle,
        title: "Salire fino a Buda",
        text: "Guardare Pest dall'alto e scegliere insieme il prossimo angolo da raggiungere.",
      },
      {
        icon: Utensils,
        title: "Cercare una cena piccola",
        text: "Un tavolo caldo, qualcosa di locale, e quella fame felice che arriva dopo una giornata fuori.",
      },
    ],
    curiosity: {
      title: "Una piccola promessa",
      text: "A Budapest ci sono più di cento sorgenti termali. Io la prendo come un segno: dopo mesi intensi, meritiamo un posto che sappia farci rallentare davvero.",
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
    cardLine: "Pietra chiara, mare vicino, giornate da ricordare.",
    subtitle: "Dove le storie sembrano prendere vita.",
    selectedLine: "Allora scegliamo la città di pietra e mare.",
    accent: "sale e luce",
    coordinates: "42.6507° N, 18.0944° E",
    why: [
      "Ho scelto Dubrovnik perché sembra fatta per camminare senza sapere esattamente dove si sta andando. Vicoli stretti, gradini, finestre aperte, il mare che compare all'improvviso tra due muri.",
      "Mi piace l'idea di regalarti un posto scenografico ma non distante da noi: una città da vivere con scarpe comode, occhi curiosi e una pausa ogni volta che la luce diventa troppo bella per continuare.",
    ],
    moments: [
      {
        icon: Map,
        title: "Perderci nei vicoli",
        text: "Senza itinerario rigido, seguendo solo le strade che ci chiamano.",
      },
      {
        icon: Sun,
        title: "Aspettare il tramonto",
        text: "Trovare un punto alto e restare lì finché il mare cambia colore.",
      },
      {
        icon: Droplets,
        title: "Sentire il mare vicino",
        text: "Anche quando non lo vediamo, lasciarlo guidare il passo.",
      },
      {
        icon: Coffee,
        title: "Fare colazione lentamente",
        text: "Un caffè, qualcosa di dolce, e nessun esame da preparare.",
      },
    ],
    curiosity: {
      title: "Una città che custodisce",
      text: "Le mura di Dubrovnik abbracciano il centro storico per quasi due chilometri. Mi piace pensarle come un bordo gentile: fuori il mondo, dentro noi due per un weekend.",
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
    cardLine: "Una sorpresa discreta, con montagne all'orizzonte.",
    subtitle: "Dove ogni angolo sembra dire: resta ancora un po'.",
    selectedLine: "Allora partiamo verso la sorpresa più quieta.",
    accent: "verde e cupole",
    coordinates: "42.6977° N, 23.3219° E",
    why: [
      "Ho scelto Sofia perché non prova a impressionare subito. Si lascia scoprire piano, con viali larghi, tram gialli, cupole chiare e montagne che restano lì, vicine, come una promessa sullo sfondo.",
      "Mi piace perché sembra una scelta nostra: meno ovvia, più curiosa. Un posto dove festeggiare la tua laurea senza dover dimostrare niente a nessuno, solo camminare, assaggiare, guardare, respirare.",
    ],
    moments: [
      {
        icon: Landmark,
        title: "Entrare in una piazza grande",
        text: "Restare piccoli davanti alle cupole e poi tornare subito a ridere per una cosa nostra.",
      },
      {
        icon: Mountain,
        title: "Guardare Vitosha",
        text: "Avere una montagna vicina alla città, come un invito a cambiare aria.",
      },
      {
        icon: Binoculars,
        title: "Cercare dettagli nascosti",
        text: "Cortili, insegne, scale, piccoli posti che non sembrano fatti per essere fotografati.",
      },
      {
        icon: Utensils,
        title: "Assaggiare qualcosa di nuovo",
        text: "Scegliere un piatto perché il nome ci incuriosisce, e vedere se diventa un ricordo.",
      },
    ],
    curiosity: {
      title: "La sorpresa silenziosa",
      text: "Sofia è una delle capitali europee più antiche. Sotto la città di oggi convivono tracce romane, ottomane e sovietiche: strati diversi, come certe persone belle da scoprire nel tempo.",
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
