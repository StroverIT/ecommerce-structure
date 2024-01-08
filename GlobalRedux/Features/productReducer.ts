"use client"
import { ActionTypes } from "../constants/action-types";

const initialState = {
  cart: [], 
  currentItem: null,
};

const shopReducer = (state = initialState, action: any) => {
  const item = action.payload;
  switch (action.type) {
    // Add to cart
    case ActionTypes.ADD_TO_CART:
      // Get the items data from products array
      // Check if Item is in cart already
      const inCart = state.cart.find((cartItem: any) =>{
          
        return  cartItem.item._id == item.item._id ? true : false
      }
       
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((cartItem: any) =>
              cartItem.item._id == item.item._id
                ? { ...cartItem, qty: cartItem.qty + item.customQty }
                : cartItem
            )
          : [...state.cart, { ...item, qty: item.customQty }],
      };

      // Remove
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {
        ...state,
        cart: state.cart.filter((cartItem:any) => {
          return cartItem.item._id != item._id;
        }),
      };
      // Adjust qty
    case ActionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((cartItem: any) => {
          return cartItem.item._id === item._id
            ? { ...cartItem, qty: item.qty }
            : cartItem;
        }),
      };
      // Load
    case ActionTypes.LOAD_CURRENT_ITEM:
      return { ...state, currentItem: action.payload };
    default:
      return state;
  }
};
export default shopReducer;


// import { productByItemId } from "../../../../services/productService";



// Utils

  //   const dispatch = useDispatch();

  // const addProduct = () => {
  //   const newObj = {
  //     item: product.item,
  //     article: product.article,
  //     section: {
  //       name: foundItem.sectionName,
  //       _id: foundItem._id,
  //       imageUrl: foundItem.imageUrl,
  //       itemUnit: foundItem.itemUnit,
  //     },
  //     mainRoute,
  //   };

  //   // console.log(product);
  //   const formated = productFormater(newObj);
  //   const text = `${formated.name} успешно е добавен в количката!`;
  //   toastProduct(text);

  //   dispatch(addToCart(formated, currQty));
  // };