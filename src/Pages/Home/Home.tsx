import styled from "@emotion/styled";

import React, { Component } from "react";
import AppStore from "../../Colors/AppStore";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";
import NavBar from "../NavBar/NavBar";
import Mock from "./Mock.json";
export default class HomePage extends Component {
  render() {
  

    return (
      // <Box>
      //   <Box flex>
      //     <Box>
      //       <NavBar />
      //     </Box>
      //   </Box>
      //   <Box flex center style={{ minHeight: "200wh" }} mb={2000}>
      //     <Text>ciao</Text>
      //   </Box>
      // </Box>

      <Box>
        <Box center bgPrimaryColor width={"90vw"} height={"90vh"} scroll>
          <Box
            width={"70vw"}
            mt={"12vh"}
            center
            p={24}
            style={{ backgroundColor: " #F25277" }}
            scroll
          >
            <Text color={"black"} fontSize={20} weight={700}>
              Chi viene a lucca comix ?
            </Text>
          </Box>
          <Box flex>
            <Box row mt={"5vh"} style={{ alignItems: "flex-end" }}>
              <BoxDate
                center
                style={{ backgroundColor: "#A9B0B8" }}
                width={"20vw"}
                ml={"30vw"}
                mr={"5vw"}
              >
                <TextDate color={" #whi"}>29</TextDate>
              </BoxDate>
              <BoxDate
                center
                style={{ backgroundColor: "#A9B0B8" }}
                width={"20vw"}
              >
                <TextDate color={" #whi"}>30</TextDate>
              </BoxDate>
            </Box>
            <Box mt={"3vh"}>
              {Mock.map((e, index) => (
                <Box row flex mb={"2vh"}>
                  <Box
                    style={{
                      border: "1px solid black",
                      backgroundColor: "#47D8E5",
                    }}
                    width={"25vw"}
                    height={"4vh"}
                    center
                  >
                    <Text color={"black"} fontSize={18} weight={700}>
                      {e.Person}
                    </Text>
                  </Box>
                  {e.Date.includes("29") && (
                    <Box
                      style={{
                        border: "1px solid black",
                        backgroundColor: "#41e7aa",
                      }}
                      ml={"4.5vw"}
                      width={"20vw"}
                      height={"4vh"}
                      center
                    >
                      <Text color={"black"} fontSize={18} weight={700}>
                        x
                      </Text>
                    </Box>
                  )}
                  {e.Date.includes("30") && (
                    <Box
                      ml={e.Date.includes("29") ? "5.0vw" : "29vw"}
                      style={{
                        border: "1px solid black",
                        backgroundColor: "#41e7aa",
                      }}
                      width={"20vw"}
                      height={"4vh"}
                      center
                    >
                      <Text color={"black"} fontSize={18} weight={700}>
                        x
                      </Text>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

const BoxDate = styled(Box)`
  background-color: "#374E62" !important;
`;

const TextDate = styled(Text)`
  color: white;
`;

const BackGroupChanginImg = styled(Box)`
  width: 100vw;
  position: relative;
  height: 90vh;
  border-radius: 120px;
  z-index: 9999999999;
  background-color: red;
`;
