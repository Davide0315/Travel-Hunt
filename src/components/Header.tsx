
import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation, User, MapPin, Award, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  userPoints?: number;
}

const Header: React.FC<HeaderProps> = ({ userPoints = 750 }) => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-travelblue to-travelblue-light text-white p-2 rounded-lg">
            <Navigation size={24} />
          </div>
          <span className="text-xl font-bold text-travelblue">Travel Hunt</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/destinations" className="text-gray-700 hover:text-travelblue transition-colors">
            Destinazioni
          </Link>
          <Link to="/my-missions" className="text-gray-700 hover:text-travelblue transition-colors">
            Le Mie Missioni
          </Link>
          <Link to="/rewards" className="text-gray-700 hover:text-travelblue transition-colors">
            Premi
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center">
            <Search size={20} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Cerca destinazioni..." 
              className="bg-gray-100 rounded-full px-4 py-1 w-48 focus:outline-none focus:ring-2 focus:ring-travelblue/20"
            />
          </div>
          
          <Link to="/user-profile" className="flex items-center space-x-2 group">
            <div className="bg-travelblue/10 p-2 rounded-full group-hover:bg-travelblue/20 transition-colors">
              <User size={20} className="text-travelblue" />
            </div>
            <div className="hidden md:block">
              <div className="flex items-center">
                <span className="text-sm font-medium">Marco</span>
                <div className="ml-2 flex items-center text-xs bg-travelorange/10 text-travelorange rounded-full px-2 py-0.5">
                  <Award size={12} className="mr-1" />
                  <span>{userPoints} punti</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div className="md:hidden bg-gray-50 py-2 border-t">
        <div className="container mx-auto flex justify-around">
          <Link to="/" className="flex flex-col items-center text-gray-500 hover:text-travelblue">
            <Navigation size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/destinations" className="flex flex-col items-center text-gray-500 hover:text-travelblue">
            <MapPin size={20} />
            <span className="text-xs mt-1">Destinazioni</span>
          </Link>
          <Link to="/my-missions" className="flex flex-col items-center text-gray-500 hover:text-travelblue">
            <Search size={20} />
            <span className="text-xs mt-1">Missioni</span>
          </Link>
          <Link to="/rewards" className="flex flex-col items-center text-gray-500 hover:text-travelblue">
            <Award size={20} />
            <span className="text-xs mt-1">Premi</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
