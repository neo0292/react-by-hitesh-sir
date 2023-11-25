import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'false',
  userData: null,
};

const authSlice = createSlice({
  name : 'auth',
  initialState,
  reducers: {
    login : (state, action) => {
        state.status = 'true';
        userData = action.payloadload
    },
    logout : (state) => {
      state.status = 'false';
      state.userData = null;
    },
  }
});

export const {login, logout} = authSlice.actions; // login & logout are actions in reducers

export default authSlice.reducer