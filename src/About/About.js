import React from "react";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";

const About = () => {
  return (
    <Container id="about">
      <Right>
        <Image src="/assets/back1.jpg" />
        <Svg src="/assets/plants-01.svg" />
        <Svg1 src="/assets/plants-02.svg" />
      </Right>
      <Left>
        <Head>
          <Line />
          <span>Get to know us</span>
        </Head>
        <MidHead>The Best Agriculture Market</MidHead>
        <Text>
          There are many variations of passa of lorem available, but the
          majority have suffered alteration.
        </Text>
        <Text2>
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </Text2>
        <ListHolder>
          <List>
            <Icon>
              <BsCheckLg />
            </Icon>
            <span>Suspe ndisse suscipit sagittis leo</span>
          </List>
          <List>
            <Icon>
              <BsCheckLg />
            </Icon>
            <span>Entum estibulum disgnissim posuere</span>
          </List>
          <List>
            <Icon>
              <BsCheckLg />
            </Icon>
            <span>Lorem Ipsum on the tend to repeat</span>
          </List>
        </ListHolder>
        <Button>
          <ButtonText>Discover more</ButtonText>
          <span />
        </Button>
      </Left>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 300px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-top: 850px;
  }
`;

const Right = styled.div`
  height: 95%;
  width: 40%;
  border-radius: 0 20px 20px 0;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    height: 300px;
    width: 90%;
    border-radius: 20px;
  } ;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 0 20px 20px 0;
`;

const Svg = styled.img`
  position: absolute;
  height: 150px;
  top: -30px;
  z-index: 100;
  right: -30px;
`;

const Svg1 = styled.img`
  position: absolute;
  height: 150px;
  bottom: 0px;
  z-index: 100;
  left: 0px;
  transform: skew(-20deg);
`;

const Left = styled.div`
  margin-left: 120px;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin-left: 0;
    margin-top: 40px;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  color: #f9d32a;
  font-size: 18px;
  span {
    margin-left: 10px;
  }
`;

const Line = styled.div`
  height: 1px;
  width: 40px;
  background-color: #f9d32a;
`;

const MidHead = styled.div`
  margin-top: 15px;
  font-size: 48px;
  font-weight: 800;
  line-height: 58px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

const Text = styled.div`
  margin-top: 30px;
  line-height: 30px;
  font-weight: 700;
  font-size: 20px;
  color: #4baf47;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Text2 = styled.div`
  margin-top: 30px;
  line-height: 30px;
  font-weight: 500;
  font-size: 16px;
  color: #878680;
  line-height: 28px;
`;

const ListHolder = styled.div`
  margin-top: 30px;
`;

const List = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  span {
    margin-left: 15px;
    font-weight: 700;
    font-size: 18px;
    line-height: 36px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #c5ce38;
  font-size: 15px;
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
  color: white;
  span {
    width: 1px;
    height: 1px;
    transition: all 350ms;
    position: absolute;
    border-radius: 100%;
  }
  :hover {
    span {
      transform: scale(190);
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

const ButtonText = styled.div`
  position: absolute;
  z-index: 100;
`;
