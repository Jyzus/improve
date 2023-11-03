import { create } from "zustand";
import { Actions, State } from ".";

export const useAuthStore = create<State & Actions>((set) => ({
  status: "not logged",
  username: null,
  email: null,
  avatar: null,
  uid: null,
  login: (username, email, avatar, uid) =>
    set({
      status: "logged",
      username: username,
      email: email,
      avatar: avatar,
      uid: uid,
    }),
  logout: () =>
    set({
      status: "not logged",
      username: null,
      email: null,
      avatar: null,
      uid: null,
    }),
  startAsAnonymous: (username) =>
    set((state) => ({ ...state, status: "anonymous", username: username })),
  checking: () => set((state) => ({ ...state, status: "checking" })),
}));
