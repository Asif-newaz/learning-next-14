import React from "react";
// import { Avatar, AvatarImage } from "../ui/avatar";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <>
      <div>
        {/* <Avatar>
          <AvatarImage src="/images/dh-logo.png" alt="" />
        </Avatar> */}
        <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl text-slate-100">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Header;
