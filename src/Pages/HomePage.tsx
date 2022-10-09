import styled from "@emotion/styled";
import React, { Component } from "react";
import AppStore from "../Colors/AppStore";
import { Box } from "../Components/Box";
import { Text } from "../Components/Text";
export default class HomePage extends Component {
  render() {
    return (
      <Box>
        <Box flex>
          {/* //TITOLO */}
          <Box id={"title"} mt={24} center>
            <BackGroupChanginImg center                           >
              <Title fontSize={64} style={{ position: "absolute", top: 0 }}>
                Welcome to Ai gods Studio Game Project
              </Title>
            </BackGroupChanginImg>
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
