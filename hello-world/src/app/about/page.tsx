import { Metadata } from "next";

interface aboutProps {
  // Define your component's props here
}

export const metadata: Metadata = {
  title: "About",
};

const about: React.FC<aboutProps> = (props) => {
  return (
    <div>
      {/* Your component JSX */}
      <p className="text-2xl">Welcome about!</p>
    </div>
  );
};

export default about;
