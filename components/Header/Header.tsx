import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <div className="flex justify-between">
        <Avatar>
          <AvatarImage src="/images/dh-logo.png" alt="" />
        </Avatar>
        <h1 className="scroll-m-20 text-lg tracking-tight lg:text-lg text-slate-100">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Header;
