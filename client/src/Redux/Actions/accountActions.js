import { HOST, LOGIN, LOG_OUT, ERRORS} from "../actionTypes"
import * as jwt_decode from "jwt-decode";
import axios from "axios"

export function login(user){
    return async function(dispatch){
        try {
            console.log("LOG: ",HOST+"/login");
            const {token} = (await axios.post(HOST+"/login",user)).data
            localStorage.setItem("token",token)
            const decodedAccount = jwt_decode(token)
            dispatch({
                type:LOGIN,
                payload: decodedAccount
            })
            return {error:false}
        } catch (error) {
            dispatch({
                type:ERRORS,
                payload: { type: LOGIN, error: error.response.data }
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