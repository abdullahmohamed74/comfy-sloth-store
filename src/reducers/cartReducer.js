import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  COUNT_CART_TOTALS,
} from '../utils/actions';

function cartReducer(state, action) {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    // check if the item with the same color is already existing in the cart
    const tempItem = state.cart.find((item) => item.id === id + color);

    // if the item with the same color is already existing in the cart
    // only incease its amount with the new amount but not exceed the max amount in the stock
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          const newAmount =
            cartItem.amount + amount > cartItem.max
              ? cartItem.max
              : cartItem.amount + amount;

          return { ...cartItem, amount: newAmount };
        }

        return cartItem;
      });

      return { ...state, cart: tempCart };
    }
    // if the item with the same color is NOT existing in the cart
    // add new item to the cart
    if (!tempItem) {
      const newItem = {
        id: id + color,
        color,
        amount,
        name: product.name,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };

      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const updatedCart = state.cart.filter(
      (item) => item.id !== action.payload.id
    );

    return { ...state, cart: updatedCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, caseValue } = action.payload;

    const updatedCart = state.cart.map((item) => {
      if (item.id === id) {
        let newAmount;
        if (caseValue === 'inc') {
          newAmount = item.amount + 1 > item.max ? item.max : item.amount + 1;
        }
        if (caseValue === 'dec') {
          newAmount = item.amount - 1 === 0 ? 1 : item.amount - 1;
        }

        return { ...item, amount: newAmount };
      }

      return item;
    });

    return { ...state, cart: updatedCart };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_items, total_price } = state.cart.reduce(
      (acc, cartItem) => {
        const { price, amount } = cartItem;
        return {
          total_items: acc.total_items + amount,
          total_price: acc.total_price + price * amount,
        };
      },
      {
        total_items: 0,
        total_price: 0,
      }
    );

    return { ...state, total_items, total_price };
  }

  throw new Error(`NO matching "${action.type} - action type"`);
}
export default cartReducer;
