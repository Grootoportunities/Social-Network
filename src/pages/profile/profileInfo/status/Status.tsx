import { ChangeEvent, FC, useEffect, useState } from "react";

type StatusPropsType = {
  statusValue: string;
  updateProfileStatus: (status: string) => void;
};

export const Status: FC<StatusPropsType> = ({
  statusValue,
  updateProfileStatus,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(statusValue);

  const onActivateEditMode = () => setEditMode(true);

  const onDisableEditMode = () => {
    if (value.trim() !== "") updateProfileStatus(value);

    setEditMode(false);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.currentTarget.value);

  useEffect(() => setValue(statusValue), [statusValue]);

  return (
    <>
      {!editMode && !!statusValue ? (
        <span onDoubleClick={onActivateEditMode}>{statusValue}</span>
      ) : (
        <input
          value={value}
          onChange={onChangeHandler}
          onBlur={onDisableEditMode}
          autoFocus
        />
      )}
    </>
  );
};
