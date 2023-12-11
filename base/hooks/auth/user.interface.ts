import { CookieValueTypes } from "cookies-next";

export interface IUser {
  id: string | number;
  fullname: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
export interface IAuth {
  [x: string]: any;
  authToken: string | undefined;
  setAuthToken: (token: IAuth["authToken"], expiration?: number) => void;

  user: Partial<IUser> | undefined;
  users: (Partial<IUser> | undefined)[];
  setUser: (user: IAuth["user"], expiration?: number) => void;
  setUsers: (user: IAuth["user"], expiration?: number) => void;

  logOut: () => void;

  userEmail: CookieValueTypes;
  setUserEmail: (userEmail: string) => void;
}
