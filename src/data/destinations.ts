
export interface Destination {
  id: string;
  name: string;
  region: string;
  country: string;
  description: string;
  imageUrl: string;
  missionsCount: number;
  rating: number;
  featured?: boolean;
}

export const destinations: Destination[] = [
  {
    id: "costiera-amalfitana",
    name: "Costiera Amalfitana",
    region: "Campania",
    country: "Italia",
    description: "Scopri la magnifica Costiera Amalfitana, patrimonio UNESCO, con le sue scogliere a picco sul mare, i pittoreschi villaggi colorati e la deliziosa cucina locale.",
    imageUrl: "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    missionsCount: 12,
    rating: 4.9,
    featured: true
  },
  {
    id: "taormina",
    name: "Taormina",
    region: "Sicilia",
    country: "Italia",
    description: "Esplora Taormina, la perla della Sicilia con il suo anfiteatro greco, le viste mozzafiato sull'Etna e le splendide spiagge.",
    imageUrl: "https://images.unsplash.com/photo-1523365280197-dbf36cd2252a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    missionsCount: 9,
    rating: 4.7,
    featured: true
  },
  {
    id: "capri",
    name: "Capri",
    region: "Campania",
    country: "Italia",
    description: "Visita l'isola di Capri, famosa per i faraglioni, la Grotta Azzurra e le boutique di lusso.",
    imageUrl: "https://images.unsplash.com/photo-1559564221-c695e1882850?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    missionsCount: 8,
    rating: 4.8
  },
  {
    id: "venezia",
    name: "Venezia",
    region: "Veneto",
    country: "Italia",
    description: "Perditi nei canali di Venezia, la città più romantica d'Italia con la sua architettura unica e la ricca storia.",
    imageUrl: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    missionsCount: 15,
    rating: 4.6
  },
  {
    id: "cinque-terre",
    name: "Cinque Terre",
    region: "Liguria",
    country: "Italia",
    description: "Esplora i cinque colorati villaggi delle Cinque Terre, patrimonio UNESCO, arroccati sulle scogliere della Riviera Ligure.",
    imageUrl: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    missionsCount: 10,
    rating: 4.8
  },
  {
    id: "roma",
    name: "Roma",
    region: "Lazio",
    country: "Italia",
    description: "Scopri la Città Eterna con i suoi monumenti antichi, la cultura vibrante e la cucina deliziosa.",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    missionsCount: 20,
    rating: 4.7
  }
];
