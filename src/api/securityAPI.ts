import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/security/",
  withCredentials: true,
  headers: { "api-key": "a918545c-774f-48b4-a615-795c2cc7eda0" },
});

export const securityAPI = {
  getCaptcha: () =>
    instance.get<{ url: string }>("get-captcha-url").then((res) => res.data),
};
