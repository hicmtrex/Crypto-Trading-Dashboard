import { createContext } from 'react';

const StoreContext = createContext({
  plans: [],
  coins: [],
  coin: {},
  error: null,
  loading: false,
  getPlans: () => {},
  deletedPlan: (plan) => {},
  getAllCoins: () => {},
  getCoinById: (id) => {},
});

export default StoreContext;
