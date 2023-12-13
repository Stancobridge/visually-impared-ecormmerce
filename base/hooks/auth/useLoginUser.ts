import { useRouter } from "next/router";
import { useState } from "react";
import { loginValidation } from ".";
import { useFormManager } from "../useFormManager";
import { useAuth } from "./useAuth";

export const useLoginUser = ({
  isAdmin,
  pushRoute = "/",
}: {
  pushRoute: string;
  isAdmin: boolean;
}) => {
  const { methods, handleSubmit } = useFormManager({
    validator: loginValidation,
  });
  const [error, setError] = useState<string>();
  const { push } = useRouter();
  const { user, setUser, users } = useAuth();

  if (user && !isAdmin) {
    push(pushRoute);
  }
  if (user && isAdmin && user.isAdmin) {
    push(pushRoute);
  }

  const loginUser = handleSubmit((data) => {
    if (data.password !== "password") {
      setError("Invalid login details");
      return;
    }

    if (
      (!isAdmin && data.email !== "user@lolivisual.com") ||
      (isAdmin && data.email !== "admin@lolivisual.com")
    ) {
      setError("Invalid login details");
      return;
    }

    if (isAdmin === true && data.email !== "admin@lolivisual.com") {
      setError("You are forbidden to access this page");
      return;
    }
    setUser({ ...data, isAdmin });
    push(pushRoute);
  });

  return { methods, loginUser, error };
};
