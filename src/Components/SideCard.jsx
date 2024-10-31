import React from "react";
import dummy from "../assets/demo-card-thumbnail.png";
export default function SideCard({ data }) {
  return (
    <div className="my-3 rounded-md w-full p-2 border-2">
      <img className="rounded-md" src={dummy} alt="" />
      <h1 className="mt-2 mb-3 text-xl font-bold text-[#1d1d1d]">
        Lorem ipsum dolor sit amet.
      </h1>
      <div className="flex items-center text-sm font-semibold justify-between">
        <span>Sports</span> <span>Date: 2/12/2024</span>
      </div>
    </div>
  );
}
