'use client'
import AppBar from "@/components/appBar/bar";
import Login from "@/components/auth/login/login";
import BannerTop from "@/components/banner/bannerTop";
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

  const handleTabClick = (id: number) => {
    if (!tabs[id].disabled) {
      setActiveTab(id);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return <div ><Login/></div>;
      case 1:
        return <div>Discover amazing prizes here!</div>;
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

  return (
    <div>
      <main className="flex">
        <div className="w-full relative">
          {/* Background image container */}
          <div
            className="w-full h-[300px] bg-current bg-center"
            style={{
              backgroundImage: `url('/images/image.png')`,
            }}
          >
            <div className="absolute inset-y-60 pt-2 z-10 ">
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
