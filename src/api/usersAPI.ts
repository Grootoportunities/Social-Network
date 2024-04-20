import { UserType } from "../redux/reducers/usersReducer";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "api-key": "0ec2bc57-903d-45af-82a6-939602d241d5" },
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
