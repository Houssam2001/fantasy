'use client'
import AppBar from "@/components/appBar/bar";
import Login from "@/components/auth/login/login";
import BannerTop from "@/components/banner/bannerTop";
import SquadSelection from "@/components/squadSelection/squad";
import Prizes from "@/components/tabmenu/menus/prizes";
import TabMenu from "@/components/tabmenu/tabMenu";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Home" },
    { id: 1, label: "Prizes" },
    { id: 2, label: "Scout" },
    { id: 3, label: "Podcast" },
    { id: 4, label: "Help" },
    { id: 5, label: "Statistics", disabled: false },
    { id: 6, label: "FPL Challenge", disabled: false },
  ];
  const tabsLogged = [
    { id: 0, label: "Home" },
    { id: 1, label: "Squad Selection" },
    { id: 2, label: "Help" },
    { id: 6, label: "Sign Out",},
  ];

  const handleTabClick = (id: number) => {
      setActiveTab(id);
    
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <div ><Login/></div>;
      case 1:
        return <div><SquadSelection/></div>;
      case 2:
        return <div>Scout the best players with our tools.</div>;
      case 3:
        return <div>Listen to our latest podcasts!</div>;
      case 4:
        return <div>Need help? Find your answers here.</div>;
      case 5:
        return <div>View detailed statistics on your performance.</div>;
      case 6:
        return <div>Join the FPL Challenge and compete!</div>;
      default:
        return null;
    }
  };
  const renderTabContentLogged = () => {
    switch (activeTab) {
      case 0:
        return <div ><Login/></div>;
      case 1:
        return <div><Prizes/></div>;
      case 2:
        return <div>Scout the best players with our tools.</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <main className="flex">
        <div className="w-full relative">
          {/* Background image container */}
          <div
            className="w-full  h-[180px] bg-current bg-center"
            style={{
              backgroundImage: `url('/images/image.png')`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-y-28 pt-4 z-10 ">
              <TabMenu activeTab={activeTab} handleTabClick={handleTabClick} />
            </div>
            {/* Optional overlay */}
           
          </div>
          {renderTabContent()}
          {/* Content */}
        </div>
      </main>
    </div>
  );
}
