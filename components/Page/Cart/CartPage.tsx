import { useCart } from "../../../base";
import { CartSubtotal } from "./CartSubtotal";

export default function CartPage() {
  const carts = useCart((state) => state.carts);
  const addToCart = useCart((state) => state.addToCart);
  const reduceCart = useCart((state) => state.reduceCart);

  return (
    <div className="h-screen bg-gray-100 px-2 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {carts.length < 1 ? (
            <div className="p-2 py-4 bg-cyan-200">
              <p className="text-2xl font-bold text-center">
                Your cart is empty, add a product to cart to checkout
              </p>
            </div>
          ) : null}
          {carts.map((product) => (
            <div
              key={product.id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={product.img}
                alt={`Picture of ${product.title}`}
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-lg text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span
                      onClick={() => reduceCart(product.id)}
                      className="cursor-pointer rounded-l bg-gray-100 py-2 text-xl px-4 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-11 w-10 border bg-white text-center text-2xl py-3 outline-none"
                      type="number"
                      value={product.quantity}
                      min="1"
                    />
                    <span
                      onClick={() => addToCart(product.id)}
                      className="cursor-pointer rounded-r bg-gray-100 py-2 text-xl px-4 duration-100 hover:bg-blue-500 hover:text-blue-50"
                    >
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="items-center space-x-4">
                    <p className="text-xl">
                      £{product.price * product.quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <CartSubtotal />
      </div>
    </div>
  );
}
