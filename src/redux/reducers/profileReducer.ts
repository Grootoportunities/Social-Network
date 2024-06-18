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
  profile: {} as ProfileDomainType,
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ProfileActionsType,
): ProfilePageType => {
  switch (action.type) {
    case "profile/ADD-POST": {
      const newPost: PostType = {
        id: v1(),
        postMessage: action.postValue,
        likes: 0,
      };

      return { ...state, posts: [newPost, ...state.posts] };
    }
    case "profile/SET-USER-PROFILE":
      return { ...state, profile: { ...action.profile, status: "" } };
    case "profile/SET-PROFILE-STATUS":
      return {
        ...state,
        profile: { ...state.profile, status: action.status },
      };
    case "profile/DELETE-POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postID),
      };
    case "profile/UPDATE_PROFILE_PHOTO":
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    case "profile/SET_PROFILE_PHOTO_ENTITY_STATUS":
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: { ...state.profile.photos, entityStatus: action.isLoading },
        },
      };
    default:
      return state;
  }
};

export const addPostAC = (postValue: string) =>
  ({ type: "profile/ADD-POST", postValue }) as const;
export const setUserProfilePageAC = (profile: ProfileType) =>
  ({ type: "profile/SET-USER-PROFILE", profile }) as const;
export const setProfileStatusAC = (status: string) =>
  ({
    type: "profile/SET-PROFILE-STATUS",
    status,
  }) as const;
export const deletePostAC = (postID: string) =>
  ({
    type: "profile/DELETE-POST",
    postID,
  }) as const;
export const updateProfilePhotoAC = (photos: ProfilePhotosType) =>
  ({
    type: "profile/UPDATE_PROFILE_PHOTO",
    photos,
  }) as const;
export const setProfilePhotoEntityStatus = (isLoading: boolean) =>
  ({
    type: "profile/SET_PROFILE_PHOTO_ENTITY_STATUS",
    isLoading,
  }) as const;

//THUNKS

export const fetchProfilePageTC =
  (userID: number): AppThunksType =>
  async (dispatch) => {
    const data = await profileAPI.getProfile(userID);
    dispatch(setUserProfilePageAC(data));
    const res = await profileAPI.getStatus(userID);
    dispatch(setProfileStatusAC(res));
  };

export const updateProfileStatusTC =
  (status: string): AppThunksType =>
  async (dispatch) => {
    const data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) dispatch(setProfileStatusAC(status));
  };

export const updateProfilePhoto =
  (photo: File): AppThunksType =>
  async (dispatch) => {
    dispatch(setProfilePhotoEntityStatus(true));
    try {
      const data = await profileAPI.updateProfilePhoto(photo);
      if (data.resultCode === 0) dispatch(updateProfilePhotoAC(data.data));
    } finally {
      dispatch(setProfilePhotoEntityStatus(false));
    }
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

export type ProfilePhotosType = {
  small: string | undefined;
  large: string | undefined;
  entityStatus: boolean;
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
  profile: ProfileDomainType;
};

export type ProfileActionsType =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof setUserProfilePageAC>
  | ReturnType<typeof setProfileStatusAC>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof updateProfilePhotoAC>
  | ReturnType<typeof setProfilePhotoEntityStatus>;
