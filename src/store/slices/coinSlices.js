import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiHost, apiKey, apiUri } from '../../data/apiUri';

export const getCoinsList = createAsyncThunk('coins', async () => {
  try {
    const { data } = await axios(apiUri, {
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
        'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
      },
    });
    return data.data.coins;
  } catch (error) {
    return error.message;
  }
});

export const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
  },
  reducers: {},
  extraReducers: {
    [getCoinsList.pending]: (state) => {
      state.loading = true;
      state.coins = [];
    },
    [getCoinsList.fulfilled]: (state, action) => {
      state.loading = false;
      state.coins = action.payload;
    },
    [getCoinsList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const getCoinById = createAsyncThunk('coin', async (id) => {
  try {
    const { data } = await axios.get(
      `https://coinranking1.p.rapidapi.com/coin/${id}`,
      {
        headers: {
          'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
          'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
        },
      }
    );
    return data.data.coin;
  } catch (error) {
    return error.message;
  }
});

export const coinByIdSlice = createSlice({
  name: 'coin',
  initialState: {
    coin: {},
  },
  reducers: {},
  extraReducers: {
    [getCoinById.pending]: (state) => {
      state.loading = true;
    },
    [getCoinById.fulfilled]: (state, action) => {
      state.loading = false;
      state.coin = action.payload;
    },
    [getCoinById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
