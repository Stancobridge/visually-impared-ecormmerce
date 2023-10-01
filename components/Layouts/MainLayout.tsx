import { ReactNode } from "react";
import { NavbarLayout } from "./NavbarLayout";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarLayout />
      <div className="max-w-[1024px] m-auto my-10">{children}</div>
    </>
  );
};
