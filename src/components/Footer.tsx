
import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-travelblue to-travelblue-light p-2 rounded-lg">
                <Navigation size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">Travel Hunt</span>
            </div>
            <p className="text-gray-400 text-sm">
              Trasformiamo i viaggi in esperienze di gioco, collegando turisti curiosi con piccole imprese locali.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-travelblue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-travelblue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-travelblue transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Esplora</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-white transition-colors">
                  Destinazioni
                </Link>
              </li>
              <li>
                <Link to="/my-missions" className="text-gray-400 hover:text-white transition-colors">
                  Missioni
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-gray-400 hover:text-white transition-colors">
                  Premi
                </Link>
              </li>
              <li>
                <Link to="/user-profile" className="text-gray-400 hover:text-white transition-colors">
                  Profilo
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Partner</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Booking.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Diventa Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Per Aziende
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contattaci</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>info@travelhunt.it</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">Iscriviti alla newsletter</p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="bg-gray-800 text-white px-3 py-2 rounded-l-md flex-1 focus:outline-none"
                />
                <button className="bg-travelblue px-3 py-2 rounded-r-md">
                  Iscriviti
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Travel Hunt. Tutti i diritti riservati.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Termini di Servizio
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
