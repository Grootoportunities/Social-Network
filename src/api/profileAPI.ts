import axios from "axios";
import {
  ProfilePhotosType,
  ProfileType,
} from "../redux/reducers/profileReducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/profile/",
  withCredentials: true,
  headers: { "api-key": "a918545c-774f-48b4-a615-795c2cc7eda0" },
});

export const profileAPI = {
  getProfile: (userID: number) =>
    instance.get<ProfileType>(`${userID}`).then((res) => res.data),

  getStatus: (userID: number) =>
    instance.get<string>(`status/${userID}`).then((res) => res.data),

  updateStatus: (status: string) =>
    instance.put<ResponseType>("status", { status }).then((res) => res.data),

  updateProfilePhoto: (photo: File) => {
    const formData = new FormData();
    formData.append("image", photo);
    return instance
      .put<ResponseType<ProfilePhotosType>>("photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
};

type ResponseType<T = {}> = {
  resultCode: number;
  messages: string[];
  data: T;
};
