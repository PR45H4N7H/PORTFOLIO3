import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

// 🔹 Styled LinkedIn Button
const LinkedInButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #0a66c2;
  color: white;
  font-weight: 500;
  width: 180px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    background-color: #084182;
  }
`;

const LinkedInLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Innovate. Create. Inspire.</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who am I</Subtitle>
          </WhatWeDo>
          <Desc>
            Experienced Full Stack Developer With 3+ years of Experience, Turning ideas into seamless digital
            solutions with passion and precision.
          </Desc>
          {/* LinkedIn Button */}
          <LinkedInButton 
  href="https://www.linkedin.com/in/dinesh-racharla-34637a176" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <LinkedInLogo 
    src="https://static.vecteezy.com/system/resources/previews/021/460/490/original/linkedin-logo-free-download-free-png.png" 
    alt="LinkedIn Logo" 
  />
  LinkedIn Profile
</LinkedInButton>

        </Right>
      </Container>
    </Section>
  );
};

export default Who;
