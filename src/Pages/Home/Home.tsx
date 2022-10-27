import styled from "@emotion/styled";

import { Component } from "react";

import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";
import "./HomeCss.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Title from "antd/lib/skeleton/Title";

export default class HomePage extends Component {
  ScrollAnimation = () => {
    gsap.registerPlugin(ScrollTrigger);
    const LeftImgs: any = gsap.utils.toArray(".hg__left .hg__image ");
    const RightImgs: any = gsap.utils.toArray(".hg__right .hg__image ");

    const moveImages = (e: any) => {
      const { offsetX, offsetY, target } = e;
      const { clientWidth, clientHeight } = target;

      const Xpos = offsetX / clientWidth - 0.5;
      const Ypos = offsetY / clientHeight - 0.5;

      const modifier = (index: any) => {
        return index * 1.2 + 2.5;
      };

      LeftImgs.forEach((img: gsap.TweenTarget, index: Number) => {
        gsap.to(img, {
          duration: 1.2,
          x: Xpos * 20 * modifier(index),
          y: Ypos * 30 * modifier(index),
          rotationX: Ypos * 40,
          rotationY: Xpos * 40,
        });
      });
      RightImgs.forEach((img: gsap.TweenTarget, index: Number) => {
        gsap.to(img, {
          duration: 1.2,
          x: Xpos * 20 * modifier(index),
          y: Ypos * 30 * modifier(index),
          rotationX: Xpos * 40,
          rotationY: Ypos * 40,
        });
      });
    };

    document.querySelector("header")?.addEventListener("mousemove", moveImages);
  };

  AnimateText = () => {
    gsap.registerPlugin(ScrollTrigger);
    const title = document.querySelector("#MainTitle");

    console.log("title", title);
    gsap.to(".char", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.05,
      delay: 0.2,
    });
  };
  componentDidMount(): void {
    // -------- -------- NAV BAR NAVIGATION -------- --------
    this.AnimateText();
    this.ScrollAnimation();
  }

  render() {
    return (
      <header data-color="#ACB7AE">
        <h1>
          <span id={"MainTitle"}>AI G.O.D.S</span>
          <span>Introducing </span>
          <span>KindomFour </span>
        </h1>
        <p className="subtitle">
          Top Old fashion <br />
          Style fantasy Game
        </p>
        <div className="decor__circlxe"></div>
        <div className="header__gallery">
          <div className="hg__left">
            <div className="hg__image hg__image--l">
              <img src="https://media.discordapp.net/attachments/1034554134835253309/1034838047377862727/sonoPoveroE_Umile_cute_hot_and_gorgeous_lucifer_wearing_dull_de_f581a653-1f45-4dbb-ac7f-dc639d5cf82b.png?width=640&height=1138" />
            </div>
            <div className="hg__image hg__image--m">
              <img src="https://media.discordapp.net/attachments/1034554134835253309/1034836210272718868/sonoPoveroE_Umile_cute_hot_and_gorgeous_lucifer_wearing_dull_de_ef05dc27-f070-4d51-adba-fb02dd2ce211.png?width=640&height=1138" />
            </div>
            <div className="hg__image hg__image--s">
              <img src="https://media.discordapp.net/attachments/1034554134835253309/1034835254575382569/sonoPoveroE_Umile_cute_hot_and_gorgeous_lucifer_wearing_dull_de_38fc34b2-9524-43c9-a5e0-8ac9d0adebdd.png?width=640&height=1138" />
            </div>
          </div>
          <div className="hg__right">
            <div className="hg__image hg__image--l">
              <img src="https://media.discordapp.net/attachments/1034554134835253309/1034820068749619270/sonoPoveroE_Umile__full_body_view_of_white_wolf_with_white_wing_37b51de0-2e42-4796-8206-8a42f6a43375.png" />
            </div>
            <div className="hg__image hg__image--m">
              <img src="https://media.discordapp.net/attachments/1034554134835253309/1034834897744961658/sonoPoveroE_Umile_cute_hot_and_gorgeous_lucifer_wearing_dull_de_7d3f9b33-824c-499c-ba90-2f394b342f20.webp?width=778&height=1137" />
            </div>
            <div className="hg__image hg__image--s">
              <img src="https://media.discordapp.net/attachments/1034554134835253309/1034818107220443156/Sylvansoul_full_body_view_of_white_wolf_with_white_wings_and_bl_95c14231-75bb-4ad1-a7eb-fe997319f92d.png?width=778&height=1137" />
            </div>
          </div>
        </div>
        <div className="cta__circle">
          <div className="cta__circle--logo"></div>
        </div>
      </header>
    );
  }
}
