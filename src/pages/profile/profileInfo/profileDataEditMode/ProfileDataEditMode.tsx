import React, { FC } from "react";
import { ProfileContactsType } from "../../../../redux/reducers/profileReducer";
import { Button } from "../../../../components/Button/Button";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../../../utils/validators/validators";
import { ProfileDataInput } from "../../../../components/FormsControls/ProfileDataInput/ProfileDataInput";
import { ProfileDataArea } from "../../../../components/FormsControls/ProfileDataInput/ProfileDataArea";
import { FormError } from "../../../login/loginForm/LoginForm";
import { FlexWrapper } from "../../../../components/FlexWrapper/FlexWrapper";
import styled from "styled-components";

export type ProfileFormData = {
  fullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  contacts: ProfileContactsType;
};

type Props = {
  contacts: ProfileContactsType;
};

const ProfileDataEditMode: FC<
  Props & InjectedFormProps<ProfileFormData, Props>
> = ({ handleSubmit, error, contacts }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        placeholder={"Full name"}
        name={"fullName"}
        component={ProfileDataInput}
        validate={[required]}
      />
      <div>
        <span>Looking for a job: </span>
        <Field
          name={"lookingForAJob"}
          component={ProfileDataInput}
          type={"checkbox"}
        />
      </div>
      <Field
        placeholder={"Description"}
        name={"lookingForAJobDescription"}
        component={ProfileDataArea}
        validate={[required]}
      />
      <Contacts>
        <b>Contacts:</b>{" "}
        {Object.keys(contacts).map((cKey, index) => (
          <b>
            {cKey}:{" "}
            <Field
              key={index}
              placeholder={cKey}
              name={`contacts.${cKey}`}
              component={ProfileDataInput}
            />
          </b>
        ))}
      </Contacts>
      <FlexWrapper
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button type={"submit"}>Save</Button>
        <FormError>{error}</FormError>
      </FlexWrapper>
    </form>
  );
};

export const EditProfileData = reduxForm<ProfileFormData, Props>({
  form: "editProfileData",
})(ProfileDataEditMode);

const Contacts = styled.div`
  margin-bottom: 10px;
`;
