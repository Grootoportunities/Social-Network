import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/follow/",
  withCredentials: true,
  headers: { "api-key": "a918545c-774f-48b4-a615-795c2cc7eda0" },
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
