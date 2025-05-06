
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight, ArrowRight, Search, Navigation, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DestinationCard from '../components/DestinationCard';
import MissionCard from '../components/MissionCard';
import { destinations } from '../data/destinations';
import { missions } from '../data/missions';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Get featured destinations
  const featuredDestinations = destinations.filter(dest => dest.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative h-[80vh]">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video 
            className="absolute w-full h-full object-cover"
            autoPlay 
            muted 
            loop
            poster="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          >
            <source src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36993877a96355b149928e94&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="container mx-auto px-4 h-full flex items-center relative z-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Trasforma il tuo viaggio in un'avventura da scoprire
              </h1>
              <p className="text-white/90 text-xl mb-8">
                Completa missioni uniche, scopri tesori nascosti nelle destinazioni più belle d'Italia e guadagna punti per il tuo prossimo viaggio.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/destinations" className="btn-primary">
                  Scopri le destinazioni
                </Link>
                <Link to="/booking-confirmation" className="btn-secondary flex items-center">
                  <span>Hai prenotato un hotel?</span>
                  <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured destinations */}
        <div className="bg-gradient-to-b from-white to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Destinazioni in evidenza</h2>
                <p className="text-gray-600">Scopri le nostre destinazioni con le missioni più entusiasmanti</p>
              </div>
              <Link to="/destinations" className="hidden md:flex items-center text-travelblue hover:underline">
                <span className="mr-2">Vedi tutte le destinazioni</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDestinations.map(destination => (
                <div key={destination.id} className={
                  destination.id === 'costiera-amalfitana' ? 'md:col-span-2' : ''
                }>
                  <DestinationCard 
                    destination={destination} 
                    variant={destination.id === 'costiera-amalfitana' ? 'featured' : 'default'}
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/destinations" className="btn-primary inline-block">
                Vedi tutte le destinazioni
              </Link>
            </div>
          </div>
        </div>
        
        {/* How it works */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Come funziona Travel Hunt</h2>
              <p className="text-gray-600 text-lg">
                Un modo semplice e divertente per scoprire nuovi luoghi, supportare le attività locali e guadagnare premi esclusivi
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-gradient-to-b from-travelblue/5 to-travelblue/10 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-travelblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/4291/4291373.png" alt="Book" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Prenota il tuo viaggio</h3>
                <p className="text-gray-600">
                  Prenota un hotel su Booking.com e accedi a Travel Hunt per iniziare la tua avventura.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-b from-travelblue/5 to-travelblue/10 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-travelblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/7693/7693575.png" alt="Mission" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Completa le missioni</h3>
                <p className="text-gray-600">
                  Visita luoghi nascosti, assaggia cucina locale e scopri attività uniche attraverso le nostre missioni.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-gradient-to-b from-travelblue/5 to-travelblue/10 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-travelblue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/3176/3176248.png" alt="Reward" className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Guadagna punti e premi</h3>
                <p className="text-gray-600">
                  Accumula punti completando le missioni e riscatta premi esclusivi per il tuo prossimo viaggio.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/my-missions" className="btn-primary inline-block">
                Inizia l'avventura
              </Link>
            </div>
          </div>
        </div>
        
        {/* Popular missions */}
        <div className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Missioni popolari</h2>
                <p className="text-gray-600">Le esperienze più amate dai nostri viaggiatori</p>
              </div>
              <Link to="/my-missions" className="hidden md:flex items-center text-travelblue hover:underline">
                <span className="mr-2">Vedi tutte le missioni</span>
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {missions
                .sort(() => 0.5 - Math.random())
                .slice(0, 3)
                .map(mission => (
                  <MissionCard key={mission.id} mission={mission} />
                ))
              }
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/my-missions" className="btn-primary inline-block">
                Vedi tutte le missioni
              </Link>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Cosa dicono i viaggiatori</h2>
              <p className="text-gray-600 text-lg">
                Scopri le esperienze di chi ha già vissuto l'avventura con Travel Hunt
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Marco B.</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Grazie a Travel Hunt abbiamo scoperto angoli nascosti della Costiera Amalfitana che non avremmo mai trovato. Le missioni sono divertenti e ci hanno portato in posti bellissimi fuori dai circuiti turistici."
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Laura M.</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Non solo abbiamo vissuto un'esperienza unica, ma abbiamo anche guadagnato punti che ci hanno permesso di avere uno sconto sul nostro prossimo viaggio. Un modo perfetto per esplorare e risparmiare!"
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Alessio G.</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                      <svg className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "Le missioni di Travel Hunt hanno aggiunto un elemento di avventura al nostro viaggio a Taormina. Abbiamo trovato ristoranti fantastici che non erano nelle guide turistiche e vissuto esperienze autentiche."
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA section */}
        <div className="py-16 bg-travelblue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto per la tua prossima avventura?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Unisciti a Travel Hunt oggi e trasforma il tuo prossimo viaggio in un'esperienza indimenticabile ricca di scoperte, divertimento e premi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/destinations" className="bg-white text-travelblue px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Scopri le destinazioni
              </Link>
              <Link to="/booking-confirmation" className="bg-travelorange text-white px-8 py-3 rounded-full font-medium hover:bg-travelorange-dark transition-colors">
                Hai già una prenotazione?
              </Link>
            </div>
          </div>
        </div>
        
        {/* Partners section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">I nostri partner</h2>
              <p className="text-gray-600">Collaboriamo con le migliori aziende per offrirti esperienze uniche</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/1280px-Booking.com_logo.svg.png" 
                  alt="Booking.com"
                  className="max-h-full max-w-full"
                />
              </div>
              <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TripAdvisor_Logo_2022.svg/1280px-TripAdvisor_Logo_2022.svg.png" 
                  alt="TripAdvisor"
                  className="max-h-full max-w-full"
                />
              </div>
              <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Alitalia_logo_2017.svg/1280px-Alitalia_logo_2017.svg.png" 
                  alt="Alitalia"
                  className="max-h-full max-w-full"
                />
              </div>
              <div className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Trenitalia_logo.svg/1280px-Trenitalia_logo.svg.png" 
                  alt="Trenitalia"
                  className="max-h-full max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
