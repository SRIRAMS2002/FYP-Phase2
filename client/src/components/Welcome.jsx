import React, { useContext, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const products = [
  {
    id: 1,
    name: "Earthen Bottle",

    price: "480",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",

    price: "350",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",

    price: "890",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",

    price: "390",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  // More products...
];

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction } =
    useContext(TransactionContext);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const totalItemsInCart = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const exchangeRate = 1000000;

  // Calculate the total value in Ethereum
  const totalValueInEthereum = (
    cart.reduce((total, item) => total + item.price * item.quantity, 0) /
    exchangeRate
  ).toFixed(4);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call sendTransaction with the totalValueInEthereum as the parameter
      await sendTransaction(totalValueInEthereum);
      console.log(totalValueInEthereum);
    } catch (error) {
      console.error("Transaction failed:", error);
      // Handle the error and provide feedback to the user
      // You can set an error state using a state variable, e.g., setError(true);
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className=" mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5  ">
            <div className="flex justify-between flex-col w-full h-full">
              <div>
                <p className="text-white font-light text-sm">
                  {" "}
                  Welcome {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          {/* <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />
            <button
              type="button"
              onClick={handleSubmit}
              className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
            >
              Send now
            </button>
          </div> */}
        </div>

        {/* products */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {product.price}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* cart section */}
        <div className="bg-gray-100 p-8">
          <h2 className="text-2xl font-bold mb-4">
            Shopping Cart ({totalItemsInCart} items)
          </h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b-2 py-2"
                >
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="mt-4 flex justify-around">
                <p className="font-bold">Total: {totalValueInEthereum} ETH</p>
                <button
                  onClick={handleSubmit}
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Purchase Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
