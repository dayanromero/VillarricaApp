import {
   CREATE_USER,
   CREATE_USER_SUCCESS,
   CREATE_USER_FAILURE,
   RESET,
   EDIT_USER,
   EDIT_USER_SUCCESS,
   EDIT_USER_FAILURE
} from '../constants';

const initialState = {
   data: null,
   loading: false,
   error: false,
   registro: false,
};

export const createUserReducer = (state = initialState, action) => {
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

export const editUserReducer = (state = initialState, action) => {
   switch (action.type) {
      case EDIT_USER:
         return {
            ...state,
            data: null,
            loading: true,
         };
      case EDIT_USER_SUCCESS:
         return {
            ...state,
            data: action.payload.data,
            loading: false,
            registro: true,
         };
      case EDIT_USER_FAILURE:
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
            registro: false,
         };
      default:
         return state;
   }
};