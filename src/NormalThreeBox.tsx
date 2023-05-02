import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { TextureLoader } from "three";

export default function NormalThreeBox(props: any) {
  // This reference will give us direct access to the mesh
  const mesh = useRef() as any;
  const shadedMaterial = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame((clock) => {
    //   @ts-ignore
    mesh.current.material.uniforms.uTime.value += 0.015;
  });
  // Return view, these are regular three.js elements expressed in JSX

  const vertexShader = `
   varying vec2 vUv;
  varying float vWave;
  uniform float uTime;
  void main() {
    vUv = uv;
    vec3 pos = position;
    float freq = 0.5;
    float amp = 0.3;
    float time = uTime * 3.5;
    pos.z += sin((pos.x - pos.y) * freq - time) * amp;

    vWave = pos.z;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }
    `;

  const fragmentShader = ` 
varying vec2 vUv;
  varying float vWave;

  uniform float uTime;
  uniform sampler2D uTexture;

  float map(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
  }

  void main() {
    float time = uTime * 0.25;
    vec2 uv = fract(vUv );
    vec3 texture = texture2D(uTexture, uv).rgb;
    // texture *= vec3(uv.x, uv.y, 0.);


    
    float wave = vWave;
    wave = map(wave, -1., 1., 0., 0.5);
    float shadow = 1.7 - wave;


    //ad a border color to the texture
    if (uv.x < 0.004 || uv.x > 0.996 || uv.y < 0.004 || uv.y > 0.996) {
      texture = vec3(0.0);
    }


    vec3 fragColor = texture * shadow;

    gl_FragColor = vec4(fragColor, 20000.);
  }
    `;

  // shadedMaterial;
  return (
    <mesh {...props} ref={mesh} scale={active ? 1.5 : 1} receiveShadow>
      {/* <meshPhongMaterial></meshPhongMaterial> */}
      {/* <ambientLight intensity={1000000.1} /> */}
      <planeGeometry args={[26, 26, 26, 26]} />
      <shaderMaterial
        ref={shadedMaterial as any}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          // uTexture: {
          //   // value: new TextureLoader().load(img),
          // },
        }}
        // lights={true}
      />
    </mesh>
  );
}
