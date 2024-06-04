import { UserType } from "../redux/reducers/usersReducer";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "api-key": "a918545c-774f-48b4-a615-795c2cc7eda0" },
});

export const usersAPI = {
  getUsers: (page: number, count: number) =>
    instance
      .get<ResponseType>(`users?page=${page}&count=${count}`)
      .then((res) => res.data),
};

type ResponseType = {
  items: UserType[];
  totalCount: number;
  error: string | null;
};
