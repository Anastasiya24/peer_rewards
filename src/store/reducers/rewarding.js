import { createSlice } from '@reduxjs/toolkit';
import { get, remove, set } from 'services/localStorage';

const initialState = {
  list: [],
};

export const rewarding = createSlice({
  name: 'rewarding',
  initialState,
  reducers: {
    loadRewarding: (state) => {
      const rewarding = get('rewarding');
      state.list = JSON.parse(rewarding) || [];
    },

    addRewarding: (state, action) => {
      const rewarding = Array.from(state.list);
      rewarding.push(action.payload);

      if (get('rewarding')) remove('rewarding');
      set('rewarding', JSON.stringify(rewarding));

      state.list = rewarding;
    },
  },
});

export const { loadRewarding, addRewarding } = rewarding.actions;

export default rewarding.reducer;
