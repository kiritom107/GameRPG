import React, { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./NavBar.css";
export default class NavBar extends Component {
  componentDidMount(): void {
    // -------- -------- NAV BAR NAVIGATION -------- --------
    gsap.registerPlugin(ScrollTrigger);
    const MainNavLink = gsap.utils.toArray(".main-nav a");
    const MainNavLinkRev = gsap.utils.toArray(".main-nav a").reverse();

    const NavNavigation = (direction: any) => {
      const dir = direction === 1;
      console.log(direction);
      const navLinks = dir ? MainNavLink : MainNavLinkRev;
      ScrollTrigger.refresh();
      return gsap.to(navLinks, {
        duration: 0.3,
        stagger: 0.05,
        autoAlpha: () => (dir ? 0 : 1),
        // autoAlpha: 0,
        y: () => (dir ? 20 : 0),
      });
    };

    MainNavLink.forEach((link: any) => {
      // PRENDE TUTTI I VALORI E LI DA UNA CLASSE
      link.addEventListener("mouseleave", (e: any) => {
        link.classList.add("animate-out");
        setTimeout(() => {
          link.classList.remove("animate-out");
        }, 300);
      });
    });
    // -------- -------- -------- -------- --------
    // -------- -------- SCROLL TRIGGER -------- --------
    ScrollTrigger.create({
      start: 8,
      toggleClass: {
        targets: "body",
        className: "has-scrolled",
      },
      // onUpdate: (self) => console.log(self.direction),
      onEnter: (direction) => NavNavigation(direction.direction),
      onLeaveBack: (direction) => NavNavigation(direction.direction),
      // markers: true,
    });
    // -------- -------- SCROLL TRIGGER -------- --------
  }

  render() {
    return (
      <Box mt={24} row vcenter>
        <Box style={{ position: "relative" }}>
          <Box flex style={{ alignItems: "flex-start" }} id={"logo__text"}>
            <Text>AI G.O.D.S Studio</Text>
          </Box>
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
            <div className="burger">
              <button className="burger__open">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </nav>
        </Box>
      </Box>
    );
  }
}
