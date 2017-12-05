
export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILED = '[Auth] Login Failed',
  LOGOUT = '[Auth] Logout',
  LOGOUT_SUCCESS = '[Auth] Logout Success',
  LOGOUT_FAILED = '[Auth] Logout Failed',
  SET_AUTHENTICATED = '[Auth] Set Authenticated',
  SET_NOT_AUTHENTICATED = '[Auth] Set Not Authenticated',
}

export interface Login {
  type: AuthActionTypes.LOGIN;
  payload: {email: string, password: string};
}

export interface LoginSuccess {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: {};
}

export interface LoginFailed {
  type: AuthActionTypes.LOGIN_FAILED;
  payload: string;
}

export interface Logout {
  type: AuthActionTypes.LOGOUT;
  payload: {};
}

export interface LogoutSuccess {
  type: AuthActionTypes.LOGOUT_SUCCESS;
  payload: {};
}

export interface LogoutFailed {
  type: AuthActionTypes.LOGOUT_FAILED;
  payload: string;
}

export interface SetAuthenticated {
  type: AuthActionTypes.SET_AUTHENTICATED;
  payload: {};
}

export interface SetNotAuthenticated {
  type: AuthActionTypes.SET_NOT_AUTHENTICATED;
  payload: {};
}


export type AuthAction =
  | Login
  | LoginSuccess
  | LoginFailed
  | Logout
  | LogoutSuccess
  | LogoutFailed
  | SetAuthenticated
  | SetNotAuthenticated;
