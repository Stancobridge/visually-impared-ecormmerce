import { FC, ReactElement, useLayoutEffect } from "react";
import {
  Control,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

export interface IInputProps {
  name?: string;
  className?: string;
  labelClassName?: string;
  label?: string;
  containerClassName?: string;
  icon?: ReactElement;
  error?: string;
  inputRef?: React.Ref<any>;
  control?: Control<FieldValues, any>;
}
type FormInput = Omit<Omit<IInputProps, "control">, "error"> & {
  name: string;
};
export const Input: FC<FormInput & any> = ({ onChange, ...props }) => {
  const { control, setValue } = useFormContext();
  const { name, value, ...restProps } = props;

  const {
    field,
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue: value,
  });

  useLayoutEffect(() => {
    if (value) {
      setValue(name, value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const error = errors[name]?.message as string;

  return (
    <>
      <input
        {...restProps}
        onChange={(e: any) => {
          if (onChange) {
            onChange(e);
          }
          return field.onChange(e);
        }}
        checked={field.value}
        onBlur={field.onBlur}
        value={field.value ?? ""}
        ref={field.ref}
      />
      {error ? (
        <span className="text-red-500 right-0 text-xs font-medium text-dangerColor/80">
          {error}
        </span>
      ) : null}
    </>
  );
};
