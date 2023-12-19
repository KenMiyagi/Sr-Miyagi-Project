import { HOST, LOGIN, LOG_OUT, ERRORS} from "../actionTypes"
import { jwt } from "jsonwebtoken"

export function login(user){
    return async function(dispatch){
        try {
            const {token} = (await axios.post(HOST,"/login",user)).data
            localStorage.setItem("token",token)
            const decodedAccount = jwt.decode(token)
            dispatch({
                type:LOGIN,
                payload: decodedAccount
            })
        } catch (error) {
            dispatch({
                type:ERRORS,
                payload: x
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