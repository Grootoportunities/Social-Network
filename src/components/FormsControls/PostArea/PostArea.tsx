import { FC } from "react";
import { S } from "../_styles";
import { FormControl } from "../FormControl";

export const PostArea: FC<any> = ({ input, meta, ...props }) => {
  const errorCondition = meta.touched && meta.error;

  return (
    <FormControl meta={meta} error={errorCondition}>
      <S.Textarea {...input} {...props} error={errorCondition} />
    </FormControl>
  );
};
