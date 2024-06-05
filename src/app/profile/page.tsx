import React from "react";

interface profileProps {
  // Define your component's props here

}

const profile: React.FC<profileProps> = (props) => {
  return (
    <div className="bg-black">
      {/* Your component JSX */}
      <p className="text-white">Welcome profile!</p>
    </div>
  );
};

export default profile;
