import styled from "@emotion/styled";
import React, { Component } from "react";
import AppStore from "./Colors/AppStore";
import { Box } from "./Components/Box";
import { Text } from "./Components/Text";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import HomePage from "./Pages/Home/Home";
import NavBar from "./Pages/NavBar/NavBar";
import AboutUs from "./Pages/AboutUs/AboutUs";

interface State {
  part: number;
  selected: string;
  step: string;
}

export default class App extends Component<{}, State> {
  state: State = {
    part: 1,
    selected: "",
    step: "home",
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
    console.log(this.state);
    console.log("condition", this.state.step === "AbautUs");
    return (
      // <BrowserRouter>
      <Box>
        <Box flex={1}>
          <AllContainer>
            <NavBar
              changeRoute={async (e: any) => await this.setState({ step: e })}
            />
            {/* <Routes>
                <Route path="/Home" element={<HomePage />} />
                <Route path="/AboutUs" element={<AboutUs />}>
                  <></>
                </Route>
              </Routes> */}
            {/* @todo- dario sistema home page */}
            {this.state.step === "home" && <HomePage />}
            {this.state.step === "AbautUs" && <AboutUs />}
          </AllContainer>
        </Box>
      </Box>
      // </BrowserRouter>
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
