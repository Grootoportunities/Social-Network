import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/auth/",
  withCredentials: true,
  headers: { "api-key": "0ec2bc57-903d-45af-82a6-939602d241d5" },
});

export const authAPI = {
  me: () => instance.get<GetResponseType>("me").then((res) => res.data),
};

type GetResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: number;
  messages: string[];
};
