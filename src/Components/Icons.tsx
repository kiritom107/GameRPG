import { Component } from "react";
import { ReactComponent as Trysvg1 } from "../Svgs/logo.svg";
import { ReactComponent as Trysvg2 } from "../Svgs/downButton.svg";
import { ReactComponent as Logo } from "../Svgs/astersIcon.svg";

export const img = {
  trysvg1: Trysvg1,
  trysvg2: Trysvg2,
  logo: Logo,
};

export class Icons extends Component {
  static trysvg1 = img.trysvg1;
  static trysvg2 = img.trysvg2;
  static logo = img.logo;
}
