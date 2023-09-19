"use client";

import React, { useEffect, useState } from "react";

// Contexts
import { useGlolContext } from "@/context/Global";

// Animations
import { motion, AnimatePresence } from "framer-motion";

// Variants
import {
  menuVariant,
  exitMenuVariant,
  bgVariant,
  exitBgVariant,

} from "./Variants";

// Components
import Menu from "@/components/Layout/Cart/Menu";

// Data
import categoryes from "@/data/ListMenu";

// Redux
import { connect } from "react-redux";
import { adjustQty, removeFromCart } from "@/redux/actions/productActions";
import { CartContext } from "@/components/Context/CartContext";


const Cart= ({cart, removeFromCart,adjustQty}: {cart: any, removeFromCart: any, adjustQty: any}) => {

  const { cartMenu, setCartMenu }= useGlolContext();


  useEffect(()=>{
    const body = document.querySelector("body")

      if(cartMenu){
        // @ts-ignore: Object is possibly 'null'.
        body.style.overflowY = "hidden"
      }else{
        // @ts-ignore: Object is possibly 'null'.
        body.style.overflowY = "visible"

      }

  },[cartMenu])
  return (
    <>
      <AnimatePresence>
     
        {cartMenu && (
           <CartContext.Provider
           value={{ adjustQty, removeFromCart }}
         >
          <motion.div
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit={exitMenuVariant}
            className="fixed top-0 right-0 z-20 h-screen grid-cols-2 lg:inline-flex"
          >
            <section className="relative z-10 h-full w-screen lg:w-[32rem] max-lg:w-screen bg-color backdrop-blur-2xl lg:z-20">
              <Menu
                data={cart.cart} 
              />
            </section>
            
                
          </motion.div>
    </CartContext.Provider>

        )}

      </AnimatePresence>
      <AnimatePresence>
        {cartMenu && (
          <motion.div
            variants={bgVariant}
            initial="initial"
            animate="animate"
            exit={exitBgVariant}
            className="fixed top-0 left-0 z-10 w-screen h-screen bg-black "
            onClick={() => setCartMenu(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};



export default connect(
  (state: any) => ({
    cart: state.allProducts,
  }),
  { adjustQty, removeFromCart }
)(Cart);
