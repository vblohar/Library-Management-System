import { createAction, props } from "@ngrx/store";
import { LoginRequest, User } from "../../models/user.model";
import { selectAuthState } from "./auth.selectors";


export const login = createAction(
    '[Auth] Login',
    props<{credintials: LoginRequest}>()
);

export const loginSucess = createAction(
    '[Auth] Login Success',
    props<{user: User; accessToken: string; refreshToken: string}>()
);

export const logout = createAction(
    '[Auth] Logout',
);

export const loginFailure = createAction(
    '[Auth] Login failure',
    props<{error: string}>() 
);