import { all } from 'redux-saga/effects';
// import { watchCreateNewPassSaga } from './account/forget/createNewPassSaga';
// import { watchSendOTPSaga } from './account/forget/sendOTPSaga';
// import { watchVerifyOTPSaga } from './account/forget/verifyOTPSaga';
// import { watchLoginSaga } from './account/loginSaga';
// import { watchSignupSaga } from './account/signupSaga';
// import { watchCreateWalletSaga } from './home/createWalletSaga';
// import { watchDeleteWalletSaga } from './home/deleteWalletSaga';
// import { watchGetWalletSaga } from './home/getWalletSaga';
// import { watchUpdateWalletSaga } from './home/updateWalletSaga';
import { watchLogin } from './LoginSaga';

export default function* rootSaga() {
   yield all([
      watchLogin()
      // watchLoginSaga(),
      // watchSignupSaga(),
      // watchCreateWalletSaga(),
      // watchGetWalletSaga(),
      // watchDeleteWalletSaga(),
      // watchUpdateWalletSaga(),
      // watchSendOTPSaga(),
      // watchVerifyOTPSaga(),
      // watchCreateNewPassSaga(),
   ]);
}
