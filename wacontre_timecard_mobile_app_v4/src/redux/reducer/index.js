import { combineReducers } from 'redux';
import loginReducer from './LoginReducer';



const allReducers = combineReducers({
   loginReducer
   // loginReducer,
   // signupReducer,
   // createWalletReducer,
   // getWalletReducer,
   // deleteWalletReducer,
   // updateWalletReducer,
   // sendOTPReducer,
   // verifyOTPReducer,
   // createNewPassReducer,
});

export default allReducers;
