
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Calendar, Users, Navigation } from 'lucide-react';

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Booking.com header */}
      <header className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#003580]">Booking.com</div>
          <div className="text-sm text-gray-600">Assistenza clienti: +39 02 91 32 38 88</div>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          {/* Confirmation header */}
          <div className="bg-[#003580] text-white px-6 py-6">
            <div className="flex items-center">
              <CheckCircle size={32} className="mr-3" />
              <div>
                <h1 className="text-2xl font-bold">Prenotazione confermata</h1>
                <p className="text-white/80">La tua prenotazione al Grand Hotel Le Sirenuse è confermata</p>
              </div>
            </div>
          </div>
          
          {/* Booking details */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Grand Hotel Le Sirenuse"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-xl font-bold mb-2">Grand Hotel Le Sirenuse</h2>
                <div className="flex items-center text-sm text-gray-600 mb-1">
                  <span className="bg-[#003580] text-white font-bold rounded px-1 mr-2">9.2</span>
                  <span>Eccellente - 236 recensioni</span>
                </div>
                <p className="flex items-center text-sm text-gray-600 mb-4">
                  <Navigation size={14} className="mr-1" />
                  Via Cristoforo Colombo, 30, 84017 Positano SA, Italia
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500">Check-in</div>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-[#003580] mr-2" />
                      <span className="font-medium">Venerdì, 14 giugno 2024</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Dalle 14:00</div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-sm text-gray-500">Check-out</div>
                    <div className="flex items-center">
                      <Calendar size={16} className="text-[#003580] mr-2" />
                      <span className="font-medium">Lunedì, 17 giugno 2024</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Fino alle 11:00</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-500">Dettagli camera</div>
                  <div className="font-medium">Camera Deluxe con Vista Mare</div>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <Users size={16} className="mr-2" />
                    <span>2 adulti</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment details */}
            <div className="border-t border-gray-200 mt-6 pt-6">
              <h3 className="text-lg font-bold mb-4">Riepilogo pagamento</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Camera Deluxe con Vista Mare (3 notti)</span>
                  <span>€1,275.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tassa di soggiorno</span>
                  <span>€15.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IVA</span>
                  <span>€129.00</span>
                </div>
              </div>
              
              <div className="flex justify-between font-bold text-lg pt-3 border-t border-gray-200">
                <span>Totale</span>
                <span>€1,419.00</span>
              </div>
              
              <div className="mt-3 text-sm text-gray-500">
                Pagamento completato con carta di credito **** **** **** 4832
              </div>
            </div>
          </div>
        </div>
        
        {/* TravelHunt Banner */}
        <div className="bg-gradient-to-r from-travelblue to-travelblue-dark rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6 md:flex items-center justify-between">
            <div className="md:w-3/5">
              <div className="flex items-center mb-3">
                <div className="bg-white p-2 rounded-lg mr-2">
                  <Navigation size={24} className="text-travelblue" />
                </div>
                <h3 className="text-xl font-bold text-white">Travel Hunt</h3>
              </div>
              <h4 className="text-white text-2xl font-bold mb-2">Trasforma il tuo viaggio in un'avventura!</h4>
              <p className="text-white/90 mb-4">
                Scopri la Costiera Amalfitana in modo unico. Completa missioni emozionanti, esplora luoghi segreti, ottieni sconti esclusivi e accumula punti per il tuo prossimo viaggio.
              </p>
              <Link to="/landing/costiera-amalfitana" className="inline-block bg-white text-travelblue px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Scopri le missioni
              </Link>
            </div>
            
            <div className="md:w-2/5 mt-6 md:mt-0 md:pl-6">
              <img 
                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Costiera Amalfitana"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Additional info */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
          <h3 className="text-lg font-bold mb-4">Informazioni importanti</h3>
          
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>I dettagli della prenotazione sono stati inviati all'indirizzo email fornito.</li>
            <li>Per modifiche o cancellazioni, contatta l'hotel direttamente o il nostro servizio clienti.</li>
            <li>Ricordati di presentare un documento d'identità valido al momento del check-in.</li>
            <li>Servizio navetta dall'aeroporto disponibile su richiesta (costo aggiuntivo).</li>
          </ul>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">Grazie per aver scelto Booking.com</p>
            <p className="text-sm text-gray-500">Numero di prenotazione: BK-87529364</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
