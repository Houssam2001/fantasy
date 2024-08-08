import { UserPlusIcon } from "@heroicons/react/16/solid";
import React from "react";

const PlayerCard = ({ player, onClick, style,position }:any) => {
  return (
    <div
      onClick={onClick}
      className={`w-24 h-32 hover:border-2 rounded-lg z-40 flex items-center justify-center cursor-pointer ${style} ${!player ? 'bg-[#029F4F]' : 'bg-gray-300'}`}
    >
      {player ? (
        <div>
          <p className="text-center text-xs font-semibold">{player.name}</p>
        </div>
      ) : (
        <div className="text-center text-white text-xs font-semibold"><UserPlusIcon color="white" fontSize={20}/>{position}</div>
      )}
    </div>
  );
};

export default PlayerCard;
