import { CancelIcon, CartSubtotal } from "../../components";

export default function CartPage() {
  return (
    <>
      <div className="h-screen bg-gray-100 px-2 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="product-image"
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
                    <span className="cursor-pointer rounded-l bg-gray-100 py-2 text-xl px-4 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-11 w-10 border bg-white text-center text-2xl py-3 outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-2 text-xl px-4 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-xl">259.000 ₭</p>
                    <CancelIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="product-image"
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
                    <span className="cursor-pointer rounded-l bg-gray-100 py-2 text-xl px-4 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-11 w-10 border bg-white text-center text-2xl py-3 outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-2 text-xl px-4 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-xl">259.000 ₭</p>
                    <CancelIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CartSubtotal />
        </div>
      </div>
    </>
  );
}
