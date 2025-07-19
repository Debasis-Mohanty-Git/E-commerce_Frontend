
import { Search } from "@mui/icons-material";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"
import { api } from "../../Config/apiConfig";

export const createOrder = (reqDate) => async (dispatch) => {

    dispatch({ type: CREATE_ORDER_REQUEST })

    try {
        const {data} =await api.post(
            `/api/orders/`,
            reqDate.address,
        );

        if(data.id){
           reqDate.navigate({search:`step=3&order_id=${data.id}`})
        }
        console.log("created order",data);
        dispatch({
          type:CREATE_ORDER_SUCCESS,
          payload:data,
        });
    } catch (error) {
      console.log("catch order",error);
        dispatch({
          type:CREATE_ORDER_FAILURE,
          payload:error.message,
        });
    }
};


export const getOrderById = (orderId) => async (dispatch) => {

    dispatch({ type: GET_ORDER_BY_ID_REQUEST })

    try {
        const {data,reqDate} =await api.post(
            `/api/orders/${orderId}`,
            reqDate.address,
        );

        if(data.id){
           reqDate.navigate({Search:`step=3&order_id=${data.id}`})
        }
        console.log("created order",data);
        dispatch({
          type:GET_ORDER_BY_ID_SUCCESS,
          payload:data,
        });
    } catch (error) {
      console.log("catch order",error);
        dispatch({
          type:GET_ORDER_BY_ID_FAILURE,
          payload:error.message,
        });
    }
};