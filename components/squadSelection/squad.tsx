import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import MainContent from './mainContent';

type  Player = {
    name: string;
    points: number;
    cost: number;
    position: string;
  };

type PlayersData = {
  GK: Player[];
  DEF: Player[];
  MID: Player[];
  FWD: Player[];
};

const initialPlayersData: PlayersData = {
    GK: [
      { name: 'Ramsdale', points: 110, cost: 5.0, position: 'GK' },
      { name: 'Alisson', points: 140, cost: 5.5, position: 'GK' }
    ],
    DEF: [
      { name: 'Cancelo', points: 130, cost: 6.0, position: 'DEF' },
      { name: 'Alexander-Arnold', points: 150, cost: 7.5, position: 'DEF' },
      { name: 'Livramento', points: 70, cost: 4.5, position: 'DEF' },
      { name: 'James', points: 120, cost: 6.0, position: 'DEF' }
    ],
    MID: [
      { name: 'De Bruyne', points: 180, cost: 10.0, position: 'MID' },
      { name: 'Salah', points: 200, cost: 12.5, position: 'MID' },
      { name: 'Fernandes', points: 160, cost: 11.0, position: 'MID' }
    ],
    FWD: [
      { name: 'Kane', points: 170, cost: 11.5, position: 'FWD' },
      { name: 'Toney', points: 130, cost: 7.0, position: 'FWD' },
      { name: 'Haaland', points: 210, cost: 12.0, position: 'FWD' }
    ],
  };
  

export default function SquadSelection() {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [selectedCardPosition, setSelectedCardPosition] = useState<keyof PlayersData | null>(null);
  const [selectedPlayers, setSelectedPlayers] = useState<Array<Player | null>>(Array(14).fill(null));
  const [availablePlayers, setAvailablePlayers] = useState<PlayersData>(initialPlayersData);

  const handleCardClick = (index: number, position: keyof PlayersData) => {
    setSelectedCardIndex(index);
    setSelectedCardPosition(position);
  };

  const handleSelectPlayer = (player: Player) => {
    if (selectedCardIndex !== null && selectedCardPosition !== null) {
      const updatedPlayers = [...selectedPlayers];
      updatedPlayers[selectedCardIndex] = player;

      // Update available players by removing the selected player
      const updatedAvailablePlayers = {
        ...availablePlayers,
        [selectedCardPosition]: availablePlayers[selectedCardPosition].filter(
          (p) => p.name !== player.name
        ),
      };

      setSelectedPlayers(updatedPlayers);
      setAvailablePlayers(updatedAvailablePlayers);
      setSelectedCardIndex(null);
      setSelectedCardPosition(null);
    }
  };
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      
      <div className="flex flex-1">
        
      <MainContent
          onCardClick={handleCardClick}
          selectedPlayers={selectedPlayers}
        />
        <Sidebar
          players={selectedCardPosition ? availablePlayers[selectedCardPosition] : []}
          onSelectPlayer={handleSelectPlayer}
        />
       
      </div>
    </div>
  );
}
