import styled from "@emotion/styled";
import CSS from "csstype";
import { ReactNode, useState } from "react";
import { parseSize } from "./utils";
import { Box } from "./Box";
import { Icons } from "./Icons";
import { Spacer } from "./Spacer";

type VariantsType =
  | "primary"
  | "secondary"
  | "grey"
  | "lightGrey"
  | "white"
  | "blue"
  | "black"
  | "bluehover"
  | "green"
  | "lightPrimary"
  | "greyBlue"
  | "secondary-dashboard"
  | "red"
  | "selected"
  | "primaryHover"
  | "none";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
  variant?: VariantsType;
  size?: "smaller" | "small" | "medium" | "large";
  fullWidth?: boolean;
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
  animation?: "fade" | "slide";
  id?: any;
  forwardedRef?: React.MutableRefObject<any> | null;
  overflow?: CSS.Property.Overflow;
  shadow?: CSS.Property.BoxShadow;
  borderRadius?: number;
  hideBoxShadowOnHover?: boolean;
  hideBoxShadow?: boolean;
  leftIcon?: any;
  rightIcon?: any;
  selected?: boolean;
}

/**This is main Button!!*/
export const Button = ({
  flex,
  children,
  loading,
  disabled = false,
  variant,
  size,
  onClick,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const [internalLoading, setinternalLoading] = useState(false);

  const onPrePress = async () => {
    try {
      if (internalLoading) return;
      if (!onClick) return;

      try {
        setinternalLoading(true);
        await onClick();
        setinternalLoading(false);
      } catch (error) {
        //ignore
      }
    } catch (error) {}
    setinternalLoading(false);
  };

  const load = internalLoading || loading;

  return (
    <Container
      hcenter={leftIcon ? false : true}
      vcenter
      size={size}
      variant={variant}
      row
      ph={16}
      onClick={onPrePress}
      disabled={disabled}
      flex={flex}
      {...props}
    >
      {leftIcon}
      {!!leftIcon && <Spacer width={"8px"} />}
      {!load && children}
      {load && (
        <AnimationRotatedLogo spinTime={"1.5s"} center>
          <Icons.logo style={{ height: 18 }} />
        </AnimationRotatedLogo>
      )}
      {!!rightIcon && (
        <Box flex style={{ alignItems: "flex-end" }}>
          {rightIcon}
        </Box>
      )}
    </Container>
  );
};

const Container = styled.button<ButtonProps>`
  ${(props) =>
    props.flex === true
      ? `width: 100%;`
      : !!props.flex && `flex: ${props.flex};`}
  display: flex;
  border-color: transparent;
  border-radius: 14px;
  line-height: 0px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: ${() => "grey"};
  background-color: "#18828c " !important;
  color: "#ffffff" !important;

  ${({ size = "medium" }) => {
    switch (size) {
      case "smaller":
        return `font-size: 14px;font-weight: bold;min-height: 32px;`;
      case "small":
        return `font-size: 16px;font-weight: bold;min-height: 44px;`;
      case "medium":
        return `font-size: 21px;font-weight: bold;min-height: 56px;`;
      case "large":
        return `font-size: 26px;font-weight: bold;min-height: 56px;`;
      default:
        return `font-size: 21px;font-weight: bold;min-height: 56px;`;
    }
  }}

  transition: 0.5s;
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
   ${({ height }) =>
    height !== undefined &&
    `height: ${typeof height === "number" ? `${height}px` : height};`}
   ${({ width }) =>
    width !== undefined &&
    `width: ${typeof width === "number" ? `${width}px` : width};`}
   ${({ width }) =>
    width !== undefined &&
    `min-width: ${typeof width === "number" ? `${width}px` : width};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px;`}
  ${({ hideBoxShadowOnHover }) =>
    hideBoxShadowOnHover && `&:hover { box-shadow: none; }`}
  ${({ hideBoxShadow }) => hideBoxShadow && `box-shadow: none;`}
`;

const AnimationRotatedLogo = styled(Box)<{ spinTime: string }>`
  animation: spin ${({ spinTime }) => spinTime} linear infinite;
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
