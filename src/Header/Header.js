import React from "react";
import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { animateScroll as scroll, Link } from "react-scroll";

const Header = () => {
  const show = () => {
    document.getElementById("sidebar").style.right = "0";
  };
  const vanish = () => {
    document.getElementById("sidebar").style.right = "-100%";
  };

  return (
    <Container>
      <Wrapper>
        <Logo src="/assets/logo.png" />
        <Right>
          <Navigators>
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
              <Nav>Home</Nav>
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
              <Nav>About</Nav>
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
              <Nav>Services</Nav>
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
              <Nav>Projects</Nav>
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
              <Nav>Contact</Nav>
            </Link>
          </Navigators>
          <Icons>
            <Icon>
              <BsTelephone />
            </Icon>
            <Icon>
              <IoMailOutline />
            </Icon>
            <Icon>
              <IoLocationOutline />
            </Icon>
          </Icons>
        </Right>
      </Wrapper>
      <MobileView>
        <Logo src="/assets/logo.png" />
        <MobileIcons>
          <MIcon>
            <BsTelephone />
          </MIcon>
          <MIcon>
            <IoMailOutline />
          </MIcon>
          <MIcon>
            <IoLocationOutline />
          </MIcon>
          <MIcon onClick={show}>
            <FiMenu />
          </MIcon>
        </MobileIcons>
      </MobileView>
      <SideBar id="sidebar">
        <Cancel onClick={vanish}>
          <IoMdClose />
        </Cancel>
        <SideLogo src="/assets/logo.png" />
        <SideNavigator>
          <SideNav>Home</SideNav>
          <SideNav>About</SideNav>
          <SideNav>Services</SideNav>
          <SideNav>Project</SideNav>
          <SideNav>Contact</SideNav>
        </SideNavigator>
      </SideBar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  @media screen and (max-width: 768px) {
    background: rgba(0, 0, 0, 0.7);
    height: auto;
    position: unset;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 60px;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
`;

const Navigators = styled.div`
  display: flex;
  color: #adadad;
  align-items: center;
`;

const Nav = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin-right: 50px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    color: white;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding-left: 50px;
`;

const Icon = styled.div`
  margin-right: 40px;
  font-size: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;
  color: white;
`;

const MobileView = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const MobileIcons = styled.div`
  display: flex;
  height: 80px;
  background: #f8f7f1;
  width: 100%;
  margin-top: 10px;
  align-items: center;
  justify-content: space-around;
`;

const MIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  color: rgba(0, 0, 0, 0.7);
`;

const SideBar = styled.div`
  width: 90vw;
  height: 100%;
  position: fixed;
  top: 0;
  right: -100%;
  background: #212121;
  color: white;
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  transition: all 350ms;
  z-index: 1000;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Cancel = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  color: #4baf47;
`;

const SideLogo = styled.img`
  margin-top: 20px;
`;

const SideNavigator = styled.div`
  flex: 0.8;
  margin-top: 30px;
  width: 80%;
`;

const SideNav = styled.div`
  margin-bottom: 30px;
  padding-bottom: 13px;
  font-size: 17px;
  border-bottom: 1px solid rgba(75, 174, 70, 0.2);
  font-weight: 600;
`;
