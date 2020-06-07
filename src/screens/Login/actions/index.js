import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

import { authUser } from '../../../config/auth';

export const logUser = () => {
   return {
      type: LOGIN,
   };
};

export const logUserSuccess = (response) => {
   const { idToken, accessToken, expiresIn } = response;
   return {
      type: LOGIN_SUCCESS,
      payload: {
         accessToken,
         idToken,
         expiresIn
      },
   };
};

export const logUserFailure = (data) => {
   return { type: LOGIN_FAILURE };
};

export const authenticateUser = (username, password) => {
   return (dispatch) => {
      dispatch(logUser());
      authUser(username, password)
         .then((response) => {
            dispatch(logUserSuccess(response));
         })
         .catch((error) => console.log('error', error));
   };
};
