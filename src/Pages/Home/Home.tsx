import styled from "@emotion/styled";
import React, { Component } from "react";
import AppStore from "../../Colors/AppStore";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";
import NavBar from "../NavBar/NavBar";
export default class HomePage extends Component {
  render() {
    return (
      <Box>
        <Box flex>
          <Box style={{ alignItems: "flex-end" }}>
            <NavBar />
          </Box>
        </Box>
      </Box>
    );
  }
}

const Title = styled(Text)`
  text-align: center;
  font-weight: bold;
  font-style: italic;
`;

const BackGroupChanginImg = styled(Box)`
  width: 100vw;
  position: relative;
  height: 90vh;
  border-radius: 120px;
  z-index: 9999999999;
  background-color: red;
`;
