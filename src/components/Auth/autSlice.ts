import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../app/store';

interface AuthorizationState {
    loggedIn: boolean,
    googleToken: any,
};

const initialState: AuthorizationState = {
    loggedIn: false,
    googleToken: '',
};

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload;
        },
        setGoogleToken: (state, action: PayloadAction<any>) => {
            state.googleToken = action.payload;
        },

    },
});

export const authorice = (log:boolean, token:any) => async (dispatch: AppDispatch) => {
    dispatch(setGoogleToken(token));
    dispatch(setLoggedIn(log));
}

export const { setLoggedIn, setGoogleToken } = authorizationSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.authorization.loggedIn;
export const selectGoogleToken = (state: RootState) => state.authorization.googleToken;

export default authorizationSlice.reducer;