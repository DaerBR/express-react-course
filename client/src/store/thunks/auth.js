import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../../api/apiRequest';

export const fetchUser = createAsyncThunk('auth/fetchUser', async (_, { rejectWithValue }) => {
  try {
    const response = await apiRequest.request({
      url: `/api/current_user`,
      method: 'get',
    });

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
