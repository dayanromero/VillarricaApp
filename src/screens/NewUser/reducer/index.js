import {
   CREATE_USER,
   CREATE_USER_SUCCESS,
   CREATE_USER_FAILURE,
   RESET
} from '../constants';

const initialState = {
   data: null,
   loading: false,
   error: false,
   registro: false,
};

export default createUserReducer = (state = initialState, action) => {
   switch (action.type) {
      case CREATE_USER:
         return {
            ...state,
            data: null,
            loading: true,
         };
      case CREATE_USER_SUCCESS:
         return {
            ...state,
            data: action.payload.data,
            loading: false,
            registro: true,
         };
      case CREATE_USER_FAILURE:
         return {
            ...state,
            loading: false,
            error: true,
         };
      case RESET:
         return {
            ...state,
            error: false,
            loading: false,
         };
      default:
         return state;
   }
};
