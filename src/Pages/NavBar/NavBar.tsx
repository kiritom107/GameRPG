import React, { Component } from "react";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./NavBar.css";
import { navigate, refresh, reloadApp } from "../../Router";

interface Props {
  changeRoute: any;
}
export default class NavBar extends Component<Props> {
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
            <Text>Sito bello </Text>
          </Box>
        </Box>

        <Box style={{ alignItems: "flex-end" }}>
          <nav className="main-nav">
            <ul>
              <li>
                <a
                  onClick={() => {
                    navigate("AbautUs");
                    this.props.changeRoute("AbautUs");
                  }}
                >
                  Our Values
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("AbautUs");
                    this.props.changeRoute("AbautUs");
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("AbautUs");
                    this.props.changeRoute("AbautUs");
                  }}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("AbautUs");
                    this.props.changeRoute("AbautUs");
                  }}
                >
                  How We Work
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigate("Home");
                    this.props.changeRoute("home");
                  }}
                >
                  Contact
                </a>
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
