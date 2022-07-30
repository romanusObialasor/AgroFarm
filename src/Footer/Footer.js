import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";

const Footer = ({ txtA }) => {
  return (
    <Container txtA={txtA}>
      <Left txtA={txtA}>
        <Logo src="/assets/logo.png" />
        <Write txtA={txtA}>
          oth rest of know draw fond post as. It agreement defective to
          excellent. Feebly do engage of narrow. Extensive repulsive belonging
          depending if promotion be zealously as
        </Write>
        <Icon>
          <IconHolder>
            <FaFacebook />
          </IconHolder>
          <IconHolder>
            <AiOutlineTwitter />
          </IconHolder>
          <IconHolder>
            <AiOutlineInstagram />
          </IconHolder>
          <IconHolder>
            <FaLinkedinIn />
          </IconHolder>
        </Icon>
      </Left>
      <Right txtA={txtA}>
        <ListHolder txtA={txtA}>
          <ListHead>Companies</ListHead>
          <Lists>
            <List>About us</List>
            <List>Career</List>
            <List>Leadership</List>
            <List>Partners</List>
            <List>Press</List>
            <List>Contact us</List>
          </Lists>
        </ListHolder>
        <ListHolder txtA={txtA}>
          <ListHead>Resources</ListHead>
          <Lists>
            <List>WhyOfficeSpace</List>
            <List>Customers Stories</List>
            <List>Blogs</List>
            <List>Guilds</List>
          </Lists>
        </ListHolder>
        <Text txtA={txtA}>
          Copyright
          <br /> @2022 Surprise steepest recurred landlord mr wandered amounted
          of. Continuing devonshire but considered its. Rose
        </Text>
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  height: 50vh;
  display: flex;
  margin-top: 20px;
  flex-direction: ${({ txtA }) => (txtA ? "column" : "unset")};
  align-items: ${({ txtA }) => (txtA ? "center" : "unset")};
  padding: 0px 80px;
  justify-content: space-between;
  background: #24231d;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.7);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  text-align: ${({ txtA }) => (txtA ? "center" : "unset")};
  display: flex;
  flex-direction: column;
  align-items: ${({ txtA }) => (txtA ? "center" : "flex-start")};
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const Right = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: ${({ txtA }) => (txtA ? "column" : "unset")};
  align-items: ${({ txtA }) => (txtA ? "center" : "unset")};
  text-align: ${({ txtA }) => (txtA ? "center" : "unset")};
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 40px;
  object-fit: contain;
`;

const Write = styled.div`
  margin-top: 14px;
  max-width: 320px;
  font-size: 14px;
  line-height: 28px;
  text-align: ${({ txtA }) => (txtA ? "center" : "justify")};
  font-weight: 500;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Icon = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const ListHolder = styled.div`
  margin-right: ${({ txtA }) => (txtA ? "unset" : "60px")};
  margin-top: ${({ txtA }) => (txtA ? "40px" : "unset")};
  @media screen and (max-width: 768px) {
    margin-right: unset;
    margin-top: 40px;
  }
`;

const ListHead = styled.div`
  font-weight: 800;
  font-size: 18px;
`;

const Lists = styled.div`
  margin-top: 20px;
`;

const List = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    color: #4bae46;
  }
`;

const Text = styled.div`
  line-height: 28px;
  max-width: 250px;
  font-size: 15px;
  margin-top: ${({ txtA }) => (txtA ? "40px" : "unset")};
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

const IconHolder = styled.div`
  height: 40px;
  width: 40px;
  background: #1f1e17;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  font-size: 15px;
  margin-right: 20px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    background: #4bae46;
  }
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
