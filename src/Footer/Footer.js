import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import styled from "styled-components";
import { animateScroll as scroll, Link } from "react-scroll";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo src="/assets/logo.png" />
        <Write>
          oth rest of know draw fond post as. It agreement defective to
          excellent. Feeby do engage of narrow. Extensive repulsive belonging
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
      <Right>
        <ListHolder>
          <ListHead>Companies</ListHead>
          <Lists>
            <Link
              offset={-130}
              activeClass="active"
              to="home"
              smooth={true}
              duration={500}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <List>Home</List>
            </Link>
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              duration={500}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <List>About</List>
            </Link>
            <Link
              activeClass="active"
              to="services"
              smooth={true}
              duration={500}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <List>Services</List>
            </Link>
            <Link
              offset={-30}
              activeClass="active"
              to="projects"
              smooth={true}
              duration={500}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <List>Projects</List>
            </Link>
            <Link
              offset={-50}
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <List>Contact us</List>
            </Link>
          </Lists>
        </ListHolder>
        <ListHolder>
          <ListHead>Resources</ListHead>
          <Lists>
            <List>WhyOfficeSpace</List>
            <List>Customers Stories</List>
            <List>Blogs</List>
            <List>Guilds</List>
          </Lists>
        </ListHolder>
        <Text>
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
  padding: 0px 80px;
  justify-content: space-between;
  background: #24231d;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.7);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 0 10px;
    padding-bottom: 20px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const Right = styled.div`
  display: flex;
  margin-top: 50px;
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
  margin-right: 60px;
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
