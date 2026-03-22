import { createSlice } from '@reduxjs/toolkit';
import {
  fetchUser,
  // signOut,
} from '../thunks/auth';

const initialState = {
  authorizationError: null,
  isLoading: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.authorizationError = action.error;
    });
  },
});

export const authReducer = authSlice.reducer;
