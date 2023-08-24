// export const headerVariants = {
//   hidden: {
//     opacity: 0,
//     y: -50,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 140,
//     },
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 80,
//       delay: 1,
//     },
//   },
// };

// export const slideIn = (direction, type, delay, duration) => ({
//   hidden: {
//     x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//     y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     transition: {
//       type,
//       delay,
//       duration,
//       ease: "easeOut",
//     },
//   },
// });

// export const staggerContainer = (staggerChildren, delayChildren) => ({
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren,
//       delayChildren,
//     },
//   },
// });

// export const textVariant = (delay) => ({
//   hidden: {
//     y: 50,
//     opacity: 0,
//   },
//   show: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       duration: 1.25,
//       delay,
//     },
//   },
// });

// export const textContainer = {
//   hidden: {
//     opacity: 0,
//   },
//   show: (i = 1) => ({
//     opacity: 1,
//     transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
//   }),
// };

// export const textVariant2 = {
//   hidden: {
//     opacity: 0,
//     y: 20,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "tween",
//       ease: "easeIn",
//     },
//   },
// };

// export const fadeIn = (direction, type, delay, duration) => ({
//   hidden: {
//     x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//     y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//     opacity: 0,
//   },
//   show: {
//     x: 0,
//     y: 0,
//     opacity: 1,
//     transition: {
//       type,
//       delay,
//       duration,
//       ease: "easeOut",
//     },
//   },
// });

// export const planetVariants = (direction) => ({
//   hidden: {
//     x: direction === "left" ? "-100%" : "100%",
//     rotate: 120,
//   },
//   show: {
//     x: 0,
//     rotate: 0,
//     transition: {
//       type: "spring",
//       duration: 1.8,
//       delay: 0.5,
//     },
//   },
// });

// export const zoomIn = (delay, duration) => ({
//   hidden: {
//     scale: 0,
//     opacity: 0,
//   },
//   show: {
//     scale: 1,
//     opacity: 1,
//     transition: {
//       type: "tween",
//       delay,
//       duration,
//       ease: "easeOut",
//     },
//   },
// });

// export const footerVariants = {
//   hidden: {
//     opacity: 0,
//     y: 50,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 140,
//     },
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 80,
//       delay: 0.5,
//     },
//   },
// };

// export const draw = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i) => {
//     const delay = 1.5;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
//         opacity: { delay, duration: 0.01 },
//       },
//     };
//   },
// };

// export const staggerChildren = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };

// export const listItem = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1 },
// };

// export const getMenuStyles = (menuOpened) => {
//   if (document.documentElement.clientWidth <= 640) {
//     console.log("outside of sidebar reached")
//     return { right: !menuOpened && "-100%" };
//   }
// };


import { Variants } from "framer-motion";

export const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};

export const slideIn = (direction: string, type: string, delay: number, duration: number): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren: number, delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay: number): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer: Variants = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const fadeIn = (direction: string, type: string, delay: number, duration: number): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const planetVariants = (direction: string): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

// export const draw: Variants = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: (i: number) => {
//     const delay = 1.5;
//     return {
//       pathLength: 1,
//       opacity: 1,
//       transition: {
//         pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
//         opacity: { delay, duration: 0.01 },
//       },
//     };
//   },
// };

export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const listItem: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const getMenuStyles = (menuOpened: boolean) => {
  if (document.documentElement.clientWidth <= 640) {
    return { right: !menuOpened ? "-100%" : undefined };
  }
};
