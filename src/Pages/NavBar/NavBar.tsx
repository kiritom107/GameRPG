import React, { Component } from "react";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <nav class="main-nav">
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
      </>
    );
  }
}
