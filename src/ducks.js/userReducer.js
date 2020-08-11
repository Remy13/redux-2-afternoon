import axios from "axios";

const initialState = {
    email: null,
    firstname: null,
    LastName: null
};

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

var userReducer = (state=initialState, action) =>{
    return(state);
 }
 export default function reducer(state = initialState, action) {
     switch (action.type) {
         case REQUEST_USER_DATA + '_FULFILLED':
             const {email, firstName, lastname } = action.payload.user
             return { email, firstName, lastname };
            default:
                return state;
     }
 }