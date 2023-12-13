import axios from "axios"
import { HOST, GET_PRODUCTS } from "../actionTypes"

export function getProducts(){
    return async function(dispatch){
        try {
            const response = (await axios.get(HOST+"/products")).data
            console.log(response);
            dispatch({
                type: GET_PRODUCTS,
                payload:response
            })
        } catch (error) {
            throw new Error(error)
        }
    }
}