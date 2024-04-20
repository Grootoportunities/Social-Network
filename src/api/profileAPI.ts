import axios from "axios";
import { ProfileType } from "../redux/reducers/profileReducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/profile/",
  withCredentials: true,
  headers: { "api-key": "0ec2bc57-903d-45af-82a6-939602d241d5" },
});

export const profileAPI = {
  getProfile: (userID: string) =>
    instance
      .get<ProfileType>(
        `https://social-network.samuraijs.com/api/1.0/profile/${userID}`,
      )
      .then((res) => res.data),
};
