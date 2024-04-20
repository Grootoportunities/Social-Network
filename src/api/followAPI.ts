import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/follow/",
  withCredentials: true,
  headers: { "api-key": "0ec2bc57-903d-45af-82a6-939602d241d5" },
});

export const followAPI = {
  getFollow: (userID: number) =>
    instance.get<boolean>(`${userID}`).then((res) => res.data),

  deleteFollow: (userID: number) =>
    instance.delete<ResponseType>(`${userID}`).then((res) => res.data),

  createFollow: (userID: number) =>
    instance.post<ResponseType>(`${userID}`).then((res) => res.data),
};

type ResponseType = {
  resultCode: number;
  messages: string[];
  data: {};
};
