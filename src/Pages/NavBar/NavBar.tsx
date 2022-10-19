import React, { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <Box mt={40} ml={26} row vcenter>
        <Box flex style={{ alignItems: "flex-start" }}>
          <Text>AI G.O.D.S Studio</Text>
        </Box>
        <Box style={{ alignItems: "flex-end" }}>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#0">Our Values</a>
              </li>
              <li>
                <a href="#0">Portfolio</a>
              </li>
              <li>
                <a href="#0">Blog</a>
              </li>
              <li>
                <a href="#0">How We Work</a>
              </li>
              <li>
                <a href="#0">Contact</a>
              </li>
            </ul>
          </nav>
        </Box>
      </Box>
    );
  }
}
