import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <div className="flex justify-between items-center px-7 py-4">
        <Avatar>
          <AvatarImage src="/images/dh-logo.png" alt="" />
        </Avatar>
        <Button variant="outline" className="bg-transparent text-white">
          EN
        </Button>
      </div>
    </>
  );
};

export default Header;
