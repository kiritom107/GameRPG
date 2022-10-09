import styled from "@emotion/styled";
import React, { Component } from "react";
import AppStore from "./AppStore";
import { Box, BoxProps } from "./Box";

interface Props extends BoxProps {
  zoom: any;
  children: any;
}
export class ZoomedContainer extends Component<Props> {
  static defaultProps: Partial<Props> = {
    zoom: AppStore.zoom,
  };
  render() {
    return <Container {...this.props} />;
  }
}

const Container = styled(Box)<{ zoom?: any }>`
  /* zoom: ${(props) => props.zoom};
  -ms-zoom: ${(props) => props.zoom};
  -webkit-zoom: ${(props) => props.zoom};
  -moz-transform: scale(${(props) => props.zoom}, ${(props) => props.zoom});
  -moz-transform-origin: left center; */
`;
