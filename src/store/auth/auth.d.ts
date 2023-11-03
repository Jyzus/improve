export type State = {
  status: "logged" | "not logged" | "anonymous" | "checking";
  username: string | null;
  email: string | null;
  avatar: string | null;
  uid: string | null;
};

export type Actions = {
  login: (
    status: string,
    username: State["username"],
    email: State["email"],
    avatar: State["avatar"],
    uid: State["uid"]
  ) => void;
  logout: () => void;
  startAsAnonymous: (username: State["username"]) => void;
  checking: () => void;
};
