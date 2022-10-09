import { HTMLMotionProps, Variant } from "framer-motion";

type FadeMotionVariant = MotionVariants<"enter" | "exit">;
type SlideFadeVariant = MotionVariants<"initial" | "enter" | "exit">;

type MotionVariants<T extends string> = Record<T, Variant>;

const EASINGS = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
};

const slideTransitions = {
  enter: {
    duration: 0.1,
    ease: EASINGS.easeOut,
  },
  exit: {
    duration: 0.1,
    ease: EASINGS.easeIn,
  },
};

const customSlideVariants = { offsetX: 0, offsetY: 8, reverse: true };
const slideVariants: SlideFadeVariant = {
  initial: (props) => ({
    opacity: 0,
    x: props?.offsetX ?? customSlideVariants.offsetX,
    y: props?.offsetY ?? customSlideVariants.offsetY,
    transition: slideTransitions.exit,
  }),
  exit: (props) => ({
    opacity: 0,
    transition: slideTransitions.exit,
    ...((props?.reverse ?? customSlideVariants.reverse) && {
      x: props?.offsetX ?? customSlideVariants.offsetX,
      y: props?.offsetY ?? customSlideVariants.offsetY,
    }),
    ...(!(props?.reverse ?? customSlideVariants.reverse) && {
      transitionEnd: {
        x: props?.offsetX ?? customSlideVariants.offsetX,
        y: props?.offsetY ?? customSlideVariants.offsetY,
      },
    }),
  }),
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: slideTransitions.enter,
  },
};

const fadeVariants: FadeMotionVariant = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: EASINGS.easeOut,
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.1,
      ease: EASINGS.easeIn,
    },
  },
};

const fadeConfig: Omit<HTMLMotionProps<any>, "transition"> = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: fadeVariants,
};

const slideFadeConfig: HTMLMotionProps<any> = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: slideVariants,
};

export { fadeConfig, slideFadeConfig };
