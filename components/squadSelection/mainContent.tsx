import React, { useState } from "react";
import PlayerCard from "./playedCard";

const MainContent = ({ onCardClick, selectedPlayers }: any) => {
  return (
    <main className="flex-1 p-4 relative ">
      {/* Pitch Background */}
      <div className="flex flex-col items-left  mt-20 mb-10">
        <h1 className="text-3xl font-bold mb-4 text-[#37003C]">
          Squad Selection
        </h1>
        <h3 className="text-gray-700">
          Select a maximum of 3 players from a single team or &apos;Auto Pick&apos; if
          you&apos;re short of time.
        </h3>
      </div>
      <div className="bg-gradient-to-bl from-indigo-700 to-cyan-200">
        <br />
        <div className="w-11/12 justify-center ml-8  rounded-xl  bg-white bg-opacity-50 h-52 ">
          <div className="rounded-xl opacity-100  bg-[#37003C] h-8 mt-2 pt-1">
            <div className="text-teal-400 text-center font-semibold">
              Gameweek 1{" "}
            </div>
          </div>
          <div className="text-center text-sm mt-3">
            Gameweek 1 deadline :
            <span className="font-bold text-lg text-[#37003C]">
              {" "}
              Fri 16 Aug 18:30
            </span>
          </div>
          <div className="flex flex-row gap-20 mt-4 justify-center">
            <div className="flex flex-col items-center">
              Players Selected
              <div className="bg-red-500 rounded-md m-4 text-center text-white p-3">
                0 / 15
              </div>
            </div>
            <div className="flex flex-col items-center ml-32">
              Budget
              <div className="bg-green-500 rounded-md m-4 text-center text-white p-3">
                100.0{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[1170px] bg-[url('/images/pitch.png')] bg-cover bg-center rounded-lg">
          {/* Clickable Cards */}
          {[
            "GK",
            "GK",
            "DEF",
            "DEF",
            "DEF",
            "DEF",
            "DEF",
            "MID",
            "MID",
            "MID",
            "MID",
            "MID",
            "FWD",
            "FWD",
            "FWD",
          ].map((position, index) => (
            <PlayerCard
              key={index}
              player={selectedPlayers[index]}
              onClick={() => onCardClick(index, position)}
              position={position}
              style={`absolute ${getCardPosition(index)}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

// Utility function to determine card position on the pitch
const getCardPosition = (index: any) => {
  const positions = [
    "top-[7%] left-[35%]", // GK
    "top-[7%] left-[55%]", // GK
    "top-[22%] left-[7%]", // DEF
    "top-[22%] left-[27%]", // DEF
    "top-[22%] left-[47%]", // DEF
    "top-[22%] left-[67%]", // DEF
    "top-[22%] left-[87%]", // DEF
    "top-[40%] left-[7%]", // MID
    "top-[40%] left-[27%]", // MID
    "top-[40%] left-[47%]", // MID
    "top-[40%] left-[67%]", // MID
    "top-[40%] left-[87%]", // MID
    "top-[60%] left-[17%]", // FWD
    "top-[60%] left-[42%]", // FWD
    "top-[60%] left-[67%]", // FWD
  ];

  return positions[index] || "";
};

export default MainContent;
