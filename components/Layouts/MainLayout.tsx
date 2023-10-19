import { useQueryHeaders } from "@ventlio/tanstack-query";
import { ReactNode, useEffect } from "react";
import { NavbarLayout } from "./NavbarLayout";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const { setQueryHeaders } = useQueryHeaders();

  useEffect(() => {
    setQueryHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNGViMTM4ZjctMjk5NC00NmRlLWI2NTYtNTU0NzZkZGEzODdiIiwiZW1haWwiOiJzdGFubGV5YnJpZGdlQHlvcG1haWwuY29tIiwicGhvbmUiOm51bGwsImlkIjoxMDEsImlhdCI6MTY5NjI3NTY2MywiZXhwIjoxNjk2MzYyMDYzLCJhdWQiOiI0ZWIxMzhmNy0yOTk0LTQ2ZGUtYjY1Ni01NTQ3NmRkYTM4N2IifQ.0thtKKw0l9-e-NbgNBbDdSl90G5VL2Py6Lb-SIXzrRk`,
    });
  }, []);

  return (
    <>
      <NavbarLayout />
      <div className="max-w-[1024px] m-auto my-10">{children}</div>
    </>
  );
};
