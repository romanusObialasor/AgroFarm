import React from "react";
import styled from "styled-components";
import Features from "./Features";

const Home = () => {
  return (
    <Main id="home">
      <Container>
        <Wrapper>
          <Holder>
            <Text>
              Agriculture <i>&</i> Organic <br />
              Farm Product For You
            </Text>
            <SubText>
              Both rest of know draw fond post as. It agreement defective to{" "}
              <br />
              excellent. Feebly do engage of narrow. Extensive repulsive{" "}
            </SubText>
            <Button>
              <ButtonText>Discover more</ButtonText>
              <span />
            </Button>
          </Holder>
        </Wrapper>
        <Features />
      </Container>
    </Main>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/back2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
`;

const Holder = styled.div`
  margin-left: 80px;
  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    br {
      display: none;
    }
  }
`;

const Text = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 80px;
  font-weight: 900;
  line-height: 1.2;
  font-family: "Oswald", sans-serif;
  i {
    color: #4bae46;
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const SubText = styled.div`
  opacity: 0.6;
  font-size: 19px;
`;

const Button = styled.div`
  margin-top: 40px;
  font-size: 14px;
  font-weight: 700;
  background: #4bae46;
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all 350ms;
  position: relative;
  overflow: hidden;
  span {
    width: 1px;
    height: 1px;
    transition: all 350ms;
    margin-top: -30px;
    margin-left: -100px;
    border-radius: 100%;
  }
  :hover {
    span {
      transform: scale(290);
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

const ButtonText = styled.div`
  position: absolute;
  z-index: 100;
`;

const Main = styled.div`
  width: 100%;
  background: #0a4907;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
