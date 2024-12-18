import React from "react";
import RegisterLogIn from "./RegisterLogIn";
import SideCard from "./SideCard";

export default function RightSide() {
  return (
    <>
      <section className="min-w-[280px] hidden lg:block">
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
