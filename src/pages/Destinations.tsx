
import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import { destinations } from '../data/destinations';
import { Button } from '@/components/ui/button';

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  
  const regions = [...new Set(destinations.map(dest => dest.region))];
  
  // Filter destinations based on search and region
  const filteredDestinations = destinations.filter(dest => {
    // Apply search filter if there is a search query
    const matchesSearch = searchQuery
      ? dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    
    // Apply region filter if there is an active region
    const matchesRegion = activeRegion 
      ? dest.region === activeRegion 
      : true;
    
    return matchesSearch && matchesRegion;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Italian landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-4xl font-bold mb-4">Destinazioni</h1>
              <p className="text-white/90 max-w-lg">
                Scopri le più belle mete italiane e le nostre missioni esclusive per un'esperienza di viaggio unica.
              </p>
            </div>
          </div>
        </div>
        
        {/* Search and filter section */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 -mt-16 relative z-10 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Cerca destinazioni..." 
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-travelblue/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div>
                <Button className="w-full md:w-auto bg-travelblue hover:bg-travelblue-dark h-12">
                  Cerca
                </Button>
              </div>
            </div>
            
            {/* Region filters */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Button 
                variant={activeRegion === null ? "default" : "outline"}
                className={activeRegion === null ? "bg-travelblue hover:bg-travelblue-dark" : ""}
                onClick={() => setActiveRegion(null)}
              >
                Tutte le regioni
              </Button>
              
              {regions.map(region => (
                <Button 
                  key={region}
                  variant={activeRegion === region ? "default" : "outline"}
                  className={activeRegion === region ? "bg-travelblue hover:bg-travelblue-dark" : ""}
                  onClick={() => setActiveRegion(region === activeRegion ? null : region)}
                >
                  {region}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Results */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {filteredDestinations.length} {filteredDestinations.length === 1 ? 'Destinazione' : 'Destinazioni'} {activeRegion ? `in ${activeRegion}` : ''}
            </h2>
            
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map(destination => (
                  <DestinationCard key={destination.id} destination={destination} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <MapPin size={48} className="mx-auto text-gray-400 mb-3" />
                <h3 className="text-xl font-medium text-gray-600 mb-1">Nessuna destinazione trovata</h3>
                <p className="text-gray-500">Prova a modificare i filtri di ricerca</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Popular experiences */}
        <div className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Esperienze popolari in Italia</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Food tour"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Tour gastronomici</h3>
                  <p className="text-gray-600 text-sm">Scopri i sapori autentici della cucina locale con le nostre missioni gastronomiche</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1589333382094-2db8be4aca0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Historical sites"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Siti storici</h3>
                  <p className="text-gray-600 text-sm">Visita i monumenti più importanti e scopri la ricca storia italiana</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1555862124-94e8cf6428f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Hidden beaches"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">Spiagge nascoste</h3>
                  <p className="text-gray-600 text-sm">Trova le calette più belle e meno conosciute lungo le coste italiane</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-travelblue/10 to-travelblue/5 rounded-xl p-8 md:p-12">
              <div className="md:flex items-center justify-between">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Resta aggiornato</h2>
                  <p className="text-gray-600">
                    Iscriviti alla nostra newsletter per ricevere consigli di viaggio esclusivi e le ultime notizie sulle nuove destinazioni e missioni.
                  </p>
                </div>
                
                <div className="md:w-1/2">
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Il tuo indirizzo email" 
                      className="flex-1 px-4 py-3 rounded-l-lg border-y border-l border-gray-200 focus:outline-none focus:ring-2 focus:ring-travelblue/20"
                    />
                    <button className="px-6 py-3 bg-travelblue text-white rounded-r-lg hover:bg-travelblue-dark transition-colors">
                      Iscriviti
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Iscrivendoti accetti la nostra Privacy Policy. Puoi cancellarti in qualsiasi momento.
                  </p>
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

export default Destinations;
