import React, { useState } from "react";
import { LeftSide } from "./LeftSide";
import RightSide from "./RightSide";
import Middel from "./Middel";
import { Outlet, useLocation, useParams } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  return (
    <>
      <section className="lg:w-4/5 mx-auto flex flex-col lg:flex-row  justify-between gap-4">
        {location.pathname === `/newsDetails/${id}` ? (
          <>
            <Outlet />
            <RightSide />
          </>
        ) : (
          <>
            <LeftSide setTitle={setTitle} />
            <Middel title={title} />
            <RightSide />
          </>
        )}
        {/* <LeftSide />
        <Middel />
        <RightSide /> */}
      </section>
      {/* <Outlet /> */}
    </>
  );
};
