
export interface Mission {
  id: string;
  destinationId: string;
  title: string;
  description: string;
  points: number;
  imageUrl: string;
  timeRequired: string;
  fatigue: number; // 1-5
  averageCost: string;
  category: "food" | "culture" | "adventure" | "shopping" | "panoramic";
  location: {
    name: string;
    address: string;
    lat: number;
    lng: number;
  };
  requirements: string[];
  tips: string[];
}

export const missions: Mission[] = [
  // Costiera Amalfitana Missions
  {
    id: "amalfi-panoramic-view",
    destinationId: "costiera-amalfitana",
    title: "Vista Panoramica da Villa Rufolo",
    description: "Visita Villa Rufolo a Ravello e scatta una foto dalla terrazza panoramica con vista sulla Costiera Amalfitana.",
    points: 150,
    imageUrl: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timeRequired: "1-2 ore",
    fatigue: 2,
    averageCost: "€8",
    category: "panoramic",
    location: {
      name: "Villa Rufolo",
      address: "Piazza Duomo, 84010 Ravello SA",
      lat: 40.64896,
      lng: 14.61341
    },
    requirements: [
      "Biglietto d'ingresso per Villa Rufolo",
      "Scatta una foto dalla terrazza panoramica"
    ],
    tips: [
      "Visita preferibilmente al mattino per evitare la folla",
      "Il giardino è particolarmente bello in primavera"
    ]
  },
  {
    id: "limoncello-tasting",
    destinationId: "costiera-amalfitana",
    title: "Degustazione di Limoncello Artigianale",
    description: "Visita un'autentica fabbrica di limoncello ad Amalfi e assaggia il famoso liquore al limone della Costiera.",
    points: 100,
    imageUrl: "https://custonaciweb.it/wp-content/uploads/2022/12/Limoncello-Foto-di-Gudrun-Muenz-Shutterstock-780x470.jpg",
    timeRequired: "1 ora",
    fatigue: 1,
    averageCost: "€5-15",
    category: "food",
    location: {
      name: "Limonoro",
      address: "Via Lorenzo d'Amalfi, 52, 84011 Amalfi SA",
      lat: 40.63438,
      lng: 14.60277
    },
    requirements: [
      "Effettuare una degustazione",
      "Scansiona il QR code all'interno del negozio"
    ],
    tips: [
      "Porta a casa una bottiglia come souvenir",
      "Chiedi informazioni sul processo di produzione"
    ]
  },
  {
    id: "positano-beach",
    destinationId: "costiera-amalfitana",
    title: "Relax sulla Spiaggia di Positano",
    description: "Trascorri almeno un'ora sulla Spiaggia Grande di Positano, una delle più iconiche della Costiera Amalfitana.",
    points: 120,
    imageUrl: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timeRequired: "2-3 ore",
    fatigue: 1,
    averageCost: "€15-30",
    category: "adventure",
    location: {
      name: "Spiaggia Grande",
      address: "Spiaggia Grande, 84017 Positano SA",
      lat: 40.62657,
      lng: 14.48757
    },
    requirements: [
      "Resta sulla spiaggia per almeno un'ora",
      "Condividi una foto della spiaggia con l'hashtag #TravelHuntPositano"
    ],
    tips: [
      "Porta contanti per l'ombrellone e la sdraio",
      "La spiaggia è più tranquilla al mattino presto"
    ]
  },
  {
    id: "boat-tour",
    destinationId: "costiera-amalfitana",
    title: "Tour in Barca Privata della Costiera Amalfitana",
    description: "Goditi un tour esclusivo in barca per ammirare la bellezza della Costiera Amalfitana dal mare e visitare grotte nascoste.",
    points: 200,
    imageUrl: "https://images.unsplash.com/photo-1587132137556-ec409630bba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timeRequired: "4 ore",
    fatigue: 2,
    averageCost: "€120-200",
    category: "adventure",
    location: {
      name: "Porto di Amalfi",
      address: "Porto di Amalfi, 84011 Amalfi SA",
      lat: 40.6347,
      lng: 14.6021
    },
    requirements: [
      "Prenotare il tour con un operatore locale",
      "Completare l'intero giro della costa"
    ],
    tips: [
      "Porta con te protezione solare e un cappello",
      "Il periodo migliore è da maggio a settembre"
    ]
  },
  {
    id: "limoncello-workshop",
    destinationId: "costiera-amalfitana",
    title: "Workshop di Preparazione del Limoncello",
    description: "Partecipa a un workshop per imparare a preparare il limoncello tradizionale con un maestro locale.",
    points: 150,
    imageUrl: "https://images.unsplash.com/photo-1567801701127-f9e574cd0db7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timeRequired: "2 ore",
    fatigue: 1,
    averageCost: "€40",
    category: "food",
    location: {
      name: "Agrumeto Amalfitano",
      address: "Via dei Limoni, 34, 84011 Amalfi SA",
      lat: 40.6341,
      lng: 14.6032
    },
    requirements: [
      "Prenotare il workshop in anticipo",
      "Completare la preparazione del tuo limoncello"
    ],
    tips: [
      "Porta una bottiglia per portare a casa il tuo limoncello",
      "Chiedi la ricetta scritta al maestro"
    ]
  },
  
  // Taormina Missions
  {
    id: "teatro-greco",
    destinationId: "taormina",
    title: "Teatro Antico di Taormina",
    description: "Visita il Teatro Greco-Romano di Taormina e ammira la vista spettacolare sul mare e sull'Etna.",
    points: 200,
    imageUrl: "https://images.unsplash.com/photo-1589333382094-2db8be4aca0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timeRequired: "1-2 ore",
    fatigue: 2,
    averageCost: "€10",
    category: "culture",
    location: {
      name: "Teatro Antico di Taormina",
      address: "Via Teatro Greco, 1, 98039 Taormina ME",
      lat: 37.85252,
      lng: 15.28934
    },
    requirements: [
      "Acquista il biglietto d'ingresso",
      "Scansiona il QR code all'interno del teatro"
    ],
    tips: [
      "Visita all'alba o al tramonto per le foto migliori",
      "Indossa scarpe comode, ci sono molte scale"
    ]
  },
  {
    id: "isola-bella",
    destinationId: "taormina",
    title: "Escursione a Isola Bella",
    description: "Visita la piccola isola di Isola Bella, conosciuta come 'La Perla del Mediterraneo', e fai il bagno nelle sue acque cristalline.",
    points: 150,
    imageUrl: "https://images.unsplash.com/photo-1629285483773-6b5cde943ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timeRequired: "3-4 ore",
    fatigue: 3,
    averageCost: "€5-10",
    category: "adventure",
    location: {
      name: "Isola Bella",
      address: "Isola Bella, 98039 Taormina ME",
      lat: 37.85071,
      lng: 15.30151
    },
    requirements: [
      "Raggiungere l'isola a piedi durante la bassa marea o in barca",
      "Fai il bagno nelle acque dell'isola"
    ],
    tips: [
      "Porta scarpe da scoglio per camminare comodamente",
      "Verifica l'orario della marea prima di andare"
    ]
  },
  {
    id: "granita-siciliana",
    destinationId: "taormina",
    title: "Gustare una Granita Siciliana",
    description: "Assapora l'autentica granita siciliana in uno dei bar storici di Corso Umberto.",
    points: 80,
    imageUrl: "https://images.unsplash.com/photo-1551260654-b8bef6a69d5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timeRequired: "30 minuti",
    fatigue: 1,
    averageCost: "€3-5",
    category: "food",
    location: {
      name: "Bam Bar",
      address: "Via di Giovanni, 45, 98039 Taormina ME",
      lat: 37.85118,
      lng: 15.28742
    },
    requirements: [
      "Ordinare una granita tradizionale",
      "Scansiona il QR code all'interno del locale"
    ],
    tips: [
      "Prova la combinazione classica di granita alle mandorle con brioche",
      "Il locale può essere affollato, preparati ad aspettare un po'"
    ]
  },
  {
    id: "tour-gastronomico",
    destinationId: "taormina",
    title: "Tour Gastronomico di Taormina",
    description: "Partecipa a un tour guidato per assaggiare le specialità locali nei migliori ristoranti e botteghe di Taormina.",
    points: 180,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timeRequired: "3 ore",
    fatigue: 2,
    averageCost: "€60",
    category: "food",
    location: {
      name: "Piazza IX Aprile",
      address: "Piazza IX Aprile, 98039 Taormina ME",
      lat: 37.85162,
      lng: 15.28652
    },
    requirements: [
      "Prenotare il tour in anticipo",
      "Completare almeno 5 tappe gastronomiche"
    ],
    tips: [
      "Vieni affamato, ci sono molti assaggi",
      "Chiedi raccomandazioni sulle specialità più autentiche"
    ]
  },
  {
    id: "spiaggia-nascosta",
    destinationId: "taormina",
    title: "Spiaggia Nascosta di Mazzarò",
    description: "Scopri questa spiaggia meno conosciuta ma incantevole vicino a Taormina, con acque turchesi e paesaggi mozzafiato.",
    points: 120,
    imageUrl: "https://images.unsplash.com/photo-1555862124-94e8cf6428f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    timeRequired: "Mezza giornata",
    fatigue: 2,
    averageCost: "€0-15",
    category: "adventure",
    location: {
      name: "Spiaggia di Mazzarò",
      address: "Via Mazzarò, 98039 Taormina ME",
      lat: 37.85289,
      lng: 15.30084
    },
    requirements: [
      "Trascorri almeno un'ora sulla spiaggia",
      "Fai una foto panoramica del luogo"
    ],
    tips: [
      "Raggiungi la spiaggia con la funivia da Taormina",
      "Porta con te il necessario, ci sono pochi servizi"
    ]
  }
];

export const getDestinationMissions = (destinationId: string): Mission[] => {
  return missions.filter(mission => mission.destinationId === destinationId);
};
