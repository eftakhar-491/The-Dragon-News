import React from "react";
import Nav from "./Components/Nav";
import { LeftSide } from "./Components/LeftSide";
import { Home } from "./Components/Home";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        <Nav />
        <Outlet />
        {/* <Home /> */}
      </main>
    </>
  );
};
