import { Status } from "../status/Status";
import { LookingForAJob } from "../lookingForAJob/LookingForAJob";
import { Contacts } from "../contacts/Contacts";
import React, { FC } from "react";
import { ProfileContactsType } from "../../../../redux/reducers/profileReducer";

type Props = {
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  contacts: ProfileContactsType;
  status: string;

  updateProfileStatus: (status: string) => void;
};

export const ProfileData: FC<Props> = ({
  fullName,
  updateProfileStatus,
  lookingForAJobDescription,
  lookingForAJob,
  contacts,
  status,
}) => {
  return (
    <>
      <h2>{fullName}</h2>
      <Status statusValue={status} updateProfileStatus={updateProfileStatus} />
      <LookingForAJob
        lookingForAJob={lookingForAJob}
        lookingForAJobDescription={lookingForAJobDescription}
      />
      <Contacts contacts={contacts} />
    </>
  );
};
