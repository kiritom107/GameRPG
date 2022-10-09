import styled from "@emotion/styled";
import { Component } from "react";

export interface TextProps {
  children?: any;
  style?: React.CSSProperties;
  fontSize?: any;
  color?: any;
  weight?: any;
  onClick?: () => void;
  unselectabled?: boolean;
}

export const Text: React.FC<TextProps> = ({
  children,
  style,
  color,
  fontSize = 16,
  weight = "normal",

  onClick,
  ...rest
}) => {
  //calculate fontSize proportionally to the width of the screen
  const fontSizeToUse = parseFloat(fontSize) * (window.innerWidth / 1080);
  return (
    <Paragraph
      onClick={onClick}
      style={{
        ...{
          fontSize: fontSize,
          fontWeight: weight === undefined ? "normal" : weight,
          color: color ?? "white",
        },
        ...(style ?? {}),
      }}
      {...rest}
    >
      {children}
    </Paragraph>
  );
};

const Paragraph = styled.p<{ onClick?: () => void; unselectabled?: boolean }>`
  width: fit-content;
  word-break: break-word;
  cursor: ${({ onClick }) => (!!onClick ? "pointer" : "unset")};
  ${({ unselectabled }) =>
    unselectabled
      ? "-webkit-user-select: none;-moz-user-select: none; -ms-user-select: none; user-select: none;"
      : ""}
`;
