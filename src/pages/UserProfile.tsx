
import React, { useState } from 'react';
import { Award, Clock, Calendar, Star, Edit, MapPin, Navigation } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import MissionCard from '../components/MissionCard';
import { missions } from '../data/missions';
import { Button } from '@/components/ui/button';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'missions' | 'rewards' | 'settings'>('overview');
  
  // Mock user data
  const userData = {
    name: 'Marco Rossi',
    email: 'marco.rossi@example.com',
    points: 750,
    joinedDate: '15 marzo 2023',
    completedMissions: 5,
    totalDestinations: 2,
    level: 'Esploratore',
    nextLevel: 'Avventuriero',
    pointsToNextLevel: 250,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  };
  
  // Mock completed missions
  const completedMissionIds = ['limoncello-tasting', 'teatro-greco'];
  const completedMissions = missions.filter(mission => completedMissionIds.includes(mission.id));
  
  // Mock visited destinations
  const visitedDestinations = [
    {
      id: 'costiera-amalfitana',
      name: 'Costiera Amalfitana',
      lat: 40.6333, 
      lng: 14.6,
      completedMissions: 1,
      totalMissions: 3
    },
    {
      id: 'taormina',
      name: 'Taormina',
      lat: 37.8516, 
      lng: 15.2853,
      completedMissions: 1,
      totalMissions: 3
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header userPoints={userData.points} />
      
      <main className="flex-grow bg-gray-50">
        {/* User header */}
        <div className="bg-travelblue text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="mb-4 md:mb-0 md:mr-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                    <img 
                      src={userData.profileImage} 
                      alt={userData.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow">
                    <Edit size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                <h1 className="text-2xl font-bold">{userData.name}</h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start mb-2 gap-3">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {userData.level}
                  </span>
                  <span className="flex items-center text-sm">
                    <Calendar size={14} className="mr-1" />
                    Iscritto dal {userData.joinedDate}
                  </span>
                </div>
                
                <div className="mt-4 bg-white/10 rounded-lg p-3 max-w-md mx-auto md:mx-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Award size={14} className="mr-1" />
                      <span>{userData.level}</span>
                    </div>
                    <span>{userData.points} / {userData.points + userData.pointsToNextLevel} punti</span>
                  </div>
                  <div className="bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-travelorange h-2 rounded-full"
                      style={{ width: `${(userData.points / (userData.points + userData.pointsToNextLevel)) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs mt-1 text-white/80">
                    {userData.pointsToNextLevel} punti per diventare {userData.nextLevel}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 space-x-2">
                <Button className="bg-white text-travelblue hover:bg-gray-100">
                  Modifica Profilo
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto">
              <button 
                className={`py-4 px-6 font-medium border-b-2 transition-colors ${activeTab === 'overview' ? 'border-travelblue text-travelblue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('overview')}
              >
                Panoramica
              </button>
              <button 
                className={`py-4 px-6 font-medium border-b-2 transition-colors ${activeTab === 'missions' ? 'border-travelblue text-travelblue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('missions')}
              >
                Missioni
              </button>
              <button 
                className={`py-4 px-6 font-medium border-b-2 transition-colors ${activeTab === 'rewards' ? 'border-travelblue text-travelblue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('rewards')}
              >
                Premi
              </button>
              <button 
                className={`py-4 px-6 font-medium border-b-2 transition-colors ${activeTab === 'settings' ? 'border-travelblue text-travelblue' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('settings')}
              >
                Impostazioni
              </button>
            </div>
          </div>
        </div>
        
        {/* Tab content */}
        <div className="container mx-auto px-4 py-8">
          {activeTab === 'overview' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-500 font-medium">Punti totali</h3>
                    <Award size={18} className="text-travelorange" />
                  </div>
                  <div className="text-3xl font-bold">{userData.points}</div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-500 font-medium">Missioni completate</h3>
                    <CheckCircleIcon className="text-green-500" />
                  </div>
                  <div className="text-3xl font-bold">{userData.completedMissions}</div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-500 font-medium">Destinazioni visitate</h3>
                    <MapPin size={18} className="text-travelblue" />
                  </div>
                  <div className="text-3xl font-bold">{userData.totalDestinations}</div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-gray-500 font-medium">Livello</h3>
                    <Star size={18} className="text-yellow-500" />
                  </div>
                  <div className="text-xl font-bold">{userData.level}</div>
                  <div className="text-sm text-gray-500">
                    {userData.pointsToNextLevel} punti per avanzare
                  </div>
                </div>
              </div>
              
              {/* Travel map */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Le tue destinazioni</h2>
                <Map 
                  className="h-[400px]" 
                  markers={visitedDestinations.map(dest => ({
                    lat: dest.lat,
                    lng: dest.lng,
                    type: 'completed',
                    label: dest.name
                  }))}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {visitedDestinations.map(destination => (
                    <div key={destination.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{destination.name}</h3>
                        <span className="text-xs bg-travelblue/10 text-travelblue px-2 py-1 rounded-full">
                          {destination.completedMissions}/{destination.totalMissions} missioni
                        </span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-travelblue h-2 rounded-full"
                          style={{ width: `${(destination.completedMissions / destination.totalMissions) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recent activity */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Attività recenti</h2>
                  <button className="text-travelblue hover:underline">
                    Vedi tutto
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircleIcon className="text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium">Missione completata: Teatro Antico di Taormina</div>
                      <p className="text-gray-500">Hai guadagnato 200 punti</p>
                      <div className="text-xs text-gray-400 mt-1">2 giorni fa</div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-travelblue/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Award size={20} className="text-travelblue" />
                    </div>
                    <div>
                      <div className="font-medium">Premio riscattato: 10% di Sconto sulla Prossima Prenotazione</div>
                      <p className="text-gray-500">Hai utilizzato 500 punti</p>
                      <div className="text-xs text-gray-400 mt-1">5 giorni fa</div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <CheckCircleIcon className="text-green-500" />
                    </div>
                    <div>
                      <div className="font-medium">Missione completata: Degustazione di Limoncello Artigianale</div>
                      <p className="text-gray-500">Hai guadagnato 100 punti</p>
                      <div className="text-xs text-gray-400 mt-1">7 giorni fa</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'missions' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Le tue missioni completate</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" className="border-gray-300">
                    Filtra
                  </Button>
                  <Button variant="outline" className="border-gray-300">
                    Ordina
                  </Button>
                </div>
              </div>
              
              {completedMissions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedMissions.map(mission => (
                    <MissionCard 
                      key={mission.id} 
                      mission={mission} 
                      completed={true}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                  <Award size={64} className="mx-auto text-gray-300 mb-4" />
                  <h3 className="text-xl font-medium text-gray-600 mb-2">Nessuna missione completata</h3>
                  <p className="text-gray-500 mb-6">
                    Inizia a esplorare le destinazioni e completa le missioni per accumulare punti.
                  </p>
                  <Button>
                    Scopri le missioni
                  </Button>
                </div>
              )}
              
              <div className="mt-12">
                <h2 className="text-xl font-bold mb-6">Missioni suggerite per te</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {missions
                    .filter(mission => !completedMissionIds.includes(mission.id))
                    .slice(0, 3)
                    .map(mission => (
                      <MissionCard key={mission.id} mission={mission} />
                    ))
                  }
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'rewards' && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">I tuoi premi riscattati</h2>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <Award size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-600 mb-2">Hai riscattato 1 premio</h3>
                <p className="text-gray-500 mb-6">
                  10% di Sconto sulla Prossima Prenotazione
                </p>
                <Button>
                  Scopri altri premi
                </Button>
              </div>
              
              <div className="mt-12">
                <h2 className="text-xl font-bold mb-6">Premi suggeriti per te</h2>
                
                <div className="bg-gradient-to-r from-travelblue/10 to-travelblue/5 rounded-lg p-8">
                  <div className="md:flex items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <img 
                        src="https://images.unsplash.com/photo-1566575391643-9fd9bb321a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                        alt="Featured reward"
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 md:pl-6">
                      <div className="bg-travelblue text-white text-xs font-bold rounded-full px-3 py-1 inline-block mb-2">
                        In evidenza
                      </div>
                      <h2 className="text-2xl font-bold mb-2">Visita guidata esclusiva al Colosseo</h2>
                      <p className="text-gray-600 mb-4">
                        Un'esperienza unica con accesso privilegiato e guida privata al monumento più famoso di Roma.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-travelorange font-bold">
                          <Award size={18} className="mr-1" />
                          <span>1500 punti</span>
                        </div>
                        <Button 
                          disabled={userData.points < 1500}
                          variant={userData.points >= 1500 ? "default" : "outline"}
                          className={userData.points >= 1500 ? "bg-travelblue hover:bg-travelblue-dark" : "border-gray-300 text-gray-400"}
                        >
                          {userData.points >= 1500 ? "Riscatta ora" : "Punti insufficienti"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'settings' && (
            <>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-6">Informazioni account</h2>
                
                <div className="space-y-6 max-w-xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      defaultValue={userData.name}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      defaultValue={userData.email}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input 
                      type="password" 
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                      defaultValue="********"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button className="bg-travelblue hover:bg-travelblue-dark">
                      Salva modifiche
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h2 className="text-xl font-bold mb-6">Preferenze</h2>
                
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Notifiche email</h3>
                      <p className="text-gray-500 text-sm">Ricevi aggiornamenti sulle nuove missioni e premi</p>
                    </div>
                    <div className="w-10 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
                      <div className="bg-travelblue w-4 h-4 rounded-full" style={{ transform: 'translateX(100%)' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Notifiche push</h3>
                      <p className="text-gray-500 text-sm">Ricevi notifiche quando sei vicino a una missione</p>
                    </div>
                    <div className="w-10 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
                      <div className="bg-travelblue w-4 h-4 rounded-full" style={{ transform: 'translateX(100%)' }}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Privacy</h3>
                      <p className="text-gray-500 text-sm">Mostra il tuo profilo pubblicamente</p>
                    </div>
                    <div className="w-10 h-6 bg-gray-200 rounded-full p-1 cursor-pointer">
                      <div className="bg-gray-400 w-4 h-4 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper icon component
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default UserProfile;
