import axios from "axios";
import { GET_PROFILE, PROFILE_ERROR } from "./types";
//
import { setAlert } from "./alert";

// Get current users profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/profile/me");
    console.log("res", res);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err, "err");
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response, status: err.response.status },
    });
  }
};
