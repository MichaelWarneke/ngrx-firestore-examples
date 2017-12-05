import {Auth} from './auth.interfaces';
import {AuthAction, AuthActionTypes} from './auth.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export function authReducer(state: Auth, action: AuthAction): Auth {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        error: null
      };
    }
    case AuthActionTypes.LOGIN_SUCCESS:
    case AuthActionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        error: null
      };
    }
    case AuthActionTypes.LOGIN_FAILED:
    case AuthActionTypes.LOGOUT_FAILED: {
      return {
        ...state,
        error: action.payload
      };
    }

    case AuthActionTypes.SET_AUTHENTICATED: {
      return {
        ...state,
        authenticated: true
      }
    }

    case AuthActionTypes.SET_NOT_AUTHENTICATED: {
      return {
        ...state,
        authenticated: false
      }
    }
    default: {
      return state;
    }
  }
}

export const selectAuthState = createFeatureSelector<Auth>('auth');

export const getIsAuthenticated = createSelector(selectAuthState, (state: Auth) => state.authenticated);

export const getError = createSelector(selectAuthState, (state: Auth) => state.error);