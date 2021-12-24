import { configureStore } from '@reduxjs/toolkit';
import { coinByIdSlice, coinsSlice } from './slices/coinSlices';

const store = configureStore({
  reducer: {
    coinsList: coinsSlice.reducer,
    coinById: coinByIdSlice.reducer,
  },
});

export default store;
