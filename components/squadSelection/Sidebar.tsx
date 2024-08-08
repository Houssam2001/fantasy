import React, { useState } from 'react';

type Player = {
  name: string;
  points: number;
  cost: number;
  position: string;
};

const Sidebar = ({ players, onSelectPlayer }: { players: Player[]; onSelectPlayer: (player: Player) => void }) => {
  const [view, setView] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Total points');
  const [minCost, setMinCost] = useState<number>(4.0);
  const [maxCost, setMaxCost] = useState<number>(5.5);

  // Filter players by position
  const filteredPlayers = players.filter((player) => {
    return view === 'All' || player.position === view;
  });

  // Filter players by cost range
  const costFilteredPlayers = filteredPlayers.filter((player) => {
    return player.cost >= minCost && player.cost <= maxCost;
  });

  // Sort players based on selected criterion
  const sortedPlayers = costFilteredPlayers.sort((a, b) => {
    if (sortBy === 'Total points') {
      return b.points - a.points;
    } else if (sortBy === 'Cost') {
      return b.cost - a.cost;
    }
    return 0;
  });

  return (
    <aside className="w-1/4 z-40 mr-2 my-4 bg-white rounded-lg shadow-md">
      <div className="bg-gradient-to-b from-emerald-400 to-slate-50 text-left pl-3 pt-3 h-14 rounded-t-lg">
        <h2 className="font-bold text-[#37003C] text-lg w-full">Player Selection</h2>
      </div>
      
      {/* View Filter */}
      <div className="p-3">
        <label className="block text-sm font-semibold text-gray-700 mb-2">View</label>
        <select 
          className="w-full p-2 border rounded-lg"
          value={view}
          onChange={(e) => setView(e.target.value)}
        >
          <option value="All">All Players</option>
          <option value="GK">Goalkeepers</option>
          <option value="DEF">Defenders</option>
          <option value="MID">Midfielders</option>
          <option value="FWD">Forwards</option>
        </select>
      </div>

      {/* Sort By Filter */}
      <div className="p-3">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Sorted by</label>
        <select 
          className="w-full p-2 border rounded-lg"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Total points">Total points</option>
          <option value="Cost">Cost</option>
        </select>
      </div>

      {/* Cost Range Filter */}
      <div className="p-3">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Max cost</label>
        <div className="flex space-x-2">
          <input 
            type="number"
            className="w-full p-2 border rounded-lg"
            min={0}
            value={minCost}
            onChange={(e) => setMinCost(Number(e.target.value))}
          />
          <span className="text-sm text-gray-500">to</span>
          <input 
            type="number"
            className="w-full p-2 border rounded-lg"
            max={15}
            value={maxCost}
            onChange={(e) => setMaxCost(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Display Players */}
      <div className="p-3">
        <div className="grid grid-cols-1 gap-2">
          {sortedPlayers.map((player, index) => (
            <div
              key={index}
              className="p-2 border rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => onSelectPlayer(player)}
            >
              <h4>{player.name}</h4>
              <p className="text-xs text-gray-500">Points: {player.points} | Cost: {player.cost}</p>
            </div>
          ))}
        </div>
        {/* <div className="grid grid-cols-1 gap-2">
          {players.map((player:any, index:any) => (
            <div
              key={index}
              className="p-2 border rounded-lg cursor-pointer hover:bg-gray-100"
              onClick={() => onSelectPlayer(player)}
            >
              <h4>{player.name}</h4>
            </div>
          ))}
        </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;
