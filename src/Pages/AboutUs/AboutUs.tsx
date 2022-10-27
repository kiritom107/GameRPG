import { Component } from "react";

import "./AboutUs.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";
import { img } from "../../Components/Icons";

interface State {
  AcctualIndex: number;
}
export default class AboutUs extends Component<{}, State> {
  state: State = {
    AcctualIndex: -1,
  };

  imgHover = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = document.querySelectorAll(".rg__column");
    let indexB = -1;
    sections.forEach((section, index) => {
      console.log(section);
      const imgBlock = section.querySelector(".rg__image");
      const img = section.querySelector(".rg__image img");
      const mask = section.querySelector(".rg__image--mask");
      const text = section.querySelector(".rg__text");
      const textHeight = section.querySelector(".rg__text--copy");

      const Description = section.querySelector(".rg__text--mask");

      gsap.set(imgBlock, { yPercent: -101 });
      gsap.set(Description, { opacity: 0, yPercent: 30 });
      gsap.set(mask, { yPercent: 100 });
      gsap.set(img, { scale: 1.5 });
      console.log("primis");

      const createHoverReveal = (e: any) => {
        const tl = gsap.timeline({
          defaults: {
            duration: 0.7,
            ease: "power4.out",
          },
        });
        const text = gsap.timeline({
          defaults: {
            duration: 0.7,
            ease: "power4.out",
          },
        });

        if (e.type === "mouseenter") {
          console.log("gg");
          indexB = index;
          tl.to(mask, { yPercent: -100 }, 0)
            .to(imgBlock, { yPercent: 100 }, 0)
            .to(text, { y: -textHeight!.clientHeight / 2 }, 0)
            .to(img, { duration: 1.1, scale: 1 }, 0);

          text.to(Description, { opacity: 1, yPercent: -10 }, 0);
        } else {
          tl.to(mask, { yPercent: 100 }, 0)
            .to(imgBlock, { yPercent: -100 }, 0)
            .to(text, { y: 0 }, 0)
            .to(img, { scale: 1.5 }, 0);
          text.to(Description, { opacity: 0, yPercent: 30 }, 0);
        return tl;
      };

      section.addEventListener("mouseenter", createHoverReveal);
      section.addEventListener("mouseleave", createHoverReveal);
    });
  };

  componentDidMount(): void {
    // -------- -------- NAV BAR NAVIGATION -------- --------
    this.imgHover();
  }

  render() {
    // console.log("2 porco dio");
    return (
      <main id="main">
        <article>
          {/* <!-- Reveal Gallery --> */}
          <section className="reveal-gallery">
            <div className="rg__column left" data-color="#a6b3b3">
              <div className="rg__text">
                <div className="rg__text--heading">
                  <span className="id">
                    ID:
                    <br />
                    {"       "} universitarioh {"       "}
                  </span>
                  <h3>G</h3>
                </div>
                <div className="rg__text--copy">
                  <div className="rg__text--mask">
                    <p>
                      è un universitario dell mahadoona (a me uni fa skiho).
                    </p>
                  </div>
                </div>
              </div>
              <div className="rg__image">
                <div className="rg__image--mask">
                  <img src="https://media.discordapp.net/attachments/1034554134835253309/1034824489344708698/sonoPoveroE_Umile__full_body_view_of_white_wolf_with_white_wing_3073626d-4144-4d91-8118-1c06f8183240.png?width=1138&height=1138 " />
                </div>
              </div>
            </div>
            <div className="rg__column center" data-color="#b0a7a4">
              <div className="rg__text">
                <div className="rg__text--heading">
                  <span className="id">
                    ID: <br /> umile indiano divino supremo
                  </span>
                  <h3>O</h3>
                </div>
                <div className="rg__text--copy">
                  <div className="rg__text--mask">
                    <p>
                      Programmatore divino che altreo ce da dire è un indiano di
                      fatto
                    </p>
                  </div>
                </div>
              </div>
              <div className="rg__image">
                <div className="rg__image--mask">
                  <img src="https://media.discordapp.net/attachments/1034554134835253309/1035099554367946752/sonoPoveroE_Umile_None_090316dc-f1bf-4ab9-b99e-f0ac6c3817eb.png?width=640&height=1138" />
                </div>
              </div>
            </div>
            <div className="rg__column center" data-color="#b0a7a4">
              <div className="rg__text">
                <div className="rg__text--heading">
                  <span className="id">
                    ID : <br /> Soprominato "cina" da un certo bruni
                  </span>
                  <h3>D</h3>
                </div>
                <div className="rg__text--copy">
                  <div className="rg__text--mask">
                    <p>
                      è un programmatore convertito nel lato oscuro ha orgini
                      molto oscure per il fatto che è uscito da una scuola
                      classica quindi alla fine fa il scrittore
                    </p>
                  </div>
                </div>
              </div>
              <div className="rg__image">
                <div className="rg__image--mask">
                  <img src="https://media.discordapp.net/attachments/1034554134835253309/1034841974399832196/sonoPoveroE_Umile_A_fairy_in_a_beautiful_silk_dress_sitting_on__a7d1b2ad-2a75-4db1-acd9-18f0a75ad9ee.png?width=650&height=1138" />
                </div>
              </div>
            </div>
            <div className="rg__column right" data-color="#a3abb1">
              <div className="rg__text">
                <div className="rg__text--heading">
                  <span className="id">
                    ID : <br /> FIERA anzi FIERRISIMA
                  </span>
                  <h3>S</h3>
                </div>
                <div className="rg__text--copy">
                  <div className="rg__text--mask">
                    <p>
                      MADO VI SFIDO A TROVARE UNA RAGGAZA PIU FIERA DI LEI{" "}
                      <br /> ( Non che io conosca tante T_T )
                    </p>
                  </div>
                </div>
              </div>
              <div className="rg__image">
                <div className="rg__image--mask">
                  <img src="https://media.discordapp.net/attachments/1034554134835253309/1035091640097980446/sonoPoveroE_Umile_None_b1d1d926-d1d0-439a-b76e-add0cc2c29db.png?width=650&height=1138" />
                </div>
              </div>
            </div>
          </section>
        </article>
        <aside
          className="fill-background"
          style={{ backgroundColor: "#ACB7AE " }}
        ></aside>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js"></script>
        <script src="https://unpkg.com/smooth-scrollbar@latest/dist/smooth-scrollbar.js"></script>
        <script src="js/main.js" defer></script>
      </main>

      // <Box style={{ backgroundColor: "red", height: 9999, width: 999 }}>
      //   <Text style={{ backgroundColor: "red" }}>ciao</Text>
      // </Box>
    );
  }
}
