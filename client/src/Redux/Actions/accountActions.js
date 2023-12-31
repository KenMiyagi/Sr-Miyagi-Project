import { HOST, LOGIN, LOG_OUT, ERRORS} from "../actionTypes"
import {jwtDecode} from "jwt-decode";
import axios from "axios"

export function login(user){
    return async function(dispatch){
        try {
            const response = await axios.post(HOST+"/login",user)
            const {token} = response?.data
            localStorage.setItem("token",token)
            const decodedAccount = jwtDecode(token, {complete: true})
            localStorage.setItem("profilePicture",decodedAccount.profilePicture)
            localStorage.setItem("name",decodedAccount.name)
            localStorage.setItem("email",decodedAccount.email)
            localStorage.setItem("token",decodedAccount.number)
            dispatch({
                type:LOGIN,
                payload: decodedAccount
            })
            return {error:false}
        } catch (error) {
            console.log(error);
            dispatch({
                type:ERRORS,
                payload: { type: LOGIN, error: error?.response?.data }
            })
        }
    }
}

export const logOut = () => {
    localStorage.clear();
    return (dispatch) => {
      dispatch({ type: LOG_OUT });
    };
  };