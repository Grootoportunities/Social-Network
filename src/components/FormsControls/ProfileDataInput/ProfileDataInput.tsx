import { FC } from "react";
import { FormControl } from "../FormControl";
import { S } from "../_styles";

export const ProfileDataInput: FC<any> = ({ input, meta, ...props }) => {
  const errorCondition = meta.touched && meta.error;

  return (
    <FormControl meta={meta} error={errorCondition}>
      <S.Input {...input} {...props} error={errorCondition} />
    </FormControl>
  );
};
