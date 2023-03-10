import React from "react";
import NavBar from "../NavBar/NavBar";
import UserSideBar from "../UserSideBar/UserSideBar";
import BottomBar from "../BottomBar/BottomBar";

function Layout(props) {
  return (
    <div className="bg-[#F3F3F6]">
      <NavBar />
      <div className="flex ">
        <UserSideBar />
        {props.children}
      </div>
      <div className="md:hidden block sticky bottom-0 z-50 w-full ">
        <BottomBar />
      </div>
    </div>
  );
}

export default Layout;
