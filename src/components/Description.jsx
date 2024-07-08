import React, { useContext } from "react";
import { useParams, Link, } from "react-router-dom";
import UserContext from "../context/UserContext";
import CartContext from "../context/CartContext";

const Description = () => {
  const { id } = useParams();
  const { products } = useContext(UserContext);
  const product = products.find((item) => item.id === parseInt(id));

  const {items, setItems} = useContext(CartContext);

  const handleClick = () => {
    setItems([...items, product]);
  };

  return (
    <div className="w-[70%] mx-auto h-screen bg-zinc-100 flex flex-col items-center p-5">
       <Link
            className="px-5 py-2 mt-2 hover:bg-orange-500 hover:text-white hover:font-bold transition-all rounded-lg border border-zinc-400"
            to={`/`}
          >
             H O M E 
          </Link>
      
      <div className="container w-full h-full flex justify-evenly items-center gap-28">
        <img
          className="h-1/2 w-1/3 object-fit ml-20"
          src={product.image}
          alt=""
        />
        <div className="content p-2 h-[37vh] w-[25vw] ">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <h1 className="text-lg text-yellow-500  my-2 font-medium">
            Price : 💲{product.price}
          </h1>
          <h1 className="text-md  font-semibold">{product.category}</h1>
          <p className="text-sm text-zinc-500 font-semibold w-[90%] my-4">
            {product.description}
          </p>
          <Link
            onClick={handleClick}
            className="px-5 py-2 mt-2 hover:bg-orange-500 hover:text-white hover:font-bold transition-all rounded-lg border border-zinc-400"
            to={`/`}
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Description;
