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
      <section className="lg:w-4/5 mx-auto flex justify-between gap-4">
        {location.pathname === `/newsDetails/${id}` ? (
          <Outlet />
        ) : (
          <>
            <LeftSide setTitle={setTitle} />
            <Middel title={title} />
          </>
        )}
        {/* <LeftSide /> */}
        {/* <Middel /> */}
        <RightSide />
      </section>
      {/* <Outlet /> */}
    </>
  );
};
