import axios from "axios"
import { API_BASE_URL } from "../../Config/apiConfig.js"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";


const registerRequest=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user)=>({type:REGISTER_SUCCESS,payload:user});
const registerFailure=()=>({type:REGISTER_FAILURE});

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());

  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;

    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt); // ✅ store the jwt
    }

    dispatch(registerSuccess()); // ✅ don't pass user here
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};



const loginRequest=()=>({type:LOGIN_REQUEST});
const loginrSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure=()=>({type:LOGIN_FAILURE});

export const login=(userDate)=>async(dispatch)=>
{

  dispatch(loginRequest());

    try { 
        const responce=await axios.post(`${API_BASE_URL}/auth/signin`,userDate);
        const user=responce.data;

        if(user.jwt){
            localStorage.setItem("jwt",user.jwt);
        }
        console.log("user",user)
       dispatch(loginrSuccess(user));

        
    } catch (error) {
        dispatch(loginFailure(error.message));
    }

}


const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure=()=>({type:GET_USER_FAILURE});

export const fetchUserProfile = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());

  try {
    const response = await axios.get(`${API_BASE_URL}/api/user/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};


export const logout=()=>(dispatch)=>{

    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
} 



