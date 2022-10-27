import styled from "@emotion/styled";
import React, { Component } from "react";
import AppStore from "./Colors/AppStore";
import { Box } from "./Components/Box";
import { Text } from "./Components/Text";

import HomePage from "./Pages/Home/Home";
import NavBar from "./Pages/NavBar/NavBar";

interface State {
  part: number;
  selected: string;
}
export default class App extends Component<{}, State> {
  state: State = {
    part: 1,
    selected: "",
  };

  goNext = () => {
    this.setState({ part: this.state.part + 1 });
  };

  goNextValue = (e: any) => {
    this.setState({ selected: e });
    this.setState({ part: this.state.part + 1 });
  };

  goBack = () => {
    this.setState({ part: this.state.part - 1 });
  };

  render() {
    return (
      <Box>
        <Box flex={1}>
          <AllContainer>
            <NavBar />
            <HomePage></HomePage>
          </AllContainer>
        </Box>
      </Box>
    );
  }
}

const AllContainer = styled(Box)`
  /* width: 1000px;
  height: 1000px;
   */

  background-color: ${() => AppStore.theme.Texts.primaryColor};
  /* min-height: 100vh; */
  z-index: 9999px;
`;
