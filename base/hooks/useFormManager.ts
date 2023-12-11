import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

export const useFormManager = ({ validator }: Yup.InferType<any> = {}) => {
  const methods = useForm({
    shouldUseNativeValidation: false,
    shouldUnregister: true,
    resolver: validator ? yupResolver(validator) : undefined,
  });

  const { control, handleSubmit, reset, register, resetField } = methods;

  return { methods, control, handleSubmit, reset, register, resetField };
};
