import {
  GET_BALANCE_SNAPSHOT
} from '../actions/types';

const INITIAL_SNAPSHOT = {
  issued: 0,
  forSale: 0,
  inCirculation: 0,
  redeemed: 0,
  available: 0,
};

export const getVendorSnapshot = (state = INITIAL_SNAPSHOT, action) => {

  switch (action.type) {
    case GET_BALANCE_SNAPSHOT:
      return action.payload;

    default:
     return state;
  }
}
