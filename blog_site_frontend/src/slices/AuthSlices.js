import { createSlice } from '@reduxjs/toolkit';

const AuthSlices = createSlice({
  name: 'auth',
  initialState: {
    loggedInValue: false,
  },
  reducers: {
    isAuth: (state) => {
      state.loggedInValue = !!state.loggedInValue;
    },
  },
});

export const { isAuth } = AuthSlices.actions;
export default AuthSlices.reducer;
