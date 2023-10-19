import {
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react";
import { AcmeLogo, SearchIcon } from "../Icons";

export const NavbarLayout = () => {
  return (
    <>
      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <Link href="/">
              <AcmeLogo />
            </Link>
            <Link href="/">
              <p className="hidden sm:block font-bold text-inherit">
                PairSales
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <form>
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
        </NavbarContent>
      </Navbar>
    </>
  );
};
