
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, CheckCircle, Circle, List, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MissionCard from '../components/MissionCard';
import Map from '../components/Map';
import { missions } from '../data/missions';
import { Button } from '@/components/ui/button';

const MyMissions = () => {
  const { destinationId } = useParams<{ destinationId?: string }>();
  
  const [view, setView] = useState<'grid' | 'map'>('grid');
  const [filter, setFilter] = useState<string | null>(null);
  const [showCompleted, setShowCompleted] = useState(false);
  
  // For demo purposes, let's say some missions are completed
  const completedMissionIds = ['limoncello-tasting', 'teatro-greco'];
  
  // Filter missions based on destination and completion status
  const filteredMissions = missions.filter(mission => {
    // Filter by destination if specified
    const matchesDestination = destinationId 
      ? mission.destinationId === destinationId
      : true;
    
    // Filter by category if specified
    const matchesCategory = filter 
      ? mission.category === filter 
      : true;
    
    // Filter by completion status
    const matchesCompletion = showCompleted
      ? completedMissionIds.includes(mission.id)
      : true;
    
    return matchesDestination && matchesCategory && matchesCompletion;
  });
  
  // Group missions by destination for the sidebar
  const missionsByDestination = missions.reduce((acc, mission) => {
    if (!acc[mission.destinationId]) {
      acc[mission.destinationId] = [];
    }
    acc[mission.destinationId].push(mission);
    return acc;
  }, {} as Record<string, typeof missions>);
  
  // Get unique categories
  const categories = [...new Set(missions.map(m => m.category))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-2">Le Mie Missioni</h1>
          <p className="text-gray-600 mb-6">Esplora e completa missioni per guadagnare punti e scoprire posti nuovi</p>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar - Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h2 className="font-bold text-lg mb-4">Filtri</h2>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Stato</h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-travelblue focus:ring-travelblue"
                        checked={!showCompleted}
                        onChange={() => setShowCompleted(false)}
                      />
                      <span className="ml-2 text-gray-700">Tutte</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-travelblue focus:ring-travelblue"
                        checked={showCompleted}
                        onChange={() => setShowCompleted(true)}
                      />
                      <span className="ml-2 text-gray-700">Completate</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Categorie</h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="category" 
                        className="text-travelblue focus:ring-travelblue"
                        checked={filter === null}
                        onChange={() => setFilter(null)}
                      />
                      <span className="ml-2 text-gray-700">Tutte le categorie</span>
                    </label>
                    
                    {categories.map(category => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input 
                          type="radio" 
                          name="category" 
                          className="text-travelblue focus:ring-travelblue"
                          checked={filter === category}
                          onChange={() => setFilter(category)}
                        />
                        <span className="ml-2 text-gray-700">
                          {category === 'food' ? '🍽️ Gastronomia' :
                            category === 'culture' ? '🏛️ Cultura' :
                            category === 'adventure' ? '🏞️ Avventura' :
                            category === 'shopping' ? '🛍️ Shopping' :
                            category === 'panoramic' ? '📸 Panorami' : category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700"
                  onClick={() => { setFilter(null); setShowCompleted(false); }}
                >
                  Azzera filtri
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="font-bold text-lg mb-4">Destinazioni</h2>
                
                <div className="space-y-4">
                  {Object.entries(missionsByDestination).map(([destId, destMissions]) => {
                    // For demo purposes, let's add destination names
                    const destinationName = 
                      destId === 'costiera-amalfitana' ? 'Costiera Amalfitana' :
                      destId === 'taormina' ? 'Taormina' :
                      destId === 'capri' ? 'Capri' : destId;
                    
                    const completedCount = destMissions.filter(m => 
                      completedMissionIds.includes(m.id)
                    ).length;
                    
                    return (
                      <div key={destId} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{destinationName}</h3>
                          <span className="text-xs text-gray-500">{completedCount}/{destMissions.length}</span>
                        </div>
                        <div className="mt-2 bg-gray-100 rounded-full h-2">
                          <div 
                            className="bg-travelblue h-2 rounded-full"
                            style={{ width: `${(completedCount / destMissions.length) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    {filteredMissions.length} {filteredMissions.length === 1 ? 'Missione' : 'Missioni'} {showCompleted ? 'completate' : ''}
                  </h2>
                  
                  <div className="flex items-center space-x-2">
                    <button 
                      className={`p-2 rounded ${view === 'grid' ? 'bg-gray-100' : ''}`} 
                      onClick={() => setView('grid')}
                    >
                      <List size={20} className="text-gray-700" />
                    </button>
                    <button 
                      className={`p-2 rounded ${view === 'map' ? 'bg-gray-100' : ''}`} 
                      onClick={() => setView('map')}
                    >
                      <MapPin size={20} className="text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
              
              {view === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMissions.map(mission => (
                    <MissionCard 
                      key={mission.id} 
                      mission={mission} 
                      completed={completedMissionIds.includes(mission.id)}
                    />
                  ))}
                  
                  {filteredMissions.length === 0 && (
                    <div className="col-span-3 text-center py-12">
                      <Filter size={48} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-xl font-medium text-gray-600 mb-2">Nessuna missione trovata</h3>
                      <p className="text-gray-500">Prova a modificare i filtri di ricerca</p>
                      <Button 
                        variant="outline" 
                        className="mt-4 border-gray-300"
                        onClick={() => { setFilter(null); setShowCompleted(false); }}
                      >
                        Azzera filtri
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Map 
                      className="h-[600px]"
                      markers={filteredMissions.map(mission => ({
                        lat: mission.location.lat,
                        lng: mission.location.lng,
                        label: mission.title,
                        type: completedMissionIds.includes(mission.id) ? 'completed' : 'available'
                      }))}
                    />
                  </div>
                  
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredMissions.slice(0, 3).map(mission => (
                      <MissionCard 
                        key={mission.id} 
                        mission={mission} 
                        completed={completedMissionIds.includes(mission.id)}
                        variant="compact"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyMissions;
