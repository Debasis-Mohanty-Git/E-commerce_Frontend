import { api } from "../../Config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


export const gatCart = () => async (dispatch) => {

    dispatch({ type: GET_CART_REQUEST})
    try {
        const { data } = await api.get(`/api/cart/`) 
        dispatch({ type: GET_CART_SUCCESS, payload: data })
        console.log("data",data);
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })
    }
}


export const addItemToCart = (reqDate) => async (dispatch) => {

    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
    try {
        const { data } = await api.post(`/api/cart/add`, reqDate);
        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
        console.log("add item to cart ",data)
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

export const removeCartItem = (cartItemId) => async (dispatch) => {

    dispatch({ type: REMOVE_CART_ITEM_REQUEST })
    try {
        const { data } = await api.delete(`/api/cart_items/remove/${cartItemId}`)
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId})
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}

export const updateCartItem = (cartItemId, quantity) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST });

    try {
        const { data } = await api.put(`/api/cart_items/update/${cartItemId}`, {
            quantity: quantity
        });

        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: UPDATE_CART_ITEM_FAILURE,
            payload: error.response?.data?.message || error.message
        });
    }
};
