import React from "react";
import RegisterLogIn from "./RegisterLogIn";
import SideCard from "./SideCard";

export default function RightSide() {
  return (
    <>
      <section className="w-[300px]">
        <h1 className="mb-3 text-lg font-bold">Log IN</h1>
        <RegisterLogIn />
        <SideCard />
        <SideCard />
        <SideCard />
        <SideCard />
      </section>
    </>
  );
}
