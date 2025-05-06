
import React from 'react';
import { Award, Clock } from 'lucide-react';
import { Reward } from '../data/rewards';
import { Button } from '@/components/ui/button';

interface RewardCardProps {
  reward: Reward;
  userPoints?: number;
  onRedeemClick?: () => void;
  isUserReward?: boolean;
}

const RewardCard: React.FC<RewardCardProps> = ({ 
  reward, 
  userPoints = 0, 
  onRedeemClick,
  isUserReward = false
}) => {
  const canRedeem = userPoints >= reward.pointsCost && reward.available;
  
  const getDateText = () => {
    if (!reward.validUntil) return null;
    
    const validUntil = new Date(reward.validUntil);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    
    if (isUserReward) {
      return `Valido fino al ${validUntil.toLocaleDateString('it-IT', options)}`;
    }
    
    return `Disponibile fino al ${validUntil.toLocaleDateString('it-IT', options)}`;
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col ${!reward.available ? 'opacity-70' : ''}`}>
      <div className="relative h-40 overflow-hidden">
        <img 
          src={reward.imageUrl} 
          alt={reward.title}
          className="w-full h-full object-cover"
        />
        {isUserReward && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold rounded-full px-3 py-1">
            Riscattato
          </div>
        )}
        {!isUserReward && (
          <div className="absolute top-3 left-3 bg-travelblue text-white text-xs font-bold rounded-full px-3 py-1">
            {reward.category === 'discount' ? 'Sconto' : reward.category === 'experience' ? 'Esperienza' : 'Special'}
          </div>
        )}
        {reward.partnerName && (
          <div className="absolute bottom-3 right-3 bg-white/90 px-2 py-1 rounded text-xs font-medium">
            {reward.partnerName}
          </div>
        )}
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-2">{reward.title}</h3>
        <p className="text-gray-600 text-sm flex-1">{reward.description}</p>
        
        <div className="mt-4 pt-2 border-t border-gray-100">
          {getDateText() && (
            <div className="flex items-center text-gray-500 text-xs mb-3">
              <Clock size={14} className="mr-1" />
              <span>{getDateText()}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-travelorange font-bold">
              <Award size={16} className="mr-1" />
              <span>{reward.pointsCost} punti</span>
            </div>
            
            {isUserReward ? (
              <Button size="sm" variant="outline" className="border-green-500 text-green-500">
                Visualizza
              </Button>
            ) : (
              <Button 
                size="sm" 
                onClick={onRedeemClick}
                disabled={!canRedeem}
                variant={canRedeem ? "default" : "outline"}
                className={canRedeem ? "bg-travelblue hover:bg-travelblue-dark" : "border-gray-300 text-gray-400"}
              >
                {canRedeem ? "Riscatta" : "Punti insufficienti"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
