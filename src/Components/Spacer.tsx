import styled from "@emotion/styled";
import { parseSize } from "./utils";

export function Spacer({
  width = 16,
  height = 16,
}: {
  width?: any;
  height?: any;
}) {
  return <SpacerDiv width={width} height={height}></SpacerDiv>;
}

const SpacerDiv = styled.div<{ width: any; height: any }>`
  width: ${({ width }) => parseSize(width)};
  height: ${({ height }) => parseSize(height)};
`;
