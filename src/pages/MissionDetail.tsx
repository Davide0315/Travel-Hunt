
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Award, DollarSign, ArrowLeft, CheckCircle, Circle, ChevronRight, CalendarCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import MissionCard from '../components/MissionCard';
import { missions } from '../data/missions';
import { Button } from '@/components/ui/button';

const MissionDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the mission data
  const mission = missions.find(m => m.id === id);
  
  // For demo purposes, let's say some missions are completed
  const completedMissionIds = ['limoncello-tasting', 'teatro-greco'];
  const isCompleted = mission ? completedMissionIds.includes(mission.id) : false;
  
  // Related missions - same destination, different mission
  const relatedMissions = mission 
    ? missions.filter(m => m.destinationId === mission.destinationId && m.id !== mission.id).slice(0, 3)
    : [];
  
  if (!mission) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Missione non trovata</h1>
          <Link to="/my-missions" className="text-travelblue hover:underline">
            Torna alle missioni
          </Link>
        </div>
      </div>
    );
  }
  
  const getFatigueLevel = (level: number) => {
    const levels = [];
    for (let i = 0; i < 5; i++) {
      levels.push(
        <div 
          key={i} 
          className={`w-2 h-8 rounded-full mx-0.5 ${i < level ? 'bg-travelblue' : 'bg-gray-200'}`}
        ></div>
      );
    }
    return levels;
  };
  
  // Find destination name
  const destinationName = 
    mission.destinationId === 'costiera-amalfitana' ? 'Costiera Amalfitana' :
    mission.destinationId === 'taormina' ? 'Taormina' :
    mission.destinationId === 'capri' ? 'Capri' : mission.destinationId;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero image */}
        <div className="relative h-[50vh] overflow-hidden">
          <img 
            src={mission.imageUrl} 
            alt={mission.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
            <div className="container mx-auto h-full flex flex-col justify-end px-4 pb-8">
              <Link to="/my-missions" className="flex items-center text-white mb-4 w-max">
                <ArrowLeft size={16} className="mr-1" />
                <span>Torna alle missioni</span>
              </Link>
              
              <div className="flex items-center mb-2">
                <MapPin size={16} className="text-white mr-1" />
                <Link 
                  to={`/landing/${mission.destinationId}`}
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {destinationName}
                </Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white">{mission.title}</h1>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                {isCompleted && (
                  <div className="mb-6 bg-green-50 border border-green-100 rounded-lg p-4 flex items-center">
                    <div className="bg-green-500 rounded-full p-1 mr-3">
                      <CheckCircle size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800">Missione Completata!</h3>
                      <p className="text-green-700">Hai completato questa missione e guadagnato {mission.points} punti.</p>
                    </div>
                  </div>
                )}
                
                {/* Mission details */}
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 text-lg">{mission.description}</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-500 mb-1">
                      <Clock size={16} className="mr-1" />
                      <span className="text-sm">Tempo</span>
                    </div>
                    <div className="font-medium">{mission.timeRequired}</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-500 mb-1">
                      <DollarSign size={16} className="mr-1" />
                      <span className="text-sm">Costo</span>
                    </div>
                    <div className="font-medium">{mission.averageCost}</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-500 mb-1">
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 16.9998V11.9998M16 11.9998L13 14.9998M16 11.9998L19 14.9998M12 6.49982C11.278 6.49982 10.6667 6.13135 10.2956 5.55232C9.9878 5.06975 9.47628 4.74979 8.89794 4.74979C8.24479 4.74979 7.67145 5.0789 7.34286 5.59202C6.96187 6.17869 6.35161 6.49982 5.66667 6.49982C4.74619 6.49982 3.94394 5.93836 3.61753 5.13989C3.61751 5.13984 3.61749 5.13978 3.61747 5.13973C3.4584 4.78203 3.22755 4.48162 3 4.24982M3 19.9998C3.44419 19.1185 4.2174 18.3799 5.182 17.9861C6.29943 17.5262 7.54734 17.74 8.452 18.4998M8 21.9998C8.50963 21.1655 9.26853 20.5219 10.1565 20.1708C11.0445 19.8196 12.0245 19.779 12.9426 20.0548C13.8607 20.3307 14.6611 20.9057 15.2145 21.6846C15.7679 22.4634 16.043 23.3922 16 24.3333" 
                          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm">Fatica</span>
                    </div>
                    <div className="flex items-center">
                      {getFatigueLevel(mission.fatigue)}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center text-gray-500 mb-1">
                      <Award size={16} className="mr-1" />
                      <span className="text-sm">Punti</span>
                    </div>
                    <div className="font-bold text-travelorange">{mission.points} punti</div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="font-bold text-xl mb-4">Cosa devi fare per completare la missione:</h2>
                  <ul className="space-y-3">
                    {mission.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        {isCompleted ? (
                          <CheckCircle size={20} className="text-green-500 mr-2 mt-0.5" />
                        ) : (
                          <Circle size={20} className="text-gray-300 mr-2 mt-0.5" />
                        )}
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8">
                  <h2 className="font-bold text-xl mb-4">Consigli:</h2>
                  <ul className="space-y-2">
                    {mission.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-travelblue/10 text-travelblue rounded-full p-0.5 mr-2 mt-0.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 16v-8M12 8l-2 2M12 8l2 2M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" 
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  {isCompleted ? (
                    <Button className="bg-green-500 hover:bg-green-600" size="lg">
                      <CheckCircle size={18} className="mr-2" />
                      Missione Completata
                    </Button>
                  ) : (
                    <Button className="bg-travelblue hover:bg-travelblue-dark" size="lg">
                      Inizia la Missione
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Related missions */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="font-bold text-xl mb-4">Altre missioni in {destinationName}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedMissions.map(relatedMission => (
                    <MissionCard 
                      key={relatedMission.id} 
                      mission={relatedMission} 
                      completed={completedMissionIds.includes(relatedMission.id)}
                      variant="compact"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="font-bold text-xl mb-4">Dove</h2>
                <Map 
                  className="h-64 mb-4" 
                  centerLat={mission.location.lat}
                  centerLng={mission.location.lng}
                  markers={[{
                    lat: mission.location.lat,
                    lng: mission.location.lng,
                    type: isCompleted ? 'completed' : 'current',
                    label: mission.location.name
                  }]}
                />
                
                <div className="mb-4">
                  <h3 className="font-bold mb-1">{mission.location.name}</h3>
                  <p className="text-gray-600">{mission.location.address}</p>
                </div>
                
                <Button variant="outline" className="w-full">
                  Apri in Maps
                </Button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="font-bold text-xl mb-4">Info supplementari</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm uppercase text-gray-500 mb-1">Categoria</h3>
                    <div className="bg-travelblue/10 text-travelblue inline-block px-3 py-1 rounded-full text-sm font-medium">
                      {mission.category === 'food' ? '🍽️ Gastronomia' :
                        mission.category === 'culture' ? '🏛️ Cultura' :
                        mission.category === 'adventure' ? '🏞️ Avventura' :
                        mission.category === 'shopping' ? '🛍️ Shopping' :
                        mission.category === 'panoramic' ? '📸 Panorami' : mission.category}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase text-gray-500 mb-1">Orario consigliato</h3>
                    <p>10:00 - 18:00</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm uppercase text-gray-500 mb-1">Accessibilità</h3>
                    <div className="flex items-center">
                      <CheckCircle size={16} className="text-green-500 mr-1" />
                      <span>Adatto a famiglie</span>
                    </div>
                    {mission.fatigue <= 2 && (
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-green-500 mr-1" />
                        <span>Accessibile a persone con mobilità ridotta</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {isCompleted && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-gray-700">
                        <CalendarCheck size={16} className="mr-1" />
                        <span>Completata il</span>
                      </div>
                      <span className="font-medium">15 maggio 2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-700">
                        <Award size={16} className="mr-1" />
                        <span>Punti guadagnati</span>
                      </div>
                      <span className="font-bold text-travelorange">{mission.points}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-gradient-to-r from-travelblue to-travelblue-dark rounded-lg shadow-md overflow-hidden">
                <div className="p-6 text-white">
                  <h3 className="font-bold text-xl mb-3">Non hai ancora prenotato il tuo hotel?</h3>
                  <p className="text-white/90 mb-4">
                    Prenota con Booking.com e inizia a scoprire le missioni di {destinationName}
                  </p>
                  <div className="flex items-center">
                    <Button className="bg-white text-travelblue hover:bg-gray-100 transition-colors">
                      Prenota ora
                      <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
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

export default MissionDetail;
