import React, { useEffect, useState } from 'react';
import StoreContext from './store-context';

const StoreProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  const getPlans = (
    id,
    name,
    boughtPrice,
    sellPrice,
    boughtDate,
    sellDate,
    profitLoss,
    targetPrice,
    whatDidWrong
  ) => {
    setPlans([
      ...plans,
      {
        id,
        name,
        boughtPrice,
        sellPrice,
        boughtDate,
        sellDate,
        targetPrice,
        profitLoss,
        whatDidWrong,
      },
    ]);
  };

  const deletePlan = (plan) => {
    setPlans(plans.filter((p) => p.id !== plan.id));
  };

  useEffect(() => {
    const storage = localStorage.getItem('crypto-table');
    if (storage != null) setPlans(JSON.parse(storage));
  }, []);

  useEffect(() => {
    localStorage.setItem('crypto-table', JSON.stringify(plans));
  }, [plans]);

  const values = {
    plans,
    getPlans,
    deletePlan,
  };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
