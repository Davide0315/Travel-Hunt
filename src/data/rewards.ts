
export interface Reward {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pointsCost: number;
  category: "discount" | "experience" | "special";
  validUntil?: string;
  partnerName?: string;
  available: boolean;
}

export const rewards: Reward[] = [
  {
    id: "booking-10-discount",
    title: "10% di Sconto sulla Prossima Prenotazione",
    description: "Ottieni uno sconto del 10% sulla tua prossima prenotazione tramite Booking.com",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    pointsCost: 500,
    category: "discount",
    validUntil: "2025-12-31",
    partnerName: "Booking.com",
    available: true
  },
  {
    id: "amalfi-boat-tour",
    title: "Tour in Barca Privata della Costiera Amalfitana",
    description: "Un'esperienza esclusiva di 2 ore su una barca privata per scoprire le cale nascoste della Costiera Amalfitana",
    imageUrl: "https://www.acquaspeed.com/wp-content/uploads/2021/06/Escursioni-in-barca21.jpg",
    pointsCost: 2000,
    category: "experience",
    partnerName: "Amalfi Boat Tours",
    available: true
  },
  {
    id: "taormina-cooking-class",
    title: "Lezione di Cucina Siciliana a Taormina",
    description: "Impara a cucinare piatti tradizionali siciliani con uno chef locale e gusta il tuo pranzo con vista sull'Etna",
    imageUrl: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    pointsCost: 1200,
    category: "experience",
    partnerName: "Taormina Culinary Arts",
    available: true
  },
  {
    id: "free-airport-transfer",
    title: "Trasferimento Gratuito dall'Aeroporto",
    description: "Transfer privato gratuito dall'aeroporto al tuo hotel per la prossima prenotazione",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    pointsCost: 800,
    category: "discount",
    validUntil: "2025-12-31",
    partnerName: "Booking.com",
    available: true
  },
  {
    id: "room-upgrade",
    title: "Upgrade della Camera",
    description: "Upgrade gratuito a una camera di categoria superiore per la tua prossima prenotazione",
    imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    pointsCost: 1000,
    category: "discount",
    validUntil: "2025-12-31",
    partnerName: "Booking.com",
    available: true
  },
  {
    id: "limoncello-workshop",
    title: "Workshop di Preparazione del Limoncello",
    description: "Partecipa a un workshop esclusivo dove imparerai a preparare il limoncello tradizionale",
    imageUrl: "https://www.cookingschoolsorrento.com/_image?f=jpg&w=1050&h=650&ar=1.6153846153846154&fit=cover&p=entropy&href=https%3A%2F%2Fcms.cookingschoolsorrento.com%2Fassets%2Fimages%2Fpublic%2Ftrips%2Fgallery%2Fbig%2Fcooking-school-sorrento-5_u7_t1695130062.jpg",
    pointsCost: 700,
    category: "experience",
    partnerName: "Limonoro",
    available: false
  }
];

export const getUserRewards = () => {
  // In a real app, this would fetch from an API
  return [
    {
      id: "booking-10-discount-earned",
      rewardId: "booking-10-discount",
      dateEarned: "2023-05-15",
      used: false
    }
  ];
};
