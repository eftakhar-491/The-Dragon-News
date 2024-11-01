import React, { useEffect, useState } from "react";
import SideCard from "./SideCard";
import FetchData, { FetchCategoryData } from "../hooks/FetchData";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryData } from "../Store/Slices/categoryData";
import { setData } from "../Store/Slices/allData";
export const LeftSide = ({ setTitle }) => {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.allData);

  useEffect(() => {
    FetchData(
      "https://openapi.programming-hero.com/api/news/categories",
      setData,
      dispatch
    );

    handelCategoryClick({ category_id: "08", category_name: "All News" });
  }, []);
  function handelCategoryClick(clickedData) {
    FetchCategoryData(
      `https://openapi.programming-hero.com/api/news/category/${clickedData.category_id}`,
      setCategoryData,
      dispatch
    );
    setTitle(clickedData.category_name);
  }

  return (
    <>
      <section className="w-[300px] px-3 flex-shrink-0">
        <h1 className="mb-3 text-lg font-bold">All Category</h1>
        {/* <div className="font-bold text-black mb-2 rounded-lg w-full py-3 text-center bg-[#E7E7E7]">
          National News
        </div>
        <div className="mb-2 rounded-lg text-[#9F9F9F] w-full py-3 text-center bg-[#E7E7E7]">
          National News
        </div> */}

        {categoryData?.map((item, i) => (
          <div
            key={i}
            onClick={() => handelCategoryClick(item)}
            className="cursor-pointer font-bold mb-2 rounded-lg text-[#9F9F9F] w-full py-3 text-center"
          >
            {item.category_name}
          </div>
        ))}
        <SideCard />
        <SideCard />
        <SideCard />
        <SideCard />
        <SideCard />
      </section>
    </>
  );
};
