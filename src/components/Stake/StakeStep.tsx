import React, { useState } from "react";
import Stake1 from "./stakeStepforms/Stake1";
import Stake2 from "./stakeStepforms/Stake2";


const StakeContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      {activeTab === 0 && (
        <Stake1
          handleNextPage={() => handleTabChange(activeTab + 1)}
        />
      )}
      {activeTab === 1 && (
        <Stake2
          handleNextPage={() => handleTabChange(activeTab + 1)}
        />
      )}
    </div>
  );
};

export default StakeContainer;
