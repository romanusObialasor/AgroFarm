import React from "react";
import styled from "styled-components";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src="/assets/logo.png" />
        <Right>
          <Navigators>
            <Nav>Home</Nav>
            <Nav>About</Nav>
            <Nav>Services</Nav>
            <Nav>Projects</Nav>
            <Nav>Contact</Nav>
            <Nav>Footer</Nav>
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
`;

const Wrapper = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: space-between;
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

// const Container = styled.div``;

// const Container = styled.div``;
