import { combineReducers } from 'redux';

import { getVendorSnapshot } from './accountsReducer';

export default combineReducers({
  vendorSnapshot : getVendorSnapshot
});
