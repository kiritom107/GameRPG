import React, { Component } from "react";
import { Box } from "./Box";
import { Canvas } from "@react-three/fiber";

export default class CanvaThree extends Component {
  render() {
    return (
      <Box
        style={{
          width: "100vw",
          height: "90vh",
          //   backgroundColor: "red",
          borderRadius: 0,
        }}
        center
      >
        <Box
          style={{
            width: "90vw",
            height: "70vh",
            backgroundColor: "blue",
          }}
          center
        >
          <Canvas shadows gl={{ antialias: true }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[8, 8, 8]} angle={20} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {/* <OrbitControls /> */}
            {/* <NormalThreeBox position={[0, 0, -16]} /> */}

            <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={7}>
              <planeGeometry />
              <meshStandardMaterial color={"lightBlue"} />
            </mesh>
          </Canvas>
        </Box>
      </Box>
    );
  }
}
