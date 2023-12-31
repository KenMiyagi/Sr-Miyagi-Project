import{
    GET_PRODUCTS,
    PAGINATE,
    LOGIN,
    LOG_OUT,
    ERRORS,
    CLEAR_ERRORS
} from "./actionTypes"

const initialState = {
    products:[],

    //Pagination
    currentPage:1, productsPaginate:[],pages:[], filteredPaginate:[],

    //Account
    currentAccount:{},

    //Errors
    errors:{}
}

export default function rootReducer(state = initialState, action){
    const ITEMS_PER_PAGE = 5
    switch(action.type){
        case GET_PRODUCTS:
            const totalPagesGot = Math.ceil(action.payload.length / ITEMS_PER_PAGE)
            const pagesGot = [...Array(totalPagesGot + 1).keys()].slice(1);

            const indexOfLastPageGet = state.currentPage  * ITEMS_PER_PAGE;
            const indexOfFirstPageGet = indexOfLastPageGet - ITEMS_PER_PAGE;

            const productsRenderGot = action.payload.slice(indexOfFirstPageGet,indexOfLastPageGet)
            return{
                ...state,
                products:action.payload,
                filteredPaginate:action.payload,
                productsPaginate: productsRenderGot,
                pages: pagesGot,
                currentPage:1
            }
        case PAGINATE:
            var currentP
            if(isNaN(action.payload)){
                if(action.payload==="next"){
                    //CURRENT ++
                    if(state.currentPage !== state.pages.length){ currentP = state.currentPage+1}else{
                        return{...state}
                    }
                }else if(action.payload==="prev"){
                    //CURRENT --
                    if(state.currentPage !== 1){ currentP = state.currentPage-1}else{
                        return{...state}
                    }
                }
            }else{
                //SET CURRENT con payload
                 currentP = action.payload
            }
            const totalPages = Math.ceil(state.filteredPaginate.length / ITEMS_PER_PAGE)
            const pages = [...Array(totalPages + 1).keys()].slice(1);
            const indexOfLastPage = currentP  * ITEMS_PER_PAGE;
            const indexOfFirstPage = indexOfLastPage - ITEMS_PER_PAGE;
            const productsRender = state.filteredPaginate.slice(indexOfFirstPage,indexOfLastPage)
            return {
                ...state,
                currentPage: currentP,
                productsPaginate: productsRender,
                pages:pages
            }
        //Account
        case LOGIN:
            console.log("REDUCER LOGIN PAYLOAD", action.payload);
            return {
              ...state,
              currentAccount: action.payload,
              errors: {},
            };
        case LOG_OUT:
            return {
                ...state,
                currentAccount: {},
            };
        //Errors
        case ERRORS:
            const errObj = action.payload;
            return {
                ...state,
                errors: { ...state.errors, [errObj.type]: errObj.error },
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                errors: {},
            };
        default:
            return { ...state };
    }
}