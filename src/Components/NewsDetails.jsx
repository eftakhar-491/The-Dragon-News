import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FetchCategoryData } from "../hooks/FetchData";
import { useDispatch, useSelector } from "react-redux";
import { setNewsDetails } from "../Store/Slices/newsDetails";
export default function NewsDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const newsDetails = useSelector((state) => state.newsDetails);
  const navigate = useNavigate();
  console.log(navigate);
  useEffect(() => {
    FetchCategoryData(
      `https://openapi.programming-hero.com/api/news/${id}`,
      setNewsDetails,
      dispatch
    );
  }, []);
  function handelBack() {
    navigate("/");
  }
  return (
    <div className="mt-5">
      <img className="w-full mb-3" src={newsDetails[0]?.image_url} alt="" />
      <h1 className="text-2xl font-bold">{newsDetails[0]?.title}</h1>
      <p className="text-sm font-semibold text-[#1b1b1bc5]">
        {newsDetails[0]?.details}
      </p>
      <button
        onClick={handelBack}
        className="mt-6 rounded-md text-white font-bold px-10 py-1 bg-[#D72050]"
      >
        {" "}
        _Back{" "}
      </button>
    </div>
  );
}
