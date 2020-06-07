import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';
import { authUser } from '../../../config/auth';
import { RESET } from '../../NewUser/constants';

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
         expiresIn,
      },
   };
};

export const logUserFailure = (error) => {
   return {
      type: LOGIN_FAILURE,
      payload: {
         error,
      },
   };
};

export const resetValues = () => {
   return { type: RESET};
};

export const authenticateUser = (username, password) => {
   return (dispatch) => {
      dispatch(logUser());
      authUser(username, password)
         .then((response) => {
            dispatch(logUserSuccess(response));
         })
         .catch((error) => dispatch(logUserFailure(error)));
   };
};
