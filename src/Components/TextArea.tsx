import styled from "@emotion/styled";
import { Input as InputAntd, InputProps } from "antd";
import { useState } from "react";
import { parseSize } from "./utils";

export interface Props extends InputProps {
  onChange?: (e: any) => void;
  onClick?: (e: any) => void;
  placeholder?: string;
  flex?: boolean | number;
  height?: string | number;
  borderstyle?: string;
  bordercolor?: string;
  radius?: string;
  borderwidth?: string;
  borderactivecolor?: string;
  bgcolor?: string;
  bgcoloractive?: string;
  status?: any;
}

export const TextArea = ({ flex, onChange, onClick, ...rest }: Props) => {
  const [status, setstatus] = useState<
    "default" | "hover" | "selected" | "error"
  >("default");
  const [isFilled, setIsFilled] = useState(false);

  const onHover = () => setstatus("hover");

  const onLeave = () => {
    setstatus("default");
  };

  return (
    <InputCore
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      flex={flex}
      onClick={onClick}
      onChange={(e) => {
        onChange?.(e.target.value);
        if (e.target.value.length > 0) {
          setIsFilled(true);
        } else {
          setIsFilled(false);
        }
      }}
      {...(rest as any)}
    />
  );
};

const InputCore = styled(InputAntd.TextArea)<Props>`
  transition: 0.5s;
  margin-bottom: 0px !important;
  ${({ height = 45 }) =>
    height && `min-height: ${parseSize(height)}!important;`}
  ${(props) =>
    props.flex === true
      ? `width: 100%;`
      : !!props.flex && `flex: ${props.flex};`}
  box-shadow:none!important;
  border-radius: ${({ radius }) => (radius ? radius : "10px")}!important;
  border-style: ${({ borderstyle }) =>
    borderstyle ? borderstyle : "default"}!important;
  border-color: ${({ bordercolor }) =>
    bordercolor ? bordercolor : undefined}!important;
  border-width: ${({ borderwidth }) =>
    borderwidth ? borderwidth : undefined}!important;
  background-color: ${({ bgcolor }) => (bgcolor ? bgcolor : "#fff")}!important;
  font-size: 14px !important;
  color: ${() => "#2E3A59"}!important;
  &::placeholder {
    font-weight: 600;
  }
  :focus {
    box-shadow: none !important;
    border-style: ${({ borderstyle }) =>
      borderstyle ? borderstyle : "default"}!important;
    border-color: ${({ borderactivecolor }) =>
      borderactivecolor ? borderactivecolor : undefined}!important;
    border-width: ${({ borderwidth }) =>
      borderwidth ? borderwidth : undefined}!important;
    background-color: ${({ bgcoloractive }) =>
      bgcoloractive ? bgcoloractive : "#fff"}!important;
  }
  :hover {
    box-shadow: none !important;
    border-style: ${({ borderstyle }) =>
      borderstyle ? borderstyle : "default"}!important;
    border-color: ${({ borderactivecolor }) =>
      borderactivecolor ? borderactivecolor : undefined}!important;
    border-width: ${({ borderwidth }) =>
      borderwidth ? borderwidth : undefined}!important;
    background-color: ${({ bgcoloractive }) =>
      bgcoloractive ? bgcoloractive : "#fff"}!important;
  }
`;
