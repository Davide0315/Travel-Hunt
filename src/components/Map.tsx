
import React, { useEffect, useRef } from 'react';
import { Map as MapIcon, Navigation, Plus, Minus } from 'lucide-react';

interface MapProps {
  className?: string;
  centerLat?: number;
  centerLng?: number;
  markers?: {
    lat: number;
    lng: number;
    label?: string;
    type?: 'completed' | 'available' | 'current';
  }[];
  interactive?: boolean;
}

const Map: React.FC<MapProps> = ({ 
  className = '', 
  centerLat = 40.6333, 
  centerLng = 14.6,
  markers = [],
  interactive = true
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!mapRef.current || isInitialized.current) return;
    
    // Set map as initialized
    isInitialized.current = true;
    
    // Create map effect
    const mapElement = mapRef.current;
    
    // Add pan effect on mouse drag
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let translateX = 0;
    let translateY = 0;
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      mapElement.style.cursor = 'grabbing';
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      
      // Limit pan range
      translateX = Math.max(Math.min(translateX, 150), -150);
      translateY = Math.max(Math.min(translateY, 150), -150);
      
      mapElement.style.backgroundPosition = `calc(50% + ${translateX}px) calc(50% + ${translateY}px)`;
    };
    
    const handleMouseUp = () => {
      isDragging = false;
      mapElement.style.cursor = 'grab';
    };
    
    // Zoom effect
    let zoomLevel = 1;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      zoomLevel = Math.max(0.8, Math.min(1.5, zoomLevel + delta));
      
      mapElement.style.backgroundSize = `${zoomLevel * 110}%`;
    };
    
    if (interactive) {
      mapElement.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      mapElement.addEventListener('wheel', handleWheel, { passive: false });
      
      // Set initial style
      mapElement.style.cursor = 'grab';
      mapElement.style.backgroundSize = '110%';
    }
    
    // Cleanup
    return () => {
      if (interactive) {
        mapElement.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        mapElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [interactive]);

  // Get background image based on location
  const getMapBackground = () => {
    // Use specific map backgrounds based on location
    if (centerLat > 37.8 && centerLat < 37.9 && centerLng > 15.2 && centerLng < 15.3) {
      // Taormina
      return 'https://images.unsplash.com/photo-1523365280197-dbf36cd2252a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';
    } else if (centerLat > 40.5 && centerLat < 40.7 && centerLng > 14.5 && centerLng < 14.7) {
      // Costiera Amalfitana
      return 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';
    } else if (centerLat > 40.5 && centerLat < 40.6 && centerLng > 14.2 && centerLng < 14.3) {
      // Capri
      return 'https://images.unsplash.com/photo-1559564221-c695e1882850?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';
    }
    // Default map
    return 'https://images.unsplash.com/photo-1654077289059-b6b1ecfd8f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80';
  };

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {/* Map background */}
      <div 
        ref={mapRef}
        className="w-full h-full bg-cover bg-center transition-all duration-300"
        style={{ 
          backgroundImage: `url('${getMapBackground()}')`,
          backgroundSize: '110%'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        
        {/* Map markers */}
        {markers.map((marker, index) => {
          // Calculate position based on lat/lng difference from center
          const latDiff = (marker.lat - centerLat) * 10;
          const lngDiff = (marker.lng - centerLng) * 10;
          
          // Convert to percentage for positioning
          const top = 50 - latDiff;
          const left = 50 + lngDiff;
          
          // Limit positions to stay within the map
          const safeTop = Math.max(10, Math.min(90, top));
          const safeLeft = Math.max(10, Math.min(90, left));
          
          return (
            <div 
              key={index}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ top: `${safeTop}%`, left: `${safeLeft}%` }}
            >
              <div className={`
                h-5 w-5 rounded-full shadow-lg flex items-center justify-center
                ${marker.type === 'completed' ? 'bg-green-500' : 
                  marker.type === 'available' ? 'bg-travelblue' : 
                  'bg-travelorange'}
              `}>
                <span className={`absolute w-full h-full rounded-full ${marker.type === 'available' ? 'animate-ping opacity-75' : 'opacity-0'}`}></span>
                <Navigation size={12} className="text-white" />
              </div>
              {marker.label && (
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs shadow-md whitespace-nowrap max-w-[150px] truncate">
                  {marker.label}
                </div>
              )}
            </div>
          );
        })}
        
        {/* Map controls */}
        {interactive && (
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button className="bg-white rounded-md shadow w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Plus size={18} />
            </button>
            <button className="bg-white rounded-md shadow w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Minus size={18} />
            </button>
          </div>
        )}
      </div>
      
      {/* Map attribution */}
      <div className="absolute bottom-2 right-2 text-xs text-white/70 bg-black/30 px-2 py-1 rounded flex items-center">
        <MapIcon size={12} className="mr-1" />
        <span>TravelHunt Maps</span>
      </div>
    </div>
  );
};

export default Map;
