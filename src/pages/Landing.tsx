
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Navigation, Award, Circle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MissionCard from '../components/MissionCard';
import Map from '../components/Map';
import { destinations } from '../data/destinations';
import { getDestinationMissions } from '../data/missions';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the destination data
  const destination = destinations.find(dest => dest.id === id);
  
  // Get missions for this destination
  const missions = getDestinationMissions(id || '');
  
  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Destinazione non trovata</h1>
          <Link to="/" className="text-travelblue hover:underline">
            Torna alla home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative h-[70vh]">
          <img 
            src={destination.imageUrl} 
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="container mx-auto h-full flex flex-col justify-end pb-12 px-4">
              <div className="flex items-center space-x-2 text-white/80 mb-2">
                <MapPin size={16} />
                <span>{destination.region}, {destination.country}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Scopri {destination.name}
              </h1>
              <p className="text-white/90 max-w-2xl text-lg mb-6">
                {destination.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-travelblue hover:bg-travelblue-dark">
                  Inizia l'avventura
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Scopri di più
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="container mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Missioni disponibili</h2>
                <p className="text-gray-600">Completa le missioni per guadagnare punti</p>
              </div>
              <div className="flex items-center space-x-2 bg-travelorange/10 text-travelorange px-4 py-2 rounded-full">
                <Award size={18} />
                <span className="font-medium">750 punti</span>
              </div>
            </div>
            
            {/* Map */}
            <div className="mb-8">
              <Map 
                className="h-64 rounded-lg shadow-md" 
                centerLat={missions[0]?.location.lat || 40.6333}
                centerLng={missions[0]?.location.lng || 14.6}
                markers={missions.map(mission => ({
                  lat: mission.location.lat,
                  lng: mission.location.lng,
                  type: 'available'
                }))}
              />
            </div>
            
            {/* Mission categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Button variant="outline" className="rounded-full border-travelblue text-travelblue">
                Tutte
              </Button>
              <Button variant="outline" className="rounded-full">
                🍽️ Gastronomia
              </Button>
              <Button variant="outline" className="rounded-full">
                🏛️ Cultura
              </Button>
              <Button variant="outline" className="rounded-full">
                🏞️ Avventura
              </Button>
              <Button variant="outline" className="rounded-full">
                📸 Panorami
              </Button>
              <Button variant="outline" className="rounded-full">
                🛍️ Shopping
              </Button>
            </div>
            
            {/* Missions grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missions.slice(0, 1).map(mission => (
                <div key={mission.id}>
                  <MissionCard mission={mission} variant="featured" />
                </div>
              ))}
              
              {missions.map((mission, index) => (
                index > 0 && <MissionCard key={mission.id} mission={mission} />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/my-missions" className="btn-primary inline-block">
                Visualizza tutte le missioni
              </Link>
            </div>
          </div>
          
          {/* Local tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Consigli da Local Experts</h2>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Local expert"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="md:w-1/2 p-6">
                  <div className="flex items-start mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                        alt="Local guide"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">Maria Rossi</h3>
                      <p className="text-gray-600 text-sm">Guida locale della Costiera Amalfitana</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    "Non limitarti ai luoghi turistici più famosi. La vera bellezza della Costiera Amalfitana si nasconde nei piccoli villaggi come Atrani e nelle passeggiate sui sentieri collinari come il Sentiero degli Dei. Per un'autentica esperienza culinaria, cerca i piccoli ristoranti di famiglia lontano dalle zone più frequentate."
                  </p>
                  
                  <h4 className="font-bold mb-2">I miei consigli:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Circle size={16} className="text-travelblue mr-2 mt-1 fill-current" />
                      <span>Visita i giardini di Villa Cimbrone a Ravello al tramonto</span>
                    </li>
                    <li className="flex items-start">
                      <Circle size={16} className="text-travelblue mr-2 mt-1 fill-current" />
                      <span>Fai un giro in barca fino alla Grotta dello Smeraldo</span>
                    </li>
                    <li className="flex items-start">
                      <Circle size={16} className="text-travelblue mr-2 mt-1 fill-current" />
                      <span>Assaggia la "delizia al limone" in una pasticceria locale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Landing;
