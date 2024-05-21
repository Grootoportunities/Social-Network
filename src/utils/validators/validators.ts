export const required = (value: string) =>
  value ? undefined : "Field is required";

export const maxLengthCreator = (maxLength: number) => (value: string) =>
  value.trim().length > maxLength
    ? `Max length is ${maxLength} symbols`
    : undefined;
