import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Nav = () => {
  const { products } = useContext(UserContext);
  let categoryFilter =
    products &&
    products.reduce((acc, item) => {
      return [...acc, item.category];
    }, []);

  categoryFilter = [...new Set(categoryFilter)];

  return (
    <nav className=" min-h-screen w-[15%] p-5 bg-zinc-5M00 flex flex-col items-center justify-start">
      <Link className="px-5 py-2 rounded-lg border text-xl border-zinc-400 hover:bg-sky-400 hover:text-white hover:font-bold transition-all " to="/cart">
        C A R T
      </Link>
      <Link className="px-4 py-1 mt-16 rounded-lg border text-xl border-zinc-400 hover:bg-black hover:text-white transition-all " to="/">
        HOME
      </Link>
      <div className="m-5 w-full bg-zinc-400 h-[1px] rounded"></div>
      <h1 className="text-xl font-semibold border-b-2 text-white border-zinc-200 mb-5 ">
        Category Filter
      </h1>
      <ul className="list-disc">
        {categoryFilter.map((c, i) => (
          <li key={i}>
            <Link to={`/?category=${c}`} className="font-semibold text-lg hover:text-blue-700" >{c}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
