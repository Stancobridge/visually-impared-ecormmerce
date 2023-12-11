import { useRouter } from "next/router";
import { useLayoutEffect } from "react";
import { useAuth } from "../../../base";
import { AdminDashboardLayout, ChevronDown } from "../../../components";

export default function AddProductPage() {
  const { push } = useRouter();
  const { user } = useAuth();

  useLayoutEffect(() => {
    if (!user?.isAdmin) {
      push("/");
    }
  }, []);

  return (
    <AdminDashboardLayout>
      <div>
        <form className="rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productName"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productName"
              type="text"
              placeholder="Product Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productDescription"
            >
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productDescription"
              placeholder="Product Description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productPrice"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productPrice"
              type="text"
              placeholder="Product Price"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="productCategory"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-white border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productCategory"
              >
                <option>Select Category</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Home & Garden</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </AdminDashboardLayout>
  );
}
