import { Link } from "react-router-dom";

export default function NewsCard({ data }) {
  return (
    <>
      <Link to={"/newsDetails"}>
        <section className="border-2 p-4 my-4 rounded-lg cursor-pointer">
          <div className="py-2 px-4 rounded-xl bg-[#F3F3F3] flex justify-between items-center">
            <div className="flex gap-3">
              <img
                className="w-14 h-13 rounded-full"
                src={data.author.img}
                alt=""
              />
              <div>
                <h1 className="font-bold text-lg">{data?.author?.name}</h1>
                <h2 className="text-sm ">{data?.author?.published_date}</h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="cursor-pointer">Wishlist</div>
              <div className="cursor-pointer">Share</div>
            </div>
          </div>
          <h1 className="text-xl font-bold mb-6 hover:underline mt-3">
            {data?.title}
          </h1>
          <img className="w-full" src={data?.thumbnail_url} alt="" />
          <p className="text-[16px] font-semibold text-[#706F6F] my-4">
            {data?.details}
          </p>
          <h2 className="text-sm font-bold text-[#F75B5F] cursor-pointer hover:underline mb-3">
            Read More
          </h2>
          <hr />
          <div className="items-center my-3 flex justify-between">
            <p>Rating - {data?.rating?.number}</p>
            <p>Views: {data?.total_view}</p>
          </div>
          <hr />
        </section>
      </Link>
    </>
  );
}
