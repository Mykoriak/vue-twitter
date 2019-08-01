export interface User {
  info?: {
    nickname: string;
    email: string;
    password: string;
    id: Number;
  } | null;
  loggedIn: Boolean;
}
