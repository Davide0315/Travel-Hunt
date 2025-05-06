
import React, { useState } from 'react';
import { Filter, Gift, Award, Check } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RewardCard from '../components/RewardCard';
import { rewards, getUserRewards } from '../data/rewards';
import { Button } from '@/components/ui/button';

const Rewards = () => {
  const [tab, setTab] = useState<'available' | 'myRewards'>('available');
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  // User points - in a real app, this would come from user state/context
  const userPoints = 750;
  
  // User's redeemed rewards
  const userRewards = getUserRewards();
  
  // Filter rewards based on category
  const filteredRewards = rewards.filter(reward => {
    if (!categoryFilter) return true;
    return reward.category === categoryFilter;
  });
  
  // Rewards the user has earned
  const earnedRewards = rewards.filter(reward => 
    userRewards.some(ur => ur.rewardId === reward.id)
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header userPoints={userPoints} />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Premi</h1>
              <p className="text-gray-600">Scopri e riscatta premi esclusivi con i tuoi punti</p>
            </div>
            
            <div className="bg-white shadow-sm rounded-lg p-3 flex items-center">
              <Award size={24} className="text-travelorange mr-2" />
              <div>
                <div className="text-xs text-gray-500">I tuoi punti</div>
                <div className="font-bold text-lg">{userPoints} <span className="text-gray-500 text-sm">punti</span></div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="flex">
              <button 
                className={`flex-1 py-4 px-6 text-center font-medium ${tab === 'available' ? 'text-travelblue border-b-2 border-travelblue' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setTab('available')}
              >
                Premi disponibili
              </button>
              <button 
                className={`flex-1 py-4 px-6 text-center font-medium ${tab === 'myRewards' ? 'text-travelblue border-b-2 border-travelblue' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setTab('myRewards')}
              >
                I miei premi <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">{earnedRewards.length}</span>
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar - Filters */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-4">
                <h2 className="font-bold text-lg mb-4">Filtri</h2>
                
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Categorie</h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="category" 
                        className="text-travelblue focus:ring-travelblue"
                        checked={categoryFilter === null}
                        onChange={() => setCategoryFilter(null)}
                      />
                      <span className="ml-2 text-gray-700">Tutte le categorie</span>
                    </label>
                    
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="category" 
                        className="text-travelblue focus:ring-travelblue"
                        checked={categoryFilter === 'discount'}
                        onChange={() => setCategoryFilter('discount')}
                      />
                      <span className="ml-2 text-gray-700">Sconti</span>
                    </label>
                    
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="category" 
                        className="text-travelblue focus:ring-travelblue"
                        checked={categoryFilter === 'experience'}
                        onChange={() => setCategoryFilter('experience')}
                      />
                      <span className="ml-2 text-gray-700">Esperienze</span>
                    </label>
                    
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="radio" 
                        name="category" 
                        className="text-travelblue focus:ring-travelblue"
                        checked={categoryFilter === 'special'}
                        onChange={() => setCategoryFilter('special')}
                      />
                      <span className="ml-2 text-gray-700">Special</span>
                    </label>
                  </div>
                </div>
                
                {tab === 'available' && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Punti</h3>
                    
                    <div className="space-y-2 mb-2">
                      <label className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded text-travelblue focus:ring-travelblue"
                        />
                        <span className="ml-2 text-gray-700">Solo quello che posso riscattare</span>
                      </label>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded">
                      <div className="text-sm text-gray-500 mb-2">Range di punti</div>
                      <div className="flex items-center">
                        <input
                          type="number"
                          placeholder="0"
                          className="w-20 border border-gray-300 rounded p-1 text-sm"
                        />
                        <span className="mx-2">-</span>
                        <input
                          type="number"
                          placeholder="2000"
                          className="w-20 border border-gray-300 rounded p-1 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <Button 
                  variant="outline" 
                  className="w-full border-gray-300 text-gray-700"
                  onClick={() => setCategoryFilter(null)}
                >
                  Azzera filtri
                </Button>
              </div>
              
              {/* Points info box */}
              <div className="bg-gradient-to-r from-travelblue to-travelblue-dark text-white rounded-lg shadow-md p-4 mt-4">
                <h3 className="font-bold mb-2">Come guadagnare punti?</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <div className="bg-white/10 p-1 rounded-full mr-2 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm">Completa missioni nelle destinazioni</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/10 p-1 rounded-full mr-2 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm">Prenota hotel tramite Booking.com</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white/10 p-1 rounded-full mr-2 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm">Invita amici a usare Travel Hunt</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-travelblue hover:bg-white/90">
                  Inizia ora
                </Button>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:w-3/4">
              {tab === 'available' ? (
                <>
                  {/* Featured reward */}
                  <div className="bg-gradient-to-r from-travelblue/10 to-travelblue/5 rounded-lg shadow-md p-6 mb-6">
                    <div className="md:flex items-center">
                      <div className="md:w-1/3 mb-4 md:mb-0">
                        <img 
                          src="https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                          alt="Featured reward"
                          className="rounded-lg w-full h-48 object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 md:pl-6">
                        <div className="bg-travelblue text-white text-xs font-bold rounded-full px-3 py-1 inline-block mb-2">
                          In evidenza
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Tour esclusivo in barca al tramonto</h2>
                        <p className="text-gray-600 mb-4">
                          Un'esperienza indimenticabile al largo della Costiera Amalfitana. Tour privato di 2 ore con aperitivo incluso.
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-travelorange font-bold">
                            <Award size={18} className="mr-1" />
                            <span>1800 punti</span>
                          </div>
                          <Button 
                            disabled={userPoints < 1800}
                            variant={userPoints >= 1800 ? "default" : "outline"}
                            className={userPoints >= 1800 ? "bg-travelblue hover:bg-travelblue-dark" : "border-gray-300 text-gray-400"}
                          >
                            {userPoints >= 1800 ? "Riscatta ora" : "Punti insufficienti"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Available rewards grid */}
                  <h2 className="text-xl font-bold mb-4">Premi disponibili</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRewards.map(reward => (
                      <RewardCard 
                        key={reward.id} 
                        reward={reward} 
                        userPoints={userPoints}
                      />
                    ))}
                    
                    {filteredRewards.length === 0 && (
                      <div className="col-span-3 text-center py-12">
                        <Filter size={48} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="text-xl font-medium text-gray-600 mb-2">Nessun premio trovato</h3>
                        <p className="text-gray-500">Prova a modificare i filtri di ricerca</p>
                        <Button 
                          variant="outline" 
                          className="mt-4 border-gray-300"
                          onClick={() => setCategoryFilter(null)}
                        >
                          Azzera filtri
                        </Button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {earnedRewards.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {earnedRewards.map(reward => (
                        <RewardCard 
                          key={reward.id} 
                          reward={reward} 
                          isUserReward={true}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-white rounded-lg shadow-md p-8 text-center">
                      <Gift size={64} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-xl font-medium text-gray-600 mb-2">Non hai ancora riscattato premi</h3>
                      <p className="text-gray-500 mb-6">
                        Completa missioni, accumula punti e riscatta fantastici premi per i tuoi prossimi viaggi.
                      </p>
                      <Button onClick={() => setTab('available')}>
                        Scopri i premi disponibili
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rewards;
