import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';
import { RESET } from '../../NewUser/constants';

const initialState = {
   email: '',
   password: '',
   error: '',
   access_token: '',
   expiresIn: '',
   idToken: '',
   accessToken: '',
   loading: false,
   error: false,
};

export default loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN:
         return {
            ...state,
            loading: true,
         };
      case LOGIN_SUCCESS:
         const { idToken, accessToken, expiresIn } = action.payload;
         return {
            ...state,
            idToken,
            accessToken,
            expiresIn,
            loading: false,
         };
      case LOGIN_FAILURE:
         const { error } = action.payload;
         console.log('error', error);
         return {
            ...state,
            loading: false,
            error: true,
         };
      case RESET:
         return {
            ...state,
            ...initialState,
         };
      default:
         return state;
   }
};
