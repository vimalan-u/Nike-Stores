import axios from "axios";
import { setToast } from "../utils/extraFunctions";

export const initialState = {
  loading: false,
  data: [],
  error: false,
};

const addtocart = async (state, action) => {
  const { operation, data, token, toast, navigate } = action.payload;
  console.log(operation, data, token);

  try {
    // Set loading to true before making the request
    const newState = { ...state, loading: true };

    let res = await axios.post(
      "/cart/addtocart",
      {
        operation: operation,
        data: data,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("response", res);
    setToast(
      toast,
      res.data.messages ? res.data.messages : "Something Went Worng!",
      "success"
    );
    navigate("/cart");
    // Update state with new data and reset loading to false
    return { ...newState, loading: false, data: res.data };
  } catch (error) {
    console.log("error", error);
    // Update state to indicate error and reset loading to false
    return { ...state, loading: false, error: true };
  }
};

const getFromCart = async (state, action) => {
  const { token } = action.payload;
  console.log("token", token);
  try {
    let res = await axios.get("/cart/getcart", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    return { ...state, data: res.data.products, loading: false, error: false };
  } catch (error) {
    console.log("error", error);
    return { ...state, loading: false, error: true };
  }
};

export default function cartReducer(state, action) {
  switch (action.type) {
    case "addToCart":
      return addtocart(state, action);
    case "getFromCart":
      return getFromCart(state, action);
    default:
      return state;
  }
}
