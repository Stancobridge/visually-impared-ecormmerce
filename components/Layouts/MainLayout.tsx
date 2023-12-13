import { useQueryHeaders } from "@ventlio/tanstack-query";
import { ReactNode, useEffect } from "react";
import { Footer } from "../Global";
import { NavbarLayout } from "./NavbarLayout";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { setQueryHeaders } = useQueryHeaders();

  useEffect(() => {}, []);

  return (
    <>
      <NavbarLayout />
      <div className="max-w-[1324px] m-auto my-10">{children}</div>
      <Footer />
    </>
  );
};
