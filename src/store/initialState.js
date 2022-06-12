import { fetchUser, fetchCart } from "utils/fetchLocalStorageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  foodList: null,
  isCartOpen: false,
  cartItems: cartInfo,
};
