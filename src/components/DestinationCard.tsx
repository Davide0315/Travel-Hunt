
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { Destination } from '../data/destinations';

interface DestinationCardProps {
  destination: Destination;
  variant?: 'default' | 'compact' | 'featured';
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, variant = 'default' }) => {
  if (variant === 'compact') {
    return (
      <Link to={`/landing/${destination.id}`} className="block">
        <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full">
          <div className="h-32 overflow-hidden">
            <img 
              src={destination.imageUrl} 
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3">
            <h3 className="font-medium text-sm">{destination.name}</h3>
            <div className="flex items-center mt-1">
              <MapPin size={12} className="text-gray-400 mr-1" />
              <span className="text-xs text-gray-500">{destination.region}, {destination.country}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  if (variant === 'featured') {
    return (
      <Link to={`/landing/${destination.id}`} className="block">
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white h-full border border-travelblue/20">
          <div className="relative h-56 overflow-hidden">
            <img 
              src={destination.imageUrl} 
              alt={destination.name}
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white text-xl font-bold">{destination.name}</h3>
              <div className="flex items-center text-white/90 mt-1">
                <MapPin size={14} className="mr-1" />
                <span className="text-sm">{destination.region}, {destination.country}</span>
              </div>
            </div>
            <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center">
              <Star size={14} className="text-yellow-400 mr-1" fill="#FBBF24" />
              <span className="text-sm font-medium">{destination.rating}</span>
            </div>
            <div className="absolute top-3 left-3 bg-travelorange text-white text-xs font-bold rounded-full px-3 py-1">
              {destination.missionsCount} missioni
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600 text-sm line-clamp-2">{destination.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <div className="text-travelblue font-medium">Scopri le missioni</div>
              <div className="bg-travelblue/10 rounded-full p-1">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-travelblue">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  return (
    <Link to={`/landing/${destination.id}`} className="block">
      <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={destination.imageUrl} 
            alt={destination.name}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center">
            <Star size={14} className="text-yellow-400 mr-1" fill="#FBBF24" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
          {destination.featured && (
            <div className="absolute top-3 left-3 bg-travelblue text-white text-xs font-bold rounded-full px-3 py-1">
              In evidenza
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <MapPin size={16} className="text-gray-400 mr-1" />
              <span className="text-sm text-gray-500">{destination.region}, {destination.country}</span>
            </div>
            <div className="bg-travelorange/10 text-travelorange text-xs font-bold rounded-full px-2 py-1">
              {destination.missionsCount} missioni
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">{destination.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{destination.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-travelblue font-medium text-sm">Scopri di più</span>
            <div className="bg-travelblue/10 rounded-full p-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-travelblue">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
