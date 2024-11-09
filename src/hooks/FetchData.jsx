import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FetchData(URL, UPDATESTATE, dispatch) {
  axios.get(URL).then((res) => {
    dispatch(UPDATESTATE(res.data.data.news_category));
  });
}
export function FetchCategoryData(URL, UPDATESTATE, dispatch) {
  axios.get(URL).then((res) => {
    dispatch(UPDATESTATE(res.data.data));
  });
}
