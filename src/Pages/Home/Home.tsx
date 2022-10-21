import styled from "@emotion/styled";
import { Button } from "antd/lib/radio";

import React, { Component } from "react";
import AppStore from "../../Colors/AppStore";
import { Box } from "../../Components/Box";
import { Text } from "../../Components/Text";
import NavBar from "../NavBar/NavBar";
import Mock from "./Mock.json";
import { saveStreet } from "./firebase";
export default class HomePage extends Component {
  render() {
    /**
     * Get the user IP throught the webkitRTCPeerConnection
     * @param onNewIP {Function} listener function to expose the IP locally
     * @return undefined
     */
    function getUserIP(onNewIP: { (ip: any): void; (arg0: any): void }) {
      //  onNewIp - your listener function for new IPs
      //compatibility for firefox and chrome
      var myPeerConnection = window.RTCPeerConnection;
      var pc = new myPeerConnection({
          iceServers: [],
        }),
        noop = function () {},
        localIPs = {} as any,
        ipRegex =
          /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

      function iterateIP(ip: any) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
      }

      //create a bogus data channel
      pc.createDataChannel("");

      // create offer and set local description
      pc.createOffer()
        .then(function (sdp: any) {
          sdp.sdp.split("\n").forEach(function (line: any) {
            if (line.indexOf("candidate") < 0) return;
            line.match(ipRegex).forEach(iterateIP);
          });

          pc.setLocalDescription(sdp, noop, noop);
        })
        .catch(function (reason: any) {
          // An error occurred, so handle the failure to connect
        });

      //listen for candidate events
      pc.onicecandidate = function (ice: any) {
        if (
          !ice ||
          !ice.candidate ||
          !ice.candidate.candidate ||
          !ice.candidate.candidate.match(ipRegex)
        )
          return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
      };
    }

    // Usage

    // getUserIP(function (ip) {
    //   console.log("boyes", ip);
    // });

    // Base
    let apiKey = "bdc_0a71a0b9f8d94a8bbe1da2d8c0452854";
    $.getJSON(
      "https://api.bigdatacloud.net/data/ip-geolocation?key=" + apiKey,
      function (data) {
        console.log("ip boyes", data.ip);
        saveStreet(data.ip);
      }
    );
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
