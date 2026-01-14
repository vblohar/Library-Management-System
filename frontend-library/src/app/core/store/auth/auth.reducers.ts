import { createReducer, on } from "@ngrx/store";
import { AuthState } from "src/app/shared/models/auth-state.model";
import * as AuthActions from "src/app/core/store/auth/auth.actions"


export const initialState: AuthState = {
    user: null,
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    isLoading: false,
    isAuthenticated: false,
    error: null
};

export const authReducer = createReducer(
    initialState,

    on(AuthActions.login, state => ({
        ...state,
        isLoading: true,
        error: null
    })),

    on(AuthActions.loginSucess, (state, {user, accessToken, refreshToken}) => {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        return {
            ...state,
            user,
            accessToken,
            refreshToken,
            isLoading: false,
            isAuthenticated: true,
            error: null
        }
    }),

    on(AuthActions.loginFailure, (state, {error}) => {
        return {
            ...state,
            error: error,
            isLoading: false,
            isAuthenticated: false
        }
    })
)