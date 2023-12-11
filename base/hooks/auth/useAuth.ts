import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { create } from "zustand";
import { IAuth } from "./user.interface";

export const useAuth = create<IAuth>((set) => ({
  get authToken() {
    const token = getCookie("authToken");
    return token;
  },

  setAuthToken: (token: IAuth["authToken"], expiration?: number) => {
    const date = getExpirationTime(expiration);
    setCookie("authToken", token, {
      expires: date,
    });

    return set(() => ({ authToken: token }));
  },

  get user() {
    const cookieUser = getCookie("user");

    const user = cookieUser ? JSON.parse(cookieUser) : undefined;

    return user;
  },

  setUser: (user: IAuth["user"], expiration?: number) => {
    const date = getExpirationTime(expiration);

    const cookieUser = JSON.stringify(user);
    setCookie("user", cookieUser, { expires: date });
    return set(() => ({ user }));
  },

  setUsers: (user: IAuth["user"], expiration?: number) => {
    const date = getExpirationTime(expiration);
    const oldUsersCookie = getCookie("users");
    let oldUsers: any[] = [];

    if (oldUsersCookie) {
      oldUsers = JSON.parse(oldUsersCookie);
      oldUsers.push(user);
    }
    const cookieUsers = JSON.stringify(oldUsers);
    setCookie("users", cookieUsers, { expires: date });
    return set(() => ({ users: oldUsers }));
  },

  logOut: () => {
    deleteCookie("user");
    deleteCookie("authToken");

    set(() => ({ authToken: undefined, user: undefined }));
    window.location.pathname = "/";
  },

  get userEmail() {
    const email = getCookie("user_email");
    return email;
  },
  //
  setUserEmail(userEmail) {
    setCookie("user_email", userEmail);

    return set(() => ({ userEmail }));
  },
  get users() {
    const cookieUser = getCookie("users");

    const users = cookieUser ? JSON.parse(cookieUser) : undefined;

    return users ?? [];
  },
}));

function getExpirationTime(milliseconds?: number) {
  const EIGHT_HOURS_IN_MILLISECONDS = 2800000000000;

  const date = new Date(EIGHT_HOURS_IN_MILLISECONDS);

  return date;
}
