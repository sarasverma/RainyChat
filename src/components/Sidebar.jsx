import React, { useRef } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  const sidebar = useRef(null);

  return (
    <>
      <div
        className="sidebarToogleMobile"
        onClick={() => {
          if (sidebar.current.style.transform !== "translateX(0px)") {
            sidebar.current.style.transform = "translateX(0)";
          } else {
            sidebar.current.style.transform = "translateX(-100%)";
          }
        }}
      >
        <i className="fa-sharp fa-solid fa-square-right"></i>
      </div>
      <div ref={sidebar} className="sidebar">
        <Navbar />
        <Search />
        <Chats />
      </div>
    </>
  );
};

export default Sidebar;
