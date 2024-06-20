import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/auth/",
  withCredentials: true,
  headers: { "api-key": "a918545c-774f-48b4-a615-795c2cc7eda0" },
});

export const authAPI = {
  me: () =>
    instance.get<ResponseType<GetDataResponse>>("me").then((res) => res.data),
  login: (data: LoginData) =>
    instance
      .post<ResponseType<{ userId: number }>>("login", data)
      .then((res) => res.data),
  logout: () => instance.delete<ResponseType>("login").then((res) => res.data),
};

export type LoginData = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type GetDataResponse = {
  id: number;
  email: string;
  login: string;
};

type ResponseType<T = {}> = {
  data: T;
  resultCode: number;
  messages: string[];
};
