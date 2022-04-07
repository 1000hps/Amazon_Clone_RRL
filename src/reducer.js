export const initialState = {
  cart: [],
  user: null,
};

// Given the cart array, return the total price at checkout
export const getTotalPrice = (arr) => {
  return arr.reduce((initial, item) => initial + item.price, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    }

    case "REMOVE_FROM_CART": {
      const index = state.cart.findIndex((item) => item.id === action.id);

      // make a copy of cart
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its 
        not in the cart!`);
      }
      return {
        ...state,
        cart: newCart,
      };
    }

    case "EMPTY_CART": {
      return {
        ...state,
        cart: [],
      };
    }

    case "SET_USER": {
      return {
        ...state,
        user: action.user,
      };
    }

    default:
      return state;
  }
};

export default reducer;
