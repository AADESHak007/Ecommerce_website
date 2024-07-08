import React, { useContext } from "react";
import CartContext from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItemFromCart } = useContext(CartContext);
  console.log(items);
  const Total = items.reduce((acc, prev) => prev.price + acc, 0);

  return (
    <>
      <div className=" w-[80%] min-h-screen bg-zinc-300 mx-auto flex flex-col p-1">
      <Link
              className="w-24 p-2 mt-5 text-center hover:bg-orange-500 hover:text-white hover:font-bold transition-all rounded-lg border border-zinc-400"
              to={`/`}
            >
              H O M E
            </Link>
        <div className="">
            <h1 className="text-4xl underline underline-offset-4 font-semibold text-center font-serif p-4"> C A R T </h1>
          <section>
            {items.map((p) => (
              <div
                key={p.id}
                className="flex items-center mt-3 p-2 bg-orange-500 rounded-lg justify-around"
              >
                <img
                  className="h-20 w-20 rounded-md object-cover"
                  src={p.image}
                  alt=""
                />
                <h2 className="text-sm font-semibold w-[35%]">
                  {p.title.substring(0, 30)}
                </h2>
                <h2 className="text-sm font-semibold w-[25%]">{p.category}</h2>
                <h2 className="text-sm font-semibold w-[10%]">{p.price}</h2>
                <button
                  onClick={() => removeItemFromCart(p.id)}
                  className="text-sm border border-white p-2 rounded-full font-semibold w-[10%]"
                >
                  REMOVE
                </button>
              </div>
            ))}
          </section>
          <button
            className="w-44 p-2  text-center mt-3 rounded-lg border border-zinc-400"
            to="/cart"
          >
            {`T O T A L : ${Total}`}
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
