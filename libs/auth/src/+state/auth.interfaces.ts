export interface Auth {
  // define state here
  authenticated: boolean;
  error: string | null;
}

export interface AuthState {
  readonly auth: Auth;
}
