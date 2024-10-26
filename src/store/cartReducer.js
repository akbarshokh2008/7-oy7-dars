const defaultState = {
  cart: [],
};
const cartReducer = (state = defaultState, action) => {
  if (action.type == 'ADD_CART') {
    let copied = [state.cart];
    copied.push(action.payload);

    return { ...state, cart: [...state.cart, action.payload] };
  } else if (action.type == 'REMOVE_CART') {
    return state;
  } else {
    return state;
  }
};
export default cartReducer;
