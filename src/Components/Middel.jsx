import React from "react";
import NewsCard from "./NewsCard";
import { useSelector } from "react-redux";

export default function Middel({ title }) {
  const categoryData = useSelector((state) => state.categoryData);

  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">{title}</h1>
      {categoryData?.map((item) => (
        <NewsCard key={item._id} data={item} />
      ))}
      {/* <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard /> */}
    </div>
  );
}
