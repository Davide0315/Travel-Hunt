
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Award, DollarSign } from 'lucide-react';
import { Mission } from '../data/missions';
import { Button } from '@/components/ui/button';

interface MissionCardProps {
  mission: Mission;
  completed?: boolean;
  variant?: 'default' | 'compact' | 'featured';
}

const MissionCard: React.FC<MissionCardProps> = ({ 
  mission, 
  completed = false,
  variant = 'default'
}) => {
  const getFatigueLevel = (level: number) => {
    const levels = [];
    for (let i = 0; i < 5; i++) {
      levels.push(
        <div 
          key={i} 
          className={`w-1.5 h-6 rounded-full mx-0.5 ${i < level ? 'bg-travelblue' : 'bg-gray-200'}`}
        ></div>
      );
    }
    return levels;
  };
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'food':
        return <div className="bg-red-100 text-red-500 p-2 rounded-full">🍽️</div>;
      case 'culture':
        return <div className="bg-purple-100 text-purple-500 p-2 rounded-full">🏛️</div>;
      case 'adventure':
        return <div className="bg-green-100 text-green-500 p-2 rounded-full">🏞️</div>;
      case 'shopping':
        return <div className="bg-yellow-100 text-yellow-500 p-2 rounded-full">🛍️</div>;
      case 'panoramic':
        return <div className="bg-blue-100 text-blue-500 p-2 rounded-full">📸</div>;
      default:
        return <div className="bg-gray-100 text-gray-500 p-2 rounded-full">📌</div>;
    }
  };
  
  if (variant === 'compact') {
    return (
      <Link to={`/mission/${mission.id}`} className="block">
        <div className="mission-card h-full">
          <div className="relative h-32 overflow-hidden">
            <img 
              src={mission.imageUrl} 
              alt={mission.title}
              className="w-full h-full object-cover"
            />
            {completed && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="bg-white text-travelblue font-bold px-3 py-1 rounded-full text-sm">
                  Completata
                </span>
              </div>
            )}
          </div>
          <div className="p-3">
            <div className="flex items-start justify-between">
              <h3 className="font-medium text-sm line-clamp-2">{mission.title}</h3>
              <div className="flex items-center text-travelorange text-sm font-bold ml-2">
                <Award size={14} className="mr-0.5" /> {mission.points}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  if (variant === 'featured') {
    return (
      <Link to={`/mission/${mission.id}`} className="block">
        <div className="mission-card h-full w-full max-w-full bg-gradient-to-br from-travelblue/5 to-travelblue/20 border border-travelblue/20">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={mission.imageUrl} 
              alt={mission.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 bg-white shadow-md rounded-full p-2">
              {getCategoryIcon(mission.category)}
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <MapPin size={14} className="text-gray-400 mr-1" />
                <span className="text-sm text-gray-500">{mission.location.name}</span>
              </div>
              <div className="flex items-center text-travelorange font-bold">
                <Award size={16} className="mr-1" /> {mission.points}
              </div>
            </div>
            <h3 className="font-bold text-lg mb-2">{mission.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">{mission.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <Clock size={14} className="mr-1" /> {mission.timeRequired}
              </div>
              <Button variant="outline" size="sm" className="text-travelblue border-travelblue hover:bg-travelblue hover:text-white transition-colors">
                Dettagli
              </Button>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  return (
    <Link to={`/mission/${mission.id}`} className="block">
      <div className="mission-card h-full">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={mission.imageUrl} 
            alt={mission.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-white shadow-md rounded-full p-2">
            {getCategoryIcon(mission.category)}
          </div>
          {completed && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-3 left-3 bg-white text-travelblue font-bold px-3 py-1 rounded-full text-sm">
                Completata
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <MapPin size={14} className="text-gray-400 mr-1" />
              <span className="text-sm text-gray-500">{mission.location.name}</span>
            </div>
            <div className="flex items-center text-travelorange font-bold">
              <Award size={16} className="mr-1" /> {mission.points}
            </div>
          </div>
          <h3 className="font-bold text-lg mb-2">{mission.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">{mission.description}</p>
          <div className="flex flex-wrap gap-2 justify-between mt-3">
            <div className="flex items-center text-sm text-gray-500">
              <Clock size={14} className="mr-1" /> {mission.timeRequired}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <DollarSign size={14} className="mr-1" /> {mission.averageCost}
            </div>
            <div className="flex items-center">
              <span className="text-xs text-gray-500 mr-2">Difficoltà:</span>
              <div className="flex items-center">
                {getFatigueLevel(mission.fatigue)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MissionCard;
