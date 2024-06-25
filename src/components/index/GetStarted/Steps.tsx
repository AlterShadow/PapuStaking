import React, { useState } from "react";
import Step1 from "./Step1"
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

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
      {activeTab === 1 && (
        <Step2
          handleNextPage={() => handleTabChange(activeTab + 1)}
          handlePreviousPage={() => handleTabChange(activeTab - 1)}
        />
      )}
      {activeTab === 2 && (
        <Step3
          handleNextPage={() => handleTabChange(activeTab + 1)}
          handlePreviousPage={() => handleTabChange(activeTab - 1)}
        />
      )}
      {activeTab === 3 && (
        <Step4
          // handleNextPage={() => handleTabChange(activeTab + 1)}
          // handlePreviousPage={() => handleTabChange(activeTab - 1)}
        />
      )}
    </div>
  );
};

export default StepContainer;
