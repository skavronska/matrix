import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import React from 'react';

import { IState, IUserData } from '../../types';

const initialState: IState = {
  isLoading: false,
  mainString: [],
  userData: {
    name: '',
    birth: '',
  },
};

export const storeSlice = createSlice({
  name: 'myStore',
  initialState,
  reducers: {
    fetchingStart(state) {
      state.isLoading = true;
    },
    fetchingEnd(state) {
      state.isLoading = false;
    },
    resetUserData(state) {
      state.userData = {
        name: '',
        birth: '',
      };
    },
    setUserData(state, action: PayloadAction<string[]>) {
      state.userData = {
        name: action.payload[0],
        birth: action.payload[1].split('-').reverse().join('.'),
      };
      state.mainString = action.payload[1].split('-').reverse().join('').split('');
    },
  },
});

export default storeSlice.reducer;
