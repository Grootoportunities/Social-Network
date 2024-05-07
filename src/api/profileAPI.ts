import axios from "axios";
import { ProfileType } from "../redux/reducers/profileReducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/profile/",
  withCredentials: true,
  headers: { "api-key": "0ec2bc57-903d-45af-82a6-939602d241d5" },
});

export const profileAPI = {
  getProfile: (userID: string) =>
    instance.get<ProfileType>(`${userID}`).then((res) => res.data),

  getStatus: (userID: string) =>
    instance.get<string>(`status/${userID}`).then((res) => res.data),

  updateStatus: (status: string) =>
    instance
      .put<UpdateStatusResponseType>("status", { status })
      .then((res) => res.data),
};

type UpdateStatusResponseType = {
  resultCode: number;
  messages: string[];
  data: {};
};
