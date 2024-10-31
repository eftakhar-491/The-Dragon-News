import React, { useEffect } from "react";
import SideCard from "./SideCard";
import FetchData from "../hooks/FetchData";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setData } from "../Store/Slices/allData";
export const LeftSide = () => {
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.allData);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => {
        dispatch(setData(res.data.data.news_category));
      });
  }, []);
  function handelCategoryClick(clickedData) {
    console.log(clickedData);
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
