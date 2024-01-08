// Variants
export const menuVariant = {
    initial: {
      x: "100vw",
    },
    animate: {
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };
  export const exitMenuVariant = {
    x: "100vw",
    transition: {
      type: "spring",
      bounce: 0.19,
      duration: 2,
    },
  };
  
  export const bgVariant = {
  initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.5,
      transition: {
        duration: 0.4,
      },
    },
  }
  export const exitBgVariant = {
      opacity: 0,
  
    transition: {
      type: "spring",
      duration: 0.2,
    },
  };
  
