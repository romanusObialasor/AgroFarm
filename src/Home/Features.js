import React from "react";
import styled from "styled-components";
import { VscTools } from "react-icons/vsc";
import { RiPlantLine } from "react-icons/ri";
import { BsHandThumbsUp } from "react-icons/bs";

const Features = () => {
  return (
    <Container>
      <Box>
        <Head>Feature 01</Head>
        <Text>
          We're using a<br /> new technology
        </Text>
        <Icon>
          <VscTools />
        </Icon>
      </Box>
      <Box>
        <Head>Feature 02</Head>
        <Text>
          Good in smart
          <br />
          organic services
        </Text>
        <Icon>
          <RiPlantLine />
        </Icon>
      </Box>
      <Box>
        <Head>Feature 03</Head>
        <Text>
          Reforming
          <br />
          in the systems
        </Text>
        <Icon>
          <BsHandThumbsUp />
        </Icon>
      </Box>
    </Container>
  );
};

export default Features;

const Container = styled.div`
  position: absolute;
  z-index: 1000;
  bottom: -140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background: white;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  margin: 0 35px;
`;

const Head = styled.div`
  color: #f9d32a;
`;

const Text = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 24px;
  line-height: 30px;
  color: #1f1e17;
  margin-top: 7px;
  margin-bottom: 30px;
`;

const Icon = styled.div`
  position: absolute;
  bottom: -25px;
  height: 80px;
  width: 80px;
  background: #4baf47;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 35px;
`;

// const Container = styled.div``;
