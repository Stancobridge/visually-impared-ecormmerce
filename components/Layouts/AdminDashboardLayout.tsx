import Link from "next/link";
import { ReactNode } from "react";
import { NavIcon } from "../Icons";

export const AdminDashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex bg-gray-100">
      <aside className="bg-gray-800 text-white h-screen w-80 fixed top-0 left-0 overflow-y-auto transition-transform transform -translate-x-full md:translate-x-0 md:static ">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
        <ul className="py-4">
          <li className="px-4 py-2 hover:bg-gray-600">
            <Link href="/dashboard" className="block">
              Orders
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-600">
            <Link href="/dashboard/add-product" className="block">
              Add Product
            </Link>
          </li>
        </ul>
      </aside>

      <main className="ml-0  p-4 w-full">
        <header className="bg-white shadow-md p-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                const sidebar: HTMLElement = document.querySelector(
                  "aside"
                ) as HTMLElement;
                sidebar.classList.toggle("-translate-x-full");
              }}
              className="md:hidden block"
            >
              <NavIcon />
            </button>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="hidden md:block"></div>
          </div>
        </header>

        <div
          className="mt-4 p-4 bg-white shadow-md rounded-md"
          onClick={() => {
            const sidebar: HTMLElement = document.querySelector(
              "aside"
            ) as HTMLElement;
            if (!sidebar.classList.contains("-translate-x-full")) {
              sidebar.classList.toggle("-translate-x-full");
            }
          }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};
