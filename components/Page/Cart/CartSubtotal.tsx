export const CartSubtotal = () => {
  return (
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700 text-xl font-bold">Subtotal</p>
        <p className="text-gray-700 text-xl">$129.99</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700 text-xl font-bold ">Shipping</p>
        <p className="text-gray-700 text-xl">$4.99</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">$134.98 USD</p>
          <p className="text-gray-700 text-lg">including VAT</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-4 text-xl  font-bold text-blue-50 hover:bg-blue-600">
        Check out
      </button>
    </div>
  );
};
