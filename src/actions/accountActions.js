
import {
  GET_BALANCE_SNAPSHOT
} from './types';

export const getBalanceSnapshot = () => {
  const snapshot = {
    issued: 1000,
    forSale: 600,
    inCirculation: 200,
    redeemed: 100,
    available: 200,
  };

  console.log('getBalance called!');

  return {
    type: GET_BALANCE_SNAPSHOT,
    payload: snapshot
  }

}
