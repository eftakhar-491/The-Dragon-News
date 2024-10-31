import React from "react";
import demo from "../assets/demo-card-thumbnail.png";
import men from "../assets/demo-user.png";
export default function NewsCard() {
  return (
    <>
      <section className="border-2 p-4 my-4 rounded-lg">
        <div className="py-2 px-4 rounded-md bg-[#F3F3F3] flex justify-between items-center">
          <div className="flex gap-3">
            <img className="w-14 h-13" src={men} alt="" />
            <div>
              <h1 className="font-bold text-lg">Name</h1>
              <h2 className="text-sm ">Date</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="cursor-pointer">Wishlist</div>
            <div className="cursor-pointer">Share</div>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </h1>
        <img className="w-full" src={demo} alt="" />
        <p className="text-[16px] font-semibold text-[#706F6F] my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium,
          a facilis dolor rerum itaque amet libero omnis consectetur modi nulla
          ullam. Nulla odio officiis dicta reiciendis facilis nihil fugit
          soluta. a facilis dolor rerum itaque amet libero omnis consectetur
          modi nulla ullam. Nulla odio officiis dicta reiciendis facilis nihil
          fugit soluta.
        </p>
        <h2 className="text-sm font-bold text-[#F75B5F] cursor-pointer hover:underline mb-3">
          Read More
        </h2>
        <hr />
        <div className="items-center my-3 flex justify-between">
          <p>Rating - 0.99</p>
          <p>Views</p>
        </div>
        <hr />
      </section>
    </>
  );
}
