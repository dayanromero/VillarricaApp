import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants';

const initialState = {
   email: '',
   password: '',
   error: '',
   loading: false,
   error: false,
   access_token: '',
   expiresIn: '',
   idToken: '',
   accessToken: '',
};

export default loginReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN:
         return {
            ...state,
            data: [],
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
         return {
            ...state,
            loading: false,
            error: true,
         };
      default:
         return state;
   }
};
