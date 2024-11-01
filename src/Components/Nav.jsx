import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <nav className="lg:w-4/5 mx-auto mt-2">
        <section className="mb-4 flex justify-between items-center">
          {/* search + country + login */}
          <div className="flex items-center gap-3 border-2 w-fit px-3">
            <input className="w-full h-full" type="text" />
            <button className="border-l-2 pl-3 hover:border-black">
              Search
            </button>
          </div>
          <div>
            <ul className="flex gap-4 text-sm">
              <li className="hover:underline cursor-pointer">United_State</li>
              <li className="hover:underline cursor-pointer">International</li>
              <li className="hover:underline cursor-pointer">Bangladesh</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <button className="bg-slate-600 px-4 py-1 rounded-sm text-white text-sm font-bold">
              SUBSCRIBE FOR $0.25/WEEK
            </button>
            <button className="bg-slate-600 px-4 py-1 rounded-sm text-white text-sm font-bold">
              LOG IN
            </button>
          </div>
        </section>
        <section className="flex items-center justify-between">
          {/* date + name + special */}

          <div>
            <h2 className="font-bold">
              Date: {new Date().toLocaleDateString()}
            </h2>
            <p className="text-sm hover:underline cursor-pointer">
              Todays Paper
            </p>
          </div>
          <div>
            <img src={logo} alt="Logo" />
            <p className="text-center text-sm font-semibold text-[#232323af]">
              Journalism Without Fear or Favour
            </p>
          </div>
          <div>
            <p>Special section</p>
          </div>
        </section>
        <section className="mt-4">
          <ul className="cursor-pointer text-sm font-bold text-[#161616e4] flex justify-center items-center gap-5">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/blog"}>
              <li>Blog</li>
            </Link>
            <Link to={"/about"}>
              <li>About Us</li>
            </Link>
            <li>Publish News</li>
          </ul>
        </section>
      </nav>
    </>
  );
}
