"use client";
import React, { useState } from "react";

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
  subMenuVariant
  ,
  exitSubMenuVariant
} from "./Variants";

// Components
import Menu from "@/components/Layout/Category/Menu";
import SubMenu from "@/components/Layout/Category/SubMenu";

// Data
import categoryes from "@/data/ListMenu";

const Category = () => {
  const { hamburgerMenu, setHamburgerMenu } = useGlolContext();
  const [menuOpen, setMenuOpen] = useState(null);

  const subMenuData = categoryes.find((val, index) => val._id == menuOpen);

  return (
    <>
      <AnimatePresence>
        {hamburgerMenu && (
          <motion.div
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit={exitMenuVariant}
            className="fixed top-0 left-0 z-20 h-screen grid-cols-2 lg:inline-flex"
          >
            <section className="relative z-10 h-full max-lg:w-screen bg-color backdrop-blur-2xl lg:z-20 ">
              <Menu
                categoryes={categoryes}
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
              />
            </section>
            
                <AnimatePresence>
                    {subMenuData && subMenuData.subMenu.length > 0 && (
                      <motion.section
                      variants={subMenuVariant}
                      initial="initial"
                      animate="animate"
                      exit={exitSubMenuVariant}
                      className={`relative max-lg:fixed top-0 left-0  h-full bg-gray-200 backdrop-blur-2xl lg:z-10  max-lg:w-screen z-20 `}
                      >
                        <SubMenu
                          categoryes={categoryes}
                          menuOpen={menuOpen}
                          subMenuData={subMenuData}
                          setMenuOpen={setMenuOpen}
                        />
                      </motion.section>
                    )}
                </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {hamburgerMenu && (
          <motion.div
            variants={bgVariant}
            initial="initial"
            animate="animate"
            exit={exitBgVariant}
            className="fixed top-0 left-0 z-10 w-screen h-screen bg-black "
            onClick={() => setHamburgerMenu(false)}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Category;
