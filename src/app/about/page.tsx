import React from 'react';

interface aboutProps {
  // Define your component's props here
}

export const metadata = {
  title: "About codevolution"
}

const about: React.FC<aboutProps> = (props) => {
  return (
    <div>
      {/* Your component JSX */}
      <p>Welcome about!</p>
    </div>
  );
}

export default about;
