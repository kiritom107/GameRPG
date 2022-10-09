const defaultColors = {
  Texts: {
    primaryColor: "#18828c",
    whiteColor: "#ffffff",
    redColor: "#E32E2E",
    greenColor: "#32B16C",
    greyColor: "#F2F2F3",
  },
};

const lightTheme = {
  primaryColor: "#ffffff",
  background: "#ffffff",
  activeBackground: "#F2F2F3",
  lightPrimaryColor: "#D8DCE0",
  darkPrimaryColor: "#96939e",
  lightGrey: "#F2F2F3",
  darkGrey: "#96939e",
  orange: "#FFB500",
  pageBackground: "#ffffff",
  lightYellow: "#FEF8EA",
  lightRed: "#FEEAEE",
  lightBlue: "#EAFCFE",
  lightGreen: "#EAFEF7",
  red: "#F25277",
  light200Blue: "#C1F6FB",
  blue: "#18828c",
  mediaSelectedSeparator: "#96939e",

  button: {
    primaryColor: "#18828c",
    textPrimaryColor: "#ffffff",
    secondaryColor: "#ffffff",
    textSecondaryColor: "#18828c",
    greyColor: "#F2F2F3",
    greyColorDashboard: "#F2F2F3",
    textGreyColor: "#96939e",
    blueColor: "#EAFCFE",
    textBlueColor: "#18828c",
    textBlackColor: "#2E3A59",
    whiteColor: "#ffffff",
    textWhiteColor: "#18828c",
    greenColor: "#EAFEF7",
    textGreenColor: "#28a772  ",
    textRed: "#F25277",
  },
  text: {
    primaryColor: "#2E3A59",
    primaryColorHover: "#ffffff",
    secondaryColor: "#ffffff",
    darkGrey: "#96939e",
    green: "#28a772 ",
    darkGreen: "#28a772 ",
    lightBlue: "#18828c",
    black: "#2E3A59",
    orange: "#FFB822",
    white: "#fff",
  },

  menu: {
    icon: "#2E3A59",
    iconActive: "white",
    background: "#ffffff",
    indicator: "#eeeeee",
  },

  misc: {
    separator: "#D8DCE0",
  },

  settings: {
    icons: "#D8DCE0",
  },

  simpleOuterShadow: ";box-shadow: 4px 8px 16px rgba(38, 42, 72, 0.14);",
  // boxHoverStyle: `:hover {border-color: rgba(28,187,201,1); box-shadow: inset 0px 0px 0px 1px rgba(28,187,201,1); transition: 0.5s;}`,
  boxHoverStyle: `:hover {background-color: #F2F2F3; transition: 0.5s;}`,

  smallOuterShadow: "box-shadow: 0px 0px 16px 0px rgba(87, 87, 87, 0.2);",
  bigOuterShadow: "box-shadow: 0px 0px 40px 0px rgba(87, 87, 87, 0.2);",
  bigOuterShadowNoBox: "0px 0px 40px 0px rgba(87, 87, 87, 0.2)",
  pageInnerShadow:
    "box-shadow: 0px 0px 11px 0px rgba(87, 87, 87, 0.08); box-shadow: 0px 0px 20px 0px rgba(87, 87, 87, 0.12); box-shadow: 0px 0px 25px 0px rgba(87, 87, 87, 0.2);",
  calendarCardBoxShadow:
    "box-shadow: 5.92154px 6.77756px 13px rgba(38, 42, 72, 0.08), 2.28089px 2.61062px 4.14074px rgba(38, 42, 72, 0.04),0.482496px 0.552246px 1.05926px rgba(38, 42, 72, 0.02);",
};

const darkTheme = {
  primaryColor: "#3B3B3B",
  background: "#2E2E2E",
  activeBackground: "#2E2E2E",
  lightPrimaryColor: "#212121",
  darkPrimaryColor: "#A9B0B8",
  lightGrey: "#212121",
  darkGrey: "#A3A1AA",
  orange: "#FFB500",
  pageBackground: "#2e2e2e",
  lightYellow: "#211D12",
  lightRed: "#490414",
  lightBlue: "#374E62",
  lightGreen: "#122121",
  red: "#F25277",
  light200Blue: "#374E62",
  blue: "#47D8E5",
  mediaSelectedSeparator: "#2E2E2E",

  button: {
    primaryColor: "#47D8E5",
    textPrimaryColor: "#0e5157",
    secondaryColor: "#3B3B3B",
    textSecondaryColor: "#48d7e4",
    greyColor: "#212121",
    greyColorDashboard: "#2e2e2e",
    textGreyColor: "#F2F2F3",
    blueColor: "#152021",
    textBlueColor: "#48d7e4",
    textBlackColor: "#48d7e4",
    whiteColor: "#3B3B3B",
    textWhiteColor: "#48d7e4",
    textGreenColor: "#41e7aa",
    greenColor: "#122121",
    textRed: "#F25277",
  },
  text: {
    primaryColor: "#ffffff",
    primaryColorHover: "#ffffff",
    secondaryColor: "#ffffff",
    darkGrey: "#A3A1AA",
    green: "#41e7aa",
    darkGreen: "#41e7aa",
    lightBlue: "#48d7e4",
    black: "#ffffff",
    orange: "#FFB822",
    white: "#000",
  },
  misc: {
    separator: "#A9B0B8",
  },

  menu: {
    icon: "#A9B0B8",
    iconActive: "white",
    background: "#3B3B3B",
    indicator: "#252527",
  },

  settings: {
    icons: "#A9B0B8",
  },

  // boxHoverStyle: `:hover {border-color:rgba(28,187,201,1); box-shadow: inset 0px 0px 2px 1px rgba(28,187,201,1); background-color: #2E2E2E; transition: 0.5s;}; `,
  boxHoverStyle: `:hover {background-color: #212121; transition: 0.5s;}`,
  simpleOuterShadow: ";box-shadow: 9px 10px 26px 0px #03031066;",
  smallOuterShadow: "box-shadow: 0px 0px 16px 0px #03031080;",
  bigOuterShadow: "box-shadow: 0px 0px 40px 0px #03031080;",
  bigOuterShadowNoBox: "0px 0px 40px 0px #03031080;",
  pageInnerShadow:
    "box-shadow: 0px 0px 11px 0px #0303103D; box-shadow: 0px 0px 44px 0px #0303104D; box-shadow: 0px 0px 40px 0px #03031080;",
  calendarCardBoxShadow:
    "box-shadow: 9px 10px 26px rgba(3, 3, 16, 0.4), 5px 5px 8px rgba(3, 3, 16, 0.24), 2px 2px 2px rgba(3, 3, 16, 0.18);",
};

export { darkTheme, lightTheme, defaultColors };
