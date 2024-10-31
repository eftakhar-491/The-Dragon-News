import React from "react";
import { LeftSide } from "./LeftSide";
import RightSide from "./RightSide";
import Middel from "./Middel";

export const Home = () => {
  return (
    <>
      <section className="lg:w-4/5 mx-auto flex justify-between gap-4">
        <LeftSide />
        <Middel />
        <RightSide />
      </section>
    </>
  );
};
