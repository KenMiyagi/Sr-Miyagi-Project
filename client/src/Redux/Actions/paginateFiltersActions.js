import { HOST, PAGINATE } from "../actionTypes"

export function paginate(x){
    return async function(dispatch){
        dispatch({
            type:PAGINATE,
            payload: x
        })
    }
}