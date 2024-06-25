import React, { useState } from "react";
import Step1 from "./Step1"

const StepContainer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      {activeTab === 0 && (
        <Step1
          handleNextPage={() => handleTabChange(activeTab + 1)}
        />
      )}
      {/* {activeTab === 1 && (
        <Step2
          handleNextPage={() => handleTabChange(activeTab + 1)}
          handlePreviousPage={() => handleTabChange(activeTab - 1)}
        />
      )}
      {activeTab === 2 && (
        <ChooseProducts
          handleNextPage={() => handleTabChange(activeTab + 1)}
          handlePreviousPage={() => handleTabChange(activeTab - 1)}
          backToPlatform={() => handleTabChange(activeTab + 3)}
        />
      )} */}
    </div>
  );
};

export default StepContainer;
