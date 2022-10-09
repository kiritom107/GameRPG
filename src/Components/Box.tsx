import styled from "@emotion/styled";
import CSS from "csstype";
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  MotionStyle,
  Transition,
} from "framer-motion";
import { flexIfDefined, parseSize } from "./utils";
import { fadeConfig, slideFadeConfig } from "./BoxAnimations";

export interface BoxProps extends HTMLMotionProps<"div"> {
  ref?: React.MutableRefObject<any>;
  flex?: number | boolean | string;
  row?: boolean;
  center?: boolean;
  vcenter?: boolean;
  hcenter?: boolean;
  justify?: CSS.Property.JustifyContent;
  m?: number | string; // margin
  mv?: number | string; // margin vertical
  mh?: number | string; // margin horizontal
  mt?: number | string; // margin top
  mb?: number | string; // margin bottom
  mr?: number | string; // margin right
  ml?: number | string; // margin left
  p?: number | string; // padding
  pv?: number | string; // padding vertical
  ph?: number | string; // padding horizontal
  pt?: number | string; // padding top
  pb?: number | string; // padding bottom
  pr?: number | string; // padding right
  pl?: number | string; // padding left
  bgGrey?: boolean;
  height?: string | number;
  width?: string | number;
  hideBar?: boolean;
  onClick?: (item?: any) => void;
  children?: React.ReactNode;
  style?: MotionStyle;
  animation?: "fade" | "slide" | "vibrate";
  transition?: Transition;
  id?: any;
  forwardedRef?: React.MutableRefObject<any> | null;
  overflow?: CSS.Property.Overflow;
  shadow?: CSS.Property.BoxShadow;
  borderRadius?: number | string;
  hideBoxShadowOnHover?: boolean;
  hideBoxShadow?: boolean;
  bgPrimaryColor?: boolean;
  scroll?: boolean;
  border?: string;
  removeHover?: boolean;
  Brightness?: boolean;
}

export function Box(props: BoxProps) {
  const getAnimation = () => {
    switch (props.animation) {
      case "fade":
        return fadeConfig;
      case "slide":
        return slideFadeConfig;
      default:
        return {};
    }
  };
  return (
    <AnimatePresence
      key={props.id}
      custom={{ offsetX: 0, offsetY: 8, reverse: true }}
    >
      <StyledBox
        ref={props.forwardedRef as any}
        key={props.id}
        id={props.id}
        {...props}
        {...getAnimation()}
      />
    </AnimatePresence>
  );
}

const StyledBox = styled(motion.div)<BoxProps>`
  -webkit-text-size-adjust: none;
  flex: ${({ flex }) => flexIfDefined(flex)};
  flex-shrink: 0;
  /* flex-basis: auto; */
  display: -webkit-flex;
  ${({ hideBar }) =>
    hideBar &&
    `-ms-overflow-style: none;  /* Internet Explorer 10+ */
     scrollbar-width: none;  /* Firefox */
     ::-webkit-scrollbar { 
       display: none; 
   }
   `}
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  ${({ hcenter, row }) =>
    hcenter && (row ? "justify-content:center;" : "align-items:center;")}
  ${({ vcenter, row }) =>
    vcenter && (row ? "align-items:center;" : "justify-content:center;")}
   ${({ center }) => center && "justify-content:center; align-items:center;"}
   ${({ justify }) => justify && `justify-content:${justify};`}
   ${({ mv }) =>
    mv !== undefined &&
    `margin-top: ${parseSize(mv)} !important; margin-bottom: ${parseSize(
      mv
    )} !important;`}
   ${({ mh }) =>
    mh !== undefined &&
    `margin-left: ${parseSize(mh)} !important; margin-right: ${parseSize(
      mh
    )} !important;`}
   ${({ mt }) => mt !== undefined && `margin-top: ${parseSize(mt)} !important;`}
   ${({ mb }) =>
    mb !== undefined && `margin-bottom: ${parseSize(mb)} !important;`}
   ${({ mr }) =>
    mr !== undefined && `margin-right: ${parseSize(mr)} !important;`}
   ${({ ml }) =>
    ml !== undefined && `margin-left: ${parseSize(ml)} !important;`}
   ${({ m }) => m !== undefined && `margin: ${parseSize(m)};`}
   ${({ pv }) =>
    pv !== undefined &&
    `padding-top: ${parseSize(pv)} !important; padding-bottom: ${parseSize(
      pv
    )} !important;`}
   ${({ ph }) =>
    ph !== undefined &&
    `padding-left: ${parseSize(ph)} !important; padding-right: ${parseSize(
      ph
    )} !important;`}
   ${({ pt }) =>
    pt !== undefined && `padding-top: ${parseSize(pt)} !important;`}
   ${({ pb }) =>
    pb !== undefined && `padding-bottom: ${parseSize(pb)} !important;`}
   ${({ pr }) =>
    pr !== undefined && `padding-right: ${parseSize(pr)} !important;`}
   ${({ pl }) =>
    pl !== undefined && `padding-left: ${parseSize(pl)} !important;`}
   ${({ p }) => p !== undefined && `padding: ${parseSize(p)};`}
   ${({ bgGrey, theme }) => bgGrey && `background-color: white};`}
   ${({ height }) =>
    height !== undefined &&
    `height: ${typeof height === "number" ? `${height}px` : height};`}
   ${({ width }) =>
    width !== undefined &&
    `width: ${typeof width === "number" ? `${width}px` : width};`}
   ${({ width }) =>
    width !== undefined &&
    `min-width: ${typeof width === "number" ? `${width}px` : width};`}
   ${({ onClick }) =>
    !!onClick &&
    `cursor: pointer;
   -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
                                  `}
   ${({ overflow }) => overflow && `overflow: ${overflow};`}
   ${({ shadow }) =>
    shadow && shadow.includes("box-shadow")
      ? `${shadow};`
      : `box-shadow: ${shadow};`}
   transition: all 0.3s ease-in-out;
  ${({ borderRadius = 14 }) =>
    !!borderRadius && `border-radius: ${parseSize(borderRadius)};`}
  ${({ bgPrimaryColor }) => !!bgPrimaryColor && `background-color: white;`}
   ${({ scroll }) => scroll && `overflow: auto;`}
   ${({ onClick, removeHover }) => !!onClick && !removeHover && "black"}
   ${({ hideBoxShadowOnHover }) =>
    hideBoxShadowOnHover && `&:hover { box-shadow: none; }`}
  ${({ hideBoxShadow }) => hideBoxShadow && `box-shadow: none;`}
  ${({ Brightness }) => Brightness && `filter: brightness(0.45);`}
  ${({ border }) =>
    border &&
    `border: ${border};
`}
`;
