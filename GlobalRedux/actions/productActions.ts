import { ActionTypes } from "../constants/action-types";

export const addToCart = (item: Object, customQty = 1) => {
  
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item,
      customQty,
    },
  };
};
export const removeFromCart = (itemId: String) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
    payload: {
      _id: itemId,
    },
  };
};
export const adjustQty = (itemId: String, value:number) => {
  return {
    type: ActionTypes.ADJUST_QTY,
    payload: {
      _id: itemId,
      qty: value,
    },
  };
};
export const loadCurrentItem = (item: Object) => {
  return {
    type: ActionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
