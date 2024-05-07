import { v1 } from "uuid";
import { profileAPI } from "../../api/profileAPI";
import { AppThunksType } from "../redux-store";

const initialState: ProfilePageType = {
  posts: [
    {
      id: v1(),
      postMessage: "You are seeing this page in the final result",
      likes: 15,
    },
    {
      id: v1(),
      postMessage: "Hello, i'm developing this social network right now",
      likes: 20,
    },
  ],
  postValue: "",
  profile: null,
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileActionsType,
): ProfilePageType => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost: PostType = {
        id: v1(),
        postMessage: state.postValue,
        likes: 0,
      };

      return { ...state, posts: [newPost, ...state.posts], postValue: "" };
    }
    case "SET-POST-VALUE":
      return { ...state, postValue: action.value };
    case "SET-USER-PROFILE":
      return { ...state, profile: { ...action.profile, status: "" } };
    case "PROFILE/SET-PROFILE-STATUS": {
      return {
        ...state,
        // @ts-ignore
        //TODO: Разобраться с типом
        profile: { ...state.profile, status: action.status },
      };
    }
    default:
      return state;
  }
};

export const addPostAC = () => ({ type: "ADD-POST" }) as const;
export const setPostValueAC = (value: string) =>
  ({
    type: "SET-POST-VALUE",
    value,
  }) as const;
export const setUserProfilePageAC = (profile: ProfileType) =>
  ({ type: "SET-USER-PROFILE", profile }) as const;
export const setProfileStatusAC = (status: string) =>
  ({
    type: "PROFILE/SET-PROFILE-STATUS",
    status,
  }) as const;

//THUNKS

export const fetchProfilePageTC =
  (userID: string): AppThunksType =>
  (dispatch) =>
    profileAPI.getProfile(userID).then((data) => {
      dispatch(setUserProfilePageAC(data));
      profileAPI
        .getStatus(userID)
        .then((data) => dispatch(setProfileStatusAC(data)));
    });

export const updateProfileStatusTC =
  (status: string): AppThunksType =>
  (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) dispatch(setProfileStatusAC(status));
    });
  };

// TYPES

export type PostType = { id: string; postMessage: string; likes: number };

type ProfileContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type ProfilePhotosType = {
  small: string | undefined;
  large: string | undefined;
};
export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ProfileContactsType;
  photos: ProfilePhotosType;
};

export type ProfileDomainType = { status: string } & ProfileType;

export type ProfilePageType = {
  posts: PostType[];
  postValue: string;
  profile: ProfileDomainType | null;
};

export type AddPostAT = {
  type: "ADD-POST";
};
export type SetPostValueAT = { type: "SET-POST-VALUE"; value: string };

export type ProfileActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof setPostValueAC>
  | ReturnType<typeof setUserProfilePageAC>
  | ReturnType<typeof setProfileStatusAC>;
