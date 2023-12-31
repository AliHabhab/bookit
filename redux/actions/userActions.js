import axios from "axios";
import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstants";

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/api/auth/register", userData, config);
    console.log("!!!!!!USER ACTIONS!!!!!!", data);

    dispatch({
      type: REGISTER_USER_SUCCESS,
    });
  } catch (error) {
    const errorMessage =
      typeof error === "string" ? error : "something went wrong";
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response?.data?.message ?? errorMessage,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
