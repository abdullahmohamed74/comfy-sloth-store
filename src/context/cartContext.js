import { createContext, useEffect, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';
import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from '../utils/actions';

const CartContext = createContext();

function getLocalStorage() {
  return JSON.parse(localStorage.getItem('cart'));
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: getLocalStorage() || [],
    total_items: 0,
    total_price: 0,
    shipping_fee: 534,
  });

  // every time cart state change save it to local storage
  // and calculate the cart totals
  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  // add product to the cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  // remove one item from the cart
  const removeCartItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id } });
  };

  // increase or decrease the number of items in the cart
  const toggleAmount = (id, caseValue) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, caseValue } });
  };

  // remove all items from the cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, clearCart, removeCartItem, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
export default CartContext;
