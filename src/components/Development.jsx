import React, { Suspense, useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Development = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(
      "Passionate full-stack developer with a strong focus on building scalable, high-performance applications. Seeking opportunities to contribute innovative solutions and drive success in dynamic tech environments."
    );
  }, []);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Atom />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>{content}</Desc>
    </>
  );
};

export default Development;
