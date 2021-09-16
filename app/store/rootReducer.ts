import { combineReducers } from 'redux';

import themeReducer from './theme/themeSlice';
import toastReducer from './toast/toastSlice';

const rootReducer = combineReducers({
  toast: toastReducer,
  appTheme: themeReducer,
});

export default rootReducer;
