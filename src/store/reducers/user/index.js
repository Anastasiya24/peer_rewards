import { createSlice } from '@reduxjs/toolkit';
import { getUser, editUser } from './service';

const initialState = {
  name: '',
};

export const user = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [getUser.fulfilled]: (state, action) => {
      state.name = action.payload?.name;
    },

    [editUser.fulfilled]: (state, action) => {
      state.name = action.payload?.name;
    },
  },
});

export default user.reducer;
