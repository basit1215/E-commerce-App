import { productType } from "../actions/ActionTypes"


const initialValue = {
    allProducts: [],
    cart:[],
}

export const ProductReducer = (state=initialValue,{type,payload}) => {
    switch(type){
        case productType.ALL_PRODUCTS:
            return {...state,allProducts:payload}

            case productType.ADD_CART_PRODUCT:
                const isAvailable = state.cart.find((item) => item.id === payload.id); 
                if (isAvailable) {
                    return { ...state };
                }
                return {...state,cart:[...state.cart,payload]}
            case productType.REMOVE_CART_PRODUCT:
                return {...state,cart:[...state.cart.filter((item)=>item.id !== payload.id)]}
            default:
                return state
    }
}
