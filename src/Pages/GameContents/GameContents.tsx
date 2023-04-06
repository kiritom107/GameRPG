import { Component } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GameContents.css";
import { Console } from "console";

export default class GameContents extends Component {
  render() {
    return (
      <>
        <div className="inizio">
          <p>Inizio, scrolla</p>
        </div>
        <div className="container">
          <div className="panel blue"></div>
          <section className="panel red">ONE</section>
        </div>
        <div className="ciao"></div>
      </>
    );
  }
}
