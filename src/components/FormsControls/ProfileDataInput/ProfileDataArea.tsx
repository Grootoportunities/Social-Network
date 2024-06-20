import { FC } from "react";
import { FormControl } from "../FormControl";
import { S } from "../_styles";

export const ProfileDataArea: FC<any> = ({ input, meta, ...props }) => {
  const errorCondition = meta.touched && meta.error;

  return (
    <FormControl meta={meta} error={errorCondition}>
      <S.Textarea {...input} {...props} error={errorCondition} />
    </FormControl>
  );
};
