import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useAuth } from "../../base";
import { AcmeLogo, SearchIcon } from "../Icons";
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const categories = [
  "All",
  "Phones",
  "Clothes",
  "Electronics",
  "Beauty",
  "Gaming",
  "Children/Babies",
  "Laptops",
];
export const NavbarLayout = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar maxWidth={"2xl"} isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link href="/">
            <AcmeLogo />
          </Link>
          <Link href="/">
            <p className="hidden sm:block font-bold text-inherit">
              LoligriVisual
            </p>
          </Link>

          <Example />

          <form className="ml-4 hidden lg:inline-flex">
            <Input
              classNames={{
                base: "max-w-full sm:max-w-[20rem] h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="Type to search product... "
              size="sm"
              startContent={<SearchIcon size={18} />}
              type="search"
              name="search"
            />
          </form>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {!user ? (
          <>
            <Link href="/auth/user/login">Login</Link>
            <Link href="/auth/user/register">Register</Link>
          </>
        ) : null}
        {user ? (
          <>
            <Link href="/cart">Cart</Link>
            <button onClick={logOut}>Logout</button>
          </>
        ) : null}
      </NavbarContent>
    </Navbar>
  );
};

export default function Example() {
  const { push } = useRouter();

  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="ml-2 flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#395c85] py-2 px-4 text-white hover:bg-[#2c4767]">
            <MenuIcon />
            Categories
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {categories.map((category) => (
                <Menu.Item key={category}>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        push("/?category=" + category);
                      }}
                      className={`${
                        active ? "bg-gray-100 " : ""
                      } group flex w-full items-center text-gray-900 rounded-md px-2 py-2 text-sm`}
                    >
                      {category}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
