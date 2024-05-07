import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  // Local variable
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  const navigate = useNavigate();
  // xử lí tăng số lượng
  const handleInc = (id) => {
    const updateCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };
  // xử lí giảm số lượng
  const handleDec = (id) => {
    const updateCart = carts.map((item) => {
      if (item.id === id) {
        // Kiểm tra nếu số lượng đã là 1, thì không giảm nữa
        const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };

  // xử lí xóa sản phẩm
  const removeProduct = (id) => {
    const updateCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };
  console.log(carts);
  return (
    <div className="container px-5 py-24 mx-auto">
      <div>
        <div className=" mr-4">
          <div className="flex justify-between mb-4 border-b">
            <h1 className="mb-4 font-semibold text-2xl">Shopping Cart</h1>
            <h1 className="mb-4 font-semibold text-2xl">
              {carts.length} Items
            </h1>
          </div>
          <div className="flex">
            <h3 className="w-2/5 font-semibold text-xs uppercase">
              Product Detail
            </h3>
            <h3 className="w-1/5 text-center font-semibold text-xs uppercase">
              Quantity
            </h3>
            <h3 className="w-1/5 text-center font-semibold text-xs uppercase">
              Price
            </h3>
            <h3 className="w-1/5 text-center font-semibold text-xs uppercase">
              Total
            </h3>
          </div>
          {carts?.map((cart) => {
            return (
              <div className="showDetail flex mt-2 flex-grow">
                <div className="flex w-2/5 mt-2">
                  <img
                    style={{ maxWidth: "30%" }}
                    src={cart.image}
                    alt={cart.title}
                  />
                  <div className="flex flex-col ml-2 ">
                    <span className="font-semibold text-sm text-ellipsis">
                      {cart.title}
                    </span>
                    <span className=" font-semibold text-blue-500 text-xs uppercase">
                      {cart?.category}
                    </span>
                    <div
                      className="font-semibold text-red-400 hover:text-red-600 text-xs cursor-pointer uppercase"
                      onClick={() => removeProduct(cart?.id)}
                    >
                      Remove
                    </div>
                  </div>
                </div>
                <div className="w-1/5 flex items-center justify-center">
                  <input
                    type="button"
                    className="bg-gray-200 w-5 border border-black cursor-pointer"
                    value="-"
                    onClick={() => handleDec(cart?.id)}
                  ></input>
                  <input
                    type="box"
                    value={cart.quantity}
                    className="w-10 border border-x-0 border-black text-center"
                  ></input>
                  <input
                    type="button"
                    className="bg-gray-200 w-5 border border-black cursor-pointer"
                    value="+"
                    onClick={() => handleInc(cart?.id)}
                  ></input>
                </div>
                <div className="w-1/5 flex items-center justify-center">
                  {cart?.price}
                </div>
                <div className="w-1/5 flex items-center justify-center">
                  {cart?.price * cart?.quantity}
                </div>
              </div>
            );
          })}
          <Link to="/products">
            <button className="inline-flex items-center text-white bg-indigo-400 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-10">
              Continue shopping
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
