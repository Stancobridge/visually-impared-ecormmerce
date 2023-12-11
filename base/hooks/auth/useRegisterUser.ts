import { useRouter } from "next/router";
import { useFormManager } from "../useFormManager";
import { registerValidation } from "./registerValidation";
import { useAuth } from "./useAuth";

export const useRegisterUser = ({
  isAdmin,
  pushRoute = "/",
}: {
  pushRoute: string;
  isAdmin: boolean;
}) => {
  const { methods, handleSubmit } = useFormManager({
    validator: registerValidation,
  });
  const { push } = useRouter();
  const { user, setUsers, setUser } = useAuth();

  if (user && !isAdmin) {
    push(pushRoute);
  }
  if (user && isAdmin && user.isAdmin) {
    push(pushRoute);
  }

  const registerUser = handleSubmit((data) => {
    setUser({ ...data, isAdmin });
    setUsers({ ...data, isAdmin });
    push(pushRoute);
  });

  return { methods, registerUser };
};
