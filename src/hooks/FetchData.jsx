import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FetchData() {
  const dispatch = useDispatch();
  const allData = useSelector((state) => state.allData);
  console.log(allData);
  axios
    .get("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => {
      console.log(res.data.data.news_category);
    });
  return;
}
