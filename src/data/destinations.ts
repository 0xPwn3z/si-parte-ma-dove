import {
  Bath,
  Castle,
  Droplets,
  Heart,
  Landmark,
  Map,
  Mountain,
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
    cardLine: "Più di cento sorgenti termali, il Danubio, tre città in una.",
    subtitle: "Nata nel 1873 dall'unione di Buda, Pest e Óbuda.",
    selectedLine: "Allora andiamo sulle rive del Danubio.",
    accent: "oro sul fiume",
    coordinates: "47.4979° N, 19.0402° E",
    why: [
      "Budapest è una città termale: sotto la capitale sgorgano più di cento sorgenti calde. Alcuni dei suoi bagni storici risalgono al periodo ottomano del Cinquecento. La città unificata nacque nel 1873 dall'unione di Buda, Pest e Óbuda. Il paesaggio urbano del Danubio, il quartiere del Castello e Andrássy út sono patrimonio UNESCO dal 1987.",
      "Tre punti fermi: Széchenyi, grande complesso termale inaugurato nel 1913; il Bastione dei Pescatori, terrazza neoromanica costruita tra il 1895 e il 1902; il Ponte delle Catene, primo ponte permanente sul Danubio a Budapest, completato nel 1849.",
    ],
    moments: [
      {
        icon: Bath,
        title: "Terme Széchenyi",
        text: "Grande complesso termale inaugurato nel 1913. Le unità principali comprendono 11 vasche termali interne, una piscina esterna da 50 metri, una piscina ricreativa e una vasca termale esterna a 38 °C. L'acqua contiene calcio, magnesio, bicarbonato, sodio, solfato e fluoro. Nella vasca termale esterna si gioca a scacchi.",
      },
      {
        icon: Castle,
        title: "Bastione dei Pescatori",
        text: "Terrazza panoramica neoromanica progettata da Frigyes Schulek e costruita tra il 1895 e il 1902. Le sette torri richiamano i sette capi delle tribù magiare; sotto, la statua equestre di Santo Stefano del 1906. È nel quartiere del Castello di Buda, parte del sito UNESCO.",
      },
      {
        icon: Map,
        title: "Isola Margherita",
        text: "Isola lunga circa 2,5 km nel Danubio. Porta il nome di Margherita d'Ungheria (1242–1270), figlia di Béla IV, che visse nel convento domenicano dell'isola. La torre dell'acqua Art Nouveau è del 1911; restano rovine medievali e una fontana musicale.",
      },
    ],
    curiosity: {
      title: "Buda, Pest e Óbuda",
      text: "Budapest è una sola città dal 1873. Prima erano tre: Buda sulla riva occidentale, Pest su quella orientale e Óbuda, dove si trovano i resti di Aquincum. Nel 1846 partì da Pest la prima ferrovia ungherese, diretta a Vác.",
    },
    images: {
      hero: img("1756413664903-159797c47477", 2000),
      heroAlt:
        "Il Parlamento di Budapest e il Ponte delle Catene nella luce rosa del tramonto.",
      card: img("1756413664903-159797c47477", 1400),
      cardAlt:
        "Il Ponte delle Catene e il Parlamento di Budapest visti dal Danubio al tramonto.",
      gallery: [
        {
          src: img("1656488675154-70800e4938ce", 1600),
          alt: "Le vasche esterne delle Terme Széchenyi a Budapest.",
          caption: "Terme Széchenyi: piscina termale esterna a 36–38 °C.",
        },
        {
          src: img("1549877452-9c387954fbc2", 1600),
          alt: "Il Bastione dei Pescatori e la chiesa di Mattia a Budapest.",
          caption:
            "Bastione dei Pescatori, terrazza neoromanica del 1895–1902.",
        },
        {
          src: img("1557694705-5cac01cf94a5", 1600),
          alt: "Tavoli apparecchiati all'aperto in una strada del centro di Budapest.",
          caption: "Tavoli all'aperto in una strada di Budapest.",
        },
      ],
    },
  },
  {
    slug: "dubrovnik",
    name: "Dubrovnik",
    cardLine: "Mura del XIII secolo, 1,94 km intorno alla città vecchia.",
    subtitle:
      "Centro storico UNESCO dal 1979, cuore dell'ex Repubblica di Ragusa.",
    selectedLine: "Allora andiamo tra le mura di Ragusa.",
    accent: "sale e luce",
    coordinates: "42.6507° N, 18.0944° E",
    why: [
      "Dubrovnik fu il centro della Repubblica di Ragusa, Stato marittimo indipendente per secoli tra Venezia e Impero ottomano. Il centro storico è patrimonio UNESCO dal 1979; le mura, nella forma attuale, si svilupparono dal XIII secolo fino al 1660 e misurano 1,94 km.",
      "Il centro storico si visita soprattutto a piedi: lo Stradun è la via principale lastricata. Fuori dalle mura, il Forte Lovrijenac sorge su uno scoglio alto 37 m; di fronte alla città, Lokrum si raggiunge in barca dal porto vecchio.",
    ],
    moments: [
      {
        icon: Castle,
        title: "Le mura di Dubrovnik",
        text: "Le mura, lunghe 1940 m e alte fino a 25 m, hanno la forma attuale dal XIII secolo; l'ultimo bastione fu completato nel 1660. Il circuito comprende torri, fortezze e bastioni. Il centro storico è UNESCO dal 1979. Alcune scene di Approdo del Re ne Il Trono di Spade sono state girate qui.",
      },
      {
        icon: Landmark,
        title: "Forte Lovrijenac",
        text: "Forte triangolare su uno scoglio alto 37 m, fuori dalla cinta. Le sue origini sono ricondotte agli anni 1018/1038; la prima menzione conservata è del 1301. I muri raggiungono 12 m verso il mare e circa 60 cm verso la città. Sul portone è inciso: «Non bene pro toto libertas venditur auro».",
      },
      {
        icon: Droplets,
        title: "Isola di Lokrum",
        text: "Isola di 72 ettari di fronte a Dubrovnik, raggiungibile in barca dal porto vecchio. Il monastero benedettino è documentato dal 1023; i monaci lasciarono l'isola nel 1798. Massimiliano d'Asburgo acquistò Lokrum nel 1859 e ne sviluppò la residenza estiva nei primi anni 1860. Fort Royal fu iniziato dai francesi nel 1806 e ampliato dagli austriaci nel 1835. L'isola ospita pavoni indiani introdotti a metà Ottocento e una replica del Trono di Spade.",
      },
    ],
    curiosity: {
      title: "La Repubblica di Ragusa",
      text: "La Repubblica di Ragusa vietò la tratta degli schiavi nel 1416. Mantenne la propria autonomia politica e commerciale fino all'occupazione napoleonica del 1806; la Repubblica fu poi formalmente abolita nel 1815.",
    },
    images: {
      hero: img("1714236315411-3a0dcaf091e0", 2000),
      heroAlt:
        "Un vicolo verticale di Dubrovnik con tetti rossi e montagna sullo sfondo.",
      card: img("1714236315411-3a0dcaf091e0", 1400),
      cardAlt: "Un vicolo stretto e antico nel centro di Dubrovnik.",
      gallery: [
        {
          src: img("1575540291670-8d3b26f7d327", 1600),
          alt: "La costa rocciosa e il mare azzurro di Dubrovnik.",
          caption: "Costa rocciosa a sud della città vecchia.",
        },
        {
          src: img("1645203231925-185059ccf815", 1600),
          alt: "Tramonto arancione sul mare vicino Dubrovnik.",
          caption: "Tramonto sul canale di Koločep.",
        },
        {
          src: img("1750624580601-38c1f151d0e5", 1600),
          alt: "Tetti rossi di Dubrovnik visti dall'alto.",
          caption: "Tetti rossi ricostruiti dopo il terremoto del 1667.",
        },
      ],
    },
  },
  {
    slug: "sofia",
    name: "Sofia",
    cardLine: "Capitale ai piedi della Vitosha, 2292 m.",
    subtitle: "Tra i resti di Serdica e i pendii della Vitosha.",
    selectedLine: "Allora partiamo per Sofia.",
    accent: "verde e cupole",
    coordinates: "42.6977° N, 23.3219° E",
    why: [
      "Sofia è la capitale della Bulgaria, ai piedi della Vitosha. Nel centro sono visibili i resti di Serdica, l'insediamento romano che ha lasciato strade, terme e resti di edifici. La città divenne capitale della Bulgaria nel 1879, dopo il periodo di dominio ottomano.",
      "La Cattedrale Aleksandar Nevski fu costruita tra il 1904 e il 1912 e consacrata nel 1924; è tra le più grandi chiese ortodosse dei Balcani. La Chiesa di Boyana, UNESCO dal 1979, conserva i celebri affreschi del 1259. Per Vitosha, il parco indica le linee bus 63 e 66 verso Zlatnite Mostove e l'hotel Moreni; gli impianti hanno informazioni stagionali.",
    ],
    moments: [
      {
        icon: Landmark,
        title: "Cattedrale Aleksandar Nevski",
        text: "Costruita tra il 1904 e il 1912 e consacrata nel 1924. L'edificio misura 72 × 55 m, occupa 3170 m² e ospita 12 campane per circa 25 tonnellate; la maggiore pesa 11.758 kg. È un memoriale per la guerra russo-turca del 1877–78.",
      },
      {
        icon: Heart,
        title: "Chiesa di Boyana",
        text: "Piccola chiesa medievale ai piedi della Vitosha, UNESCO dal 1979. Il complesso ha tre parti del X, XIII e XIX secolo; gli affreschi più celebri sono del 1259. Sono conservati quasi 240 volti, tra cui i ritratti di Kaloyan e Desislava. La visita è limitata a 10 minuti e a un massimo di 9 persone.",
      },
      {
        icon: Mountain,
        title: "Monte Vitosha",
        text: "Massiccio montuoso ai piedi di Sofia, con il Černi vrăh a 2292 m. È il primo parco naturale della Bulgaria e della penisola balcanica, istituito nel 1934. Le sue aree protette comprendono faggete, torbiere e fiumi di pietra come Zlatnite Mostove. Il parco indica i bus 63 e 66 per Zlatnite Mostove e l'hotel Moreni; impianti e orari vanno verificati prima di partire.",
      },
    ],
    curiosity: {
      title: "Serdica sotto Sofia",
      text: "Sotto il centro di Sofia sono visibili i resti di Serdica: strade lastricate, terme, edifici e il complesso vicino alla metropolitana. La Rotonda di San Giorgio, costruita nel IV secolo, è uno degli edifici tardoantichi meglio conservati della città.",
    },
    images: {
      hero: img("1761157995926-15243368b7f1", 2000),
      heroAlt:
        "Un tram giallo attraversa una strada di Sofia con edifici residenziali sullo sfondo.",
      card: img("1761157995926-15243368b7f1", 1400),
      cardAlt: "Un tram giallo attraversa Sofia al sole.",
      gallery: [
        {
          src: img("1627716803589-4406fa5fb256", 1600),
          alt: "Un viale pedonale affollato di Sofia con una cupola sullo sfondo.",
          caption: "Un viale pedonale nel centro di Sofia.",
        },
        {
          src: img("1753529179550-c6aff1b76e6e", 1600),
          alt: "La Cattedrale Aleksandar Nevski a Sofia sotto il cielo blu.",
          caption:
            "Cattedrale Aleksandar Nevski, completata nel 1912 e consacrata nel 1924.",
        },
        {
          src: img("1633604781134-a03e6ab7c117", 1600),
          alt: "Una persona osserva un pendio montano sotto i cavi di un impianto.",
          caption: "Pendii montani sopra Sofia.",
        },
      ],
    },
  },
];

export const getDestination = (slug: string) =>
  destinations.find((destination) => destination.slug === slug);
