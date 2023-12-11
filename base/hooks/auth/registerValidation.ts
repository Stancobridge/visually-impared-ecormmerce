import * as yup from "yup";
export const registerValidation = yup.object({
  fullname: yup.string().required("fullname is required"),
  email: yup.string().required("email is required"),
  password: yup.string().required("password is required"),
  confirm_password: yup
    .string()
    .required("confirm password is required")
    .oneOf([yup.ref("password")], "Password do not match"),
});
