import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";
import Loader from "./Loader";

const Home = () => {
  const {products} = useContext(UserContext) ;
  const {search} = useLocation() ;
  const category =new URLSearchParams(search).get('category')||'';
  const [filterProducts,setFilterProducts]=useState([]) ;

  useEffect(() =>{
    if (category) {
      const sorting  = products.filter(item => item.category == category) ;
      setFilterProducts(sorting)  ;
    }else{
      setFilterProducts(products) ;
    }
  },[category,products])

  return products.length ? (
    <div className="min-h-screen max-w-screen bg-zinc-100 flex overflow-x-hidden overflow-y-auto">
      <Nav />
      <div className="min-h-screen w-[85%]  p-4 flex flex-wrap justify-between ">
        {filterProducts.map((product) => {
          return (
            <Link
              key={product.id}
              to={`/description/${product.id}`}
              className="Card h-[42vh] w-[21%] p-2 m-3 flex flex-col items-center rounded-lg border border-black bg-white "
            >
              <img
                className="w-3/4 h-[50%] object-fit mb-3"
                src={product.image}
                alt=""
              />
              <h1 className="text-md mt-1 font-semibold font-serif">
                {product.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;
